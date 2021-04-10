import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CmsComponentData } from '@spartacus/storefront';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Alignment } from '../../../cms.model';
import { StorybookComponentModel } from '../../storybook/storybook.model';
import { Heading, HeadingStyle } from './headline.model';

/**
 * Generates a h1 and h2 based on the available component data.
 *
 * The component data is read from the injection tree, so that any
 */
@Component({
  selector: 'cx-headline',
  template: `
    <h1
      *ngIf="headline$ | async as header"
      [innerHtml]="header.text"
      [class]="header.style"
    ></h1>
    <h2
      *ngIf="subHeadline$ | async as header"
      [innerHtml]="header.text"
      [class]="header.style"
    ></h2>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeadlineComponent {
  constructor(protected component: CmsComponentData<StorybookComponentModel>) {}

  /**
   * Returns the `Heading` for the main headline.
   */
  headline$: Observable<Heading | undefined> = this.component.data$.pipe(
    map((data) =>
      !!data.showComponentHeadline && data.headline
        ? {
            text: data.headline,
            style: this.getStyle(
              data.headlineAlignment ?? data.componentHeadlineAlignment
            ),
          }
        : undefined
    )
  );

  /**
   * Returns the `Heading` for the sub headline.
   */
  subHeadline$: Observable<Heading | undefined> = this.component.data$.pipe(
    map((data) =>
      !!data.showComponentSubHeadline && data.subHeadline
        ? {
            text: data.subHeadline,
            style: this.getStyle(
              data.subHeadlineAlignment ?? data.componentSubHeadlineAlignment
            ),
          }
        : undefined
    )
  );

  /**
   * Maps the given style to a more appropriate header style.
   *
   * We mainly care for directionality here, using `start` over `right` and
   * `end` over `left`.
   */
  protected getStyle(style?: Alignment): HeadingStyle {
    if (style === Alignment.RIGHT) {
      return HeadingStyle.END;
    }
    if (style === Alignment.CENTER) {
      return HeadingStyle.CENTER;
    }
    return HeadingStyle.START;
  }
}
