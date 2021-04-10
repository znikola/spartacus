import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  CmsPageAdapter,
  CmsStructureModel,
  CMS_PAGE_NORMALIZER,
  ConverterService,
  HOME_PAGE_CONTEXT,
  PageContext,
} from '@spartacus/core';
import { Observable } from 'rxjs';
import { UpscaleConfig } from '../config/upscale.config';

/**
 * Loads CMS page data from the Upscale API.
 */
@Injectable({
  providedIn: 'root',
})
export class UpscaleCmsPageAdapter implements CmsPageAdapter {
  protected headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(
    protected http: HttpClient,
    protected config: UpscaleConfig,
    protected converter: ConverterService
  ) {}

  /**
   * Loads the page template information.
   */
  load(pageContext: PageContext): Observable<CmsStructureModel> {
    const alias: string = this.findAlias(pageContext);

    const endpoint = `${this.config.upscale?.baseUrl}/consumer/content-repository/experiences/${this.config.upscale?.experienceId}/templates?aliases=${alias}&expand=components,aliases`;
    // &expand=aliases,components,seo.urlSlugTranslations&pageSize=30&pageNumber=1&pageSize=10`;

    return this.http
      .get(endpoint, { headers: this.headers })
      .pipe(this.converter.pipeable(CMS_PAGE_NORMALIZER));
  }

  protected findAlias(pageContext: PageContext): string {
    if (pageContext.id === HOME_PAGE_CONTEXT) {
      return 'HOME';
    } else {
      console.log('pageContext', pageContext);
    }
    return 'HOME';
  }
}
