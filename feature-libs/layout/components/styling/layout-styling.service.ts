import { Injectable, OnDestroy } from '@angular/core';
import { EventService } from '@spartacus/core';
import { LayoutStylingFacade } from '@spartacus/layout/root';
import { ComponentCreateEvent } from '@spartacus/storefront';
import { Subscription } from 'rxjs';
import { concatMap, filter, map, takeWhile, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LayoutStylingService implements OnDestroy {
  protected componentStyles: string[] = ['STORYBOOK', 'IMAGE'];

  protected subscription = new Subscription();

  constructor(
    protected eventService: EventService,
    protected layoutStylingFacade: LayoutStylingFacade
  ) {
    this.init();
  }

  init() {
    this.subscription.add(
      this.eventService
        .get(ComponentCreateEvent)
        .pipe(
          tap((ev) => console.log('event', ev)),
          takeWhile(() => this.componentStyles.length > 0),
          map((event) => event.typeCode),
          filter((typeCode) => this.componentStyles.includes(typeCode)),
          tap((typeCode) => {
            const index = this.componentStyles.indexOf(typeCode);
            this.componentStyles.splice(index, 1);
          }),
          concatMap((typeCode) => this.layoutStylingFacade.load(typeCode))
        )
        .subscribe()
    );
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
