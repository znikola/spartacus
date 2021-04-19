import { Injectable, OnDestroy } from '@angular/core';
import { EventService } from '@spartacus/core';
import { LayoutStylingFacade } from '@spartacus/layout/root';
import { ComponentCreateEvent } from '@spartacus/storefront';
import { Subscription } from 'rxjs';
import { filter, switchMap, tap } from 'rxjs/operators';

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
          tap(console.log),
          filter((event) => this.componentStyles.includes(event.typeCode)),
          tap((event) => {
            // we only want a one time usage here
            const index = this.componentStyles.indexOf(event.typeCode);
            this.componentStyles = this.componentStyles.splice(index, 1);
          }),
          switchMap((event) => this.layoutStylingFacade.load(event.typeCode))
        )
        .subscribe()
    );
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
