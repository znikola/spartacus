import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContentSlotComponentData } from '@spartacus/core';
import { CmsComponentData } from '@spartacus/storefront';
import { TemplateSlot } from './model';
import { TemplateSlotComponentService } from './template-slot-component.service';

export { TemplateSlot } from './model';

@Component({
  selector: 'cx-template-slot',
  templateUrl: './template-slot.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: TemplateSlotComponentService,
      useClass: TemplateSlotComponentService,
    },
  ],
})
export class TemplateSlotComponent {
  constructor(
    protected component: CmsComponentData<TemplateSlot>,
    protected layout: TemplateSlotComponentService // protected elementRef: ElementRef
  ) {}

  data$ = this.component.data$
    .pipe
    // filter((data) => data.contentIds?.length > 0)
    ();

  getComponents(data: TemplateSlot): ContentSlotComponentData[] {
    // some components do not have contentIds... ARTICLE_DETAILS for example
    if (data.contentIds?.length === 0) {
      return [{ uid: data.id, typeCode: data.type, flexType: data.type }];
    }

    // Q: what's the difference between type, typeCode and containerType?
    return data.contentIds.map((uid) => ({
      uid,
      type: data.containerType,
      flexType: data.containerType,
    }));
  }
}
