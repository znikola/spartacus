import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  CmsComponent,
  CmsPageAdapter,
  CmsStructureModel,
  ContentSlotData,
  HOME_PAGE_CONTEXT,
  PageContext,
  PageType,
} from '@spartacus/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UpscaleConfig } from '../config/upscale.config';

export interface OccCmsPageRequest {
  pageLabelOrId?: string;
  pageType?: PageType;
  code?: string;
  fields?: string;
}

export interface UpscalePage {
  content: {
    id: string;
    aliases: string[];
    seo?: {
      title?: string;
      description?: string;
    };
    components: {
      type: string;
      id: string;
      position: number;
    }[];
  }[];
}

@Injectable({
  providedIn: 'root',
})
export class UpscaleCmsPageAdapter implements CmsPageAdapter {
  protected headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(protected http: HttpClient, protected config: UpscaleConfig) {}

  /**
   * Loads the page template information.
   */
  load(pageContext: PageContext): Observable<CmsStructureModel> {
    const alias: string = this.findAlias(pageContext);

    const endpoint = `${this.config.upscale.baseUrl}/consumer/content-repository/experiences/${this.config.upscale.experienceId}/templates?aliases=${alias}&expand=components`;

    // &expand=aliases,components,seo.urlSlugTranslations&pageSize=30&pageNumber=1&pageSize=10`;

    return this.http.get(endpoint, { headers: this.headers }).pipe(
      // tap((page) => console.log('page data', page)),
      map((templates: UpscalePage) => this.normalize(templates, pageContext))
    );
  }

  protected findAlias(pageContext: PageContext): string {
    if (pageContext.id === HOME_PAGE_CONTEXT) {
      return 'HOME';
    } else {
      console.log(pageContext);
    }
    return 'HOME';
  }

  protected normalize(
    templates: UpscalePage,
    pageContext: PageContext
  ): CmsStructureModel {
    const template = this.findTemplate(templates, pageContext);
    const components = this.findComponents(template);

    return {
      page: {
        type: pageContext.type ?? PageType.CONTENT_PAGE,
        pageId: pageContext.id,
        slots: this.findSlots(template),
        title: template.seo?.title,
        // description: template.seo?.description
      },
      // upscale doesn't provide any component date upfront afaik
      components,
    };
  }

  protected findComponents(template): CmsComponent[] {
    const components = [];

    template.components?.forEach((slotComp) => {
      if (['NEXT_SELL', 'BROWSE', 'STORYBOOK'].includes(slotComp.type)) {
        components.push({
          uid: slotComp.id,
          typeCode: slotComp.type,
          ...slotComp,
        } as CmsComponent);
      }
    });
    // console.log(components);
    return components;
  }

  protected findSlots(template): { [key: string]: ContentSlotData } {
    if (!template) {
      return {};
    }
    const slots: { [key: string]: ContentSlotData } = {};

    template.components?.forEach((slotComp) => {
      // console.log('slot comp', slotComp);
      const components = [];
      if (slotComp.contentIds?.length > 0 && slotComp.type !== 'STORYBOOK') {
        slotComp.contentIds.forEach((id) => {
          components.push({
            typeCode: slotComp.type,
            flexType: slotComp.type,
            uid: id,
          });
        });
      } else {
        components.push({
          typeCode: slotComp.type,
          uid: slotComp.id,
          flexType: slotComp.type,
        });
      }
      const slot: ContentSlotData = { components };
      if (slotComp.headline) {
        slot.headline = slotComp.headline;
      }
      if (slotComp.headline) {
        slot.subHeadline = slotComp.subHeadline;
      }
      slots[slotComp.type + '_slot'] = slot;
    });
    return slots;
  }

  protected findTemplate(templates: UpscalePage, _pageContext?: PageContext) {
    if (templates.content.length === 1) {
      return templates.content[0];
    }
    // console.log(pageContext);
    // console.log(templates);
    return templates.content.find((t) => t.aliases?.includes('HOME'));
  }
}
