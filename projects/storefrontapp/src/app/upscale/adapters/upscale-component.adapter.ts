import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  CmsComponent,
  CmsComponentAdapter,
  PageContext,
} from '@spartacus/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UpscaleCmsComponentAdapter implements CmsComponentAdapter {
  protected headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(protected http: HttpClient) {}

  load<T extends CmsComponent>(
    _id: string,
    _pageContext: PageContext
  ): Observable<T> {
    console.log('load single component');
    return;
    // return this.http
    //   .get<T>(this.getComponentEndPoint(id, pageContext), {
    //     headers: this.headers,
    //   })
    //   .pipe(this.converter.pipeable<any, T>(CMS_COMPONENT_NORMALIZER));
  }

  findComponentsByIds(
    ids: string[],
    _pageContext: PageContext,
    _fields = 'DEFAULT',
    _currentPage = 0,
    _pageSize = ids.length,
    _sort?: string
  ): Observable<CmsComponent[]> {
    // const baseUrl =
    //   'https://qa-prod-approuter-caas2-sap.cfapps.us10.hana.ondemand.com';
    const baseUrl =
      'https://cxlive19a-approuter-caas2-sap.cfapps.us10.hana.ondemand.com';
    const endpoint = `${baseUrl}/consumer/content-repository/contents?pageNumber=1&ids=${ids.join(
      ','
    )}`;

    return this.http
      .get(endpoint, { headers: this.headers })
      .pipe(map((contentData) => this.normalize(contentData)));
  }

  protected normalize(contentData): CmsComponent[] {
    return contentData.content.map((content) => {
      return {
        uid: content.id,
        typeCode: content.type,
        ...content,
      } as CmsComponent;
    });
    return [];
  }
}
