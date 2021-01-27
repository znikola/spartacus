import { Injectable } from '@angular/core';
import { CmsService } from '@spartacus/core';
import { CmsComponentData } from '@spartacus/storefront';
import { Observable, of } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { StorybookComponentModel } from '../../cms.model';

@Injectable()
export class StorybookService {
  constructor(
    protected component: CmsComponentData<StorybookComponentModel>,
    protected cmsService: CmsService
  ) {}

  getStorybookItems(): Observable<Observable<string>[]> {
    return this.component.data$.pipe(
      tap(console.log),
      filter((content) => Boolean(content)),
      map((content) => content.contentIds.map((id) => of(id)))
    );
  }

  getContent(id: string) {
    return this.cmsService.getComponentData(id).pipe(
      map((content) => {
        const typeCode = this.getType(content);
        return {
          uid: content.id,
          typeCode,
          flexType: typeCode,
        };
      })
    );
  }

  protected getType(content) {
    return !content.link?.type ||
      content.link.type === 'ALIAS' ||
      content.link.type === 'TEMPLATEID'
      ? content.source
      : content.link.type;
  }
}
