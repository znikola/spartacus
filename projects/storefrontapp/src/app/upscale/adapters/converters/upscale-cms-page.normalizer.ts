import { Injectable } from '@angular/core';
import {
  CmsComponent,
  CmsStructureModel,
  ContentSlotComponentData,
  Converter,
  PageType,
} from '@spartacus/core';
import { UpscaleComponent, UpscalePage, UpscaleTemplate } from '../cms.model';

@Injectable({ providedIn: 'root' })
export class UpscaleCmsPageNormalizer
  implements Converter<UpscalePage, CmsStructureModel> {
  convert(
    source: UpscalePage,
    target: CmsStructureModel = {}
  ): CmsStructureModel {
    target = this.normalizePage(source);
    return target;
  }

  protected normalizePage(source: UpscalePage): CmsStructureModel {
    const template = source.content?.[0];
    console.error('source', source);

    const components = this.findComponents(template);
    console.log(this.findComponentRefs(template));
    return {
      page: {
        type: PageType.CONTENT_PAGE,
        // Consider using a match all template for upscale
        template: 'virtualTemplate', //template.aliases?.[0],
        pageId: template.id,
        slots: {
          virtualSlot: { components: this.findComponentRefs(template) },
        },
        title: template?.seo?.title,
        description: template.seo?.description,
      },
      // upscale doesn't provide any component date upfront afaik
      components,
    };
  }

  protected findComponentRefs(
    template: UpscaleTemplate
  ): ContentSlotComponentData[] {
    return template.components?.map((component) => {
      const typeCode = this.getComponentType(component);
      return {
        uid: component.id,
        typeCode,
        flexType: typeCode,
      };
    });
  }

  protected getComponentType(component: UpscaleComponent): string {
    if (['IMAGE', 'STORYBOOK'].includes(component.type)) {
      return 'TEMPLATE_SLOT';
    }

    return 'TEMPLATE_SLOT';

    // console.log('comp type', component.type);
    // return 'CONTAINER';
    return component.type;
  }

  protected findComponents(template: UpscaleTemplate): CmsComponent[] {
    const components: CmsComponent[] = [];

    template.components?.forEach((slotComp) => {
      // if (['NEXT_SELL', 'BROWSE', 'STORYBOOK'].includes(slotComp.type)) {
      components.push({
        uid: slotComp.id,
        typeCode: slotComp.type,
        containerType: slotComp.type,
        ...slotComp,
      } as CmsComponent);
    });
    return components;
  }
}
