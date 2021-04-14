import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  CmsComponent,
  CmsComponentAdapter,
  CMS_COMPONENT_NORMALIZER,
  ConverterService,
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
  constructor(
    protected http: HttpClient,
    protected config: UpscaleConfig,
    protected converter: ConverterService
  ) {}

  load<T extends CmsComponent>(
    id: string,
    _pageContext: PageContext,
    _fields?: string
  ): Observable<T> {
    const endpoint = `${this.config.upscale?.baseUrl}/consumer/content-repository/contents/${id}`;

    return this.http.get(endpoint, { headers: this.headers }).pipe(
      // tap((c) => console.log('content', c)),
      this.converter.pipeable<unknown, T>(CMS_COMPONENT_NORMALIZER)
    );
  }

  findComponentsByIds(
    ids: string[],
    _pageContext: PageContext,
    _fields = 'DEFAULT',
    _currentPage = 0,
    _pageSize = ids.length,
    _sort?: string
  ): Observable<CmsComponent[]> {
    const endpoint = `${
      this.config.upscale?.baseUrl
    }/consumer/content-repository/contents?pageNumber=1&ids=${ids.join(',')}`;

    if (ids.length === 1) {
      // HACK:
      return this.load(ids[0], _pageContext).pipe(map((single) => [single]));
    }

    return this.http.get(endpoint, { headers: this.headers }).pipe(
      // tap((c) => console.log('c', c)),
      map((contentData: any) => contentData.content),
      this.converter.pipeableMany(CMS_COMPONENT_NORMALIZER)
    );
  }
}
