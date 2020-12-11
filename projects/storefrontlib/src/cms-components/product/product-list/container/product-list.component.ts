import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CmsProductListComponent, ViewModes } from '@spartacus/core';
import { switchMap, tap } from 'rxjs/operators';
import { CmsComponentData } from '../../../../cms-structure/page/model/cms-component-data';
import { ViewConfig } from '../../../../shared/config/view-config';
import { ProductListComponentService } from './product-list-component.service';

@Component({
  selector: 'cx-product-list',
  templateUrl: './product-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent implements OnInit {
  isInfiniteScroll: boolean;

  model$ = this.cmsComponentData.data$.pipe(
    tap((data) => {
      this.service.viewMode = data.viewMode;
      this.service.pageSize = data.pageSize;
      console.log(data);
    }),
    switchMap(() => this.service.model2$),
    tap((data) => console.log(data))
  );

  ViewModes = ViewModes;

  constructor(
    private service: ProductListComponentService,
    public scrollConfig: ViewConfig,
    protected cmsComponentData: CmsComponentData<CmsProductListComponent>
  ) {}

  ngOnInit(): void {
    this.isInfiniteScroll = this.scrollConfig.view.infiniteScroll.active;
  }

  sortList(sortCode: string): void {
    this.service.sort(sortCode);
  }

  setViewMode(mode: ViewModes): void {
    this.service.viewMode = mode;
  }
}
