import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CmsService, RoutingService } from '@spartacus/core';
import { CmsComponentData } from '@spartacus/storefront';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { ArticleContentComponentModel } from '../../core/model';

@Component({
  selector: 'cx-article-content',
  templateUrl: 'article-content.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleContentComponent {
  constructor(
    protected component: CmsComponentData<ArticleContentComponentModel>,
    protected cmsService: CmsService,
    protected routingService: RoutingService,
    protected route: ActivatedRoute
  ) {}

  protected articleCode$ = this.route.params.pipe(
    map((params) => params['value']),
    // TODO: map article code from route
    map(() => 'efce73fe-12cc-4d98-96e4-ef51f87f768e')
  );

  // protected articleCode$: Observable<string> = this.routingService
  //   .getRouterState()
  //   .pipe(
  //     tap(console.log),
  //     map((state) => state.state.params['value'])
  //   );

  public article$: Observable<any> = this.articleCode$.pipe(
    tap((articleCode) => console.log('articleCode', articleCode)),
    switchMap((articleCode) => this.cmsService.getComponentData(articleCode)),
    tap((article) => console.log('post article', article))
  );
}
