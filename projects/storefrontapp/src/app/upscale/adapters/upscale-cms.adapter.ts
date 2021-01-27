import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  CmsPageAdapter,
  CmsStructureModel,
  ContentSlotData,
  PageContext,
  PageType,
} from '@spartacus/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

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

  constructor(protected http: HttpClient) {}

  /**
   * Loads the page template information.
   */
  load(pageContext: PageContext): Observable<CmsStructureModel> {
    // console.log('pageContext', pageContext);
    const baseUrl =
      'https://cxlive19a-approuter-caas2-sap.cfapps.us10.hana.ondemand.com';
    const experience = '92fede25-f001-4245-baa3-481ddc4db91f';

    // const baseUrl =
    //   'https://qa-prod-approuter-caas2-sap.cfapps.us10.hana.ondemand.com';
    // const experience = 'e531ace1-867f-449a-a173-242a0e23f6fb';

    // TODO: map page context to alias
    const alias = 'HOME';

    const endpoint = `${baseUrl}/consumer/content-repository/experiences/${experience}/templates?aliases=${alias}&expand=components`;

    // &expand=aliases,components,seo.urlSlugTranslations&pageSize=30&pageNumber=1&pageSize=10`;

    // https://cxlive19a-approuter-caas2-sap.cfapps.us10.hana.ondemand.com/consumer/content-repository/experiences/92fede25-f001-4245-baa3-481ddc4db91f/templates?aliases=HOME&pageNumber=1&pageSize=10

    // https://cxlive19a-approuter-caas2-sap.cfapps.us10.hana.ondemand.com/consumer/content-repository/experiences/92fede25-f001-4245-baa3-481ddc4db91f/templates

    return this.http.get(endpoint, { headers: this.headers }).pipe(
      tap((page) => console.log('page data', page)),
      map((templates: UpscalePage) => this.normalize(templates, pageContext))
      // tap(console.log)
    );
  }

  protected normalize(
    templates: UpscalePage,
    pageContext: PageContext
  ): CmsStructureModel {
    const template = this.findTemplate(templates, pageContext);

    return {
      page: {
        type: pageContext.type ?? PageType.CONTENT_PAGE,
        pageId: pageContext.id,
        slots: this.findSlots(template),
        title: template.seo?.title,
        // description: template.seo?.description
      },
      // upscale doesn't provide any component date upfront afaik
      // components,
    };
  }

  protected findSlots(template): { [key: string]: ContentSlotData } {
    if (!template) {
      return {};
    }
    const slots: { [key: string]: ContentSlotData } = {};

    template.components?.forEach((slotComp) => {
      const components = [];
      if (slotComp.contentIds) {
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
