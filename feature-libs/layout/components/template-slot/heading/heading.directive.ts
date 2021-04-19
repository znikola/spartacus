import {
  Directive,
  ElementRef,
  HostBinding,
  Input,
  OnDestroy,
} from '@angular/core';
import { CmsComponentData } from '@spartacus/storefront';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Alignment, TemplateSlot } from '../model';
import { HeadingStyle } from './headline.model';

export enum headline {
  HEADLINE = 'headline',
  SUB_HEADLINE = 'subHeadline',
}

@Directive({
  selector: '[cxHeading]',
})
export class HeadingDirective implements OnDestroy {
  constructor(
    protected component: CmsComponentData<any>,
    protected elementRef: ElementRef<HTMLElement>
  ) {}

  @Input() cxHeading: headline;
  @Input() cxHeadingAlign: string;

  protected data$ = this.component.data$.pipe(filter((data) => Boolean(data)));

  @HostBinding() innerHTML: string | undefined;

  @HostBinding('class.heading') heading = true;
  @HostBinding('class') styleClass: string;

  protected sub = new Subscription().add(
    this.data$.subscribe((data) => this.resolve(data))
  );

  protected resolve(data: TemplateSlot) {
    if (
      (this.cxHeading === headline.HEADLINE ||
        this.elementRef.nativeElement.tagName === 'H1') &&
      data.showComponentHeadline &&
      data.headline
    ) {
      this.innerHTML = data.headline;
      this.styleClass = this.getStyle(data.componentHeadlineAlignment);
    } else if (
      (this.cxHeading === headline.SUB_HEADLINE ||
        this.elementRef.nativeElement.tagName === 'H2') &&
      data.showComponentSubHeadline &&
      data.subHeadline
    ) {
      this.innerHTML = data.subHeadline;
      this.styleClass = this.getStyle(data.componentSubHeadlineAlignment);
    }
  }

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

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
