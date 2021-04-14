import { Directive, ElementRef, Input } from '@angular/core';
import { TemplateSlot } from '../model';
import { ContainerLayoutService } from './template-slot-layout.service';

@Directive({
  selector: '[cxSlotLayout]',
})
export class TemplateSlotLayoutDirective {
  constructor(
    protected service: ContainerLayoutService,
    protected elementRef: ElementRef<HTMLElement>
  ) {}

  @Input() set cxSlotLayout(data: TemplateSlot) {
    this.service.setStyles(this.host, data);
  }

  protected get host(): HTMLElement {
    return (
      this.elementRef.nativeElement?.parentElement ??
      this.elementRef.nativeElement
    );
  }
}
