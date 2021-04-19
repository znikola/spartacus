import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';
import { BehaviorSubject, queueScheduler } from 'rxjs';
import { filter, observeOn, switchMap, tap } from 'rxjs/operators';
import { StorybookComponentModel } from '../../core/model';
import { StorybookService } from '../storybook/storybook.service';

@Component({
  selector: 'cx-storybook-content',
  templateUrl: 'storybook-content.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StorybookContentComponent {
  @HostBinding('class.story-content') cls = true;

  protected id$: BehaviorSubject<string> = new BehaviorSubject(undefined);

  @Input() set id(value: string) {
    this.id$.next(value);
  }

  @Input() layout: StorybookComponentModel;

  content$ = this.id$.pipe(
    filter((id) => Boolean(id)),
    observeOn(queueScheduler),
    switchMap((id) =>
      this.storybookService
        .getContent(id)
        .pipe(tap((content) => this.validateContent(content)))
    )
  );

  constructor(protected storybookService: StorybookService) {}

  protected validateContent(content) {
    if (!content) {
      return;
    }

    if (!(content.imageUrl || content.heroImageUrl)) {
      this.id$.next(content.link?.value);
    }
  }
}
