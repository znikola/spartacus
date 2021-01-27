import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CmsService } from '@spartacus/core';
import { CmsComponentData } from '@spartacus/storefront';
import { Observable } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';
import { ArticleContentComponentModel } from '../../cms.model';

@Component({
  selector: 'upscale-article-content',
  templateUrl: 'article-content.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleContentComponent {
  public article$: Observable<any> = this.component.data$.pipe(
    filter((content) => Boolean(content.link?.value)),
    switchMap((content) =>
      this.cmsService.getComponentData(content.link?.value)
    )
  );

  constructor(
    protected component: CmsComponentData<ArticleContentComponentModel>,
    protected cmsService: CmsService
  ) {}
}
