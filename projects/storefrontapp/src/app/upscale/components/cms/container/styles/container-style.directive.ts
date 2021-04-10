import { Directive, ElementRef, Input } from '@angular/core';
import { ContentComponentModel } from '../../../cms.model';
import { ContainerLayoutService } from './container-layout.service';

@Directive({
  selector: '[cxContainerLayout]',
})
export class ContainerLayoutDirective {
  constructor(
    protected service: ContainerLayoutService,
    protected elementRef: ElementRef<HTMLElement>
  ) {}

  /**
   * Writes the schema data to a json-ld script element.
   */
  @Input() set cxContainerLayout(data: ContentComponentModel) {
    if (this.elementRef.nativeElement.parentElement) {
      this.service.setStyles(this.elementRef.nativeElement.parentElement, data);
    }
  }
}
