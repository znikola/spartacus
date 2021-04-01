import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  CmsComponent,
  CmsComponentAdapter,
  PageContext,
} from '@spartacus/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UpscaleConfig } from '../config/upscale.config';

@Injectable({
  providedIn: 'root',
})
export class UpscaleCmsComponentAdapter implements CmsComponentAdapter {
  protected headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(protected http: HttpClient, protected config: UpscaleConfig) {}

  load<T extends CmsComponent>(
    id: string,
    _pageContext: PageContext,
    _fields?: string
  ): Observable<T> {
    // console.log('load single component', id, _pageContext);

    // return this.http
    //   .get<T>(this.getComponentEndPoint(id, pageContext), {
    //     headers: this.headers,
    //   })
    //   .pipe(this.converter.pipeable<any, T>(CMS_COMPONENT_NORMALIZER));
    const endpoint = `${this.config.upscale.baseUrl}/consumer/content-repository/contents/${id}`;

    return this.http
      .get(endpoint, { headers: this.headers })
      .pipe(map((contentData) => this.normalizeComponent(contentData) as T));
  }

  findComponentsByIds(
    ids: string[],
    _pageContext: PageContext,
    _fields = 'DEFAULT',
    _currentPage = 0,
    _pageSize = ids.length,
    _sort?: string
  ): Observable<CmsComponent[]> {
    // console.log('load multiple component', ids);

    const endpoint = `${
      this.config.upscale.baseUrl
    }/consumer/content-repository/contents?pageNumber=1&ids=${ids.join(',')}`;

    if (ids.length === 1) {
      // HACK:
      return this.load(ids[0], _pageContext).pipe(map((single) => [single]));
    }

    return this.http
      .get(endpoint, { headers: this.headers })
      .pipe(map((contentData: any) => this.normalize(contentData)));
  }

  protected normalize(contentData): CmsComponent[] {
    return contentData.content.map((content) =>
      this.normalizeComponent(content)
    );
  }

  protected normalizeComponent(content): CmsComponent {
    return { uid: content.id, typeCode: content.type, ...content };
  }
}
