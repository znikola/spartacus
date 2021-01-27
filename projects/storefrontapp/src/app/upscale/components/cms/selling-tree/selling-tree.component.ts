import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CmsComponentData } from '@spartacus/storefront';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { SellingTreeComponentModel } from '../../cms.model';
import { SellingTreeService } from './selling-tree.service';

@Component({
  selector: 'upscale-selling-tree',
  templateUrl: 'selling-tree.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SellingTreeComponent {
  componentData$: Observable<SellingTreeComponentModel> = this.component.data$;

  categories$ = this.componentData$.pipe(
    filter((data) => Boolean(data.link?.value)),
    map((data) =>
      data.link.value.map((value) =>
        this.sellingTreeService.get(value.sellingTreeId, value.categoryPath)
      )
    )
  );
  //   content$ = this.componentData$.pipe(
  //     map((content) =>
  //       content.contentIds.map((id) => this.contentService.get(id))
  //     )
  //   );

  constructor(
    protected component: CmsComponentData<SellingTreeComponentModel>,
    protected sellingTreeService: SellingTreeService
  ) {}
}
