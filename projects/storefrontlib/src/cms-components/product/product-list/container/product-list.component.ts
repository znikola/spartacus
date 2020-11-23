import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductSearchPage } from '@spartacus/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { CmsComponentData } from '../../../../cms-structure/page/index';
import { ViewConfig } from '../../../../shared/config/view-config';
import { ProductListComponentService } from './product-list-component.service';
import {
  CmsProductListComponent,
  CmsProductListComponentConfiguration,
  ViewModes,
} from './product-list.model';

@Component({
  selector: 'cx-product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit, OnDestroy {
  private subscription = new Subscription();

  isInfiniteScroll: boolean;

  pageSize = this.cmsComponentData.configuration?.pageSize;

  viewMode$ = new BehaviorSubject<ViewModes>(
    this.cmsComponentData.configuration?.viewMode ?? ViewModes.Grid
  );

  model$: Observable<ProductSearchPage> = this.viewMode$.pipe(
    switchMap((viewMode) =>
      this.productListComponentService.getItems(this.pageSize).pipe(
        map((items) => ({
          ...items,
          viewMode,
        }))
      )
    )
  );

  ViewModes = ViewModes;

  constructor(
    private productListComponentService: ProductListComponentService,
    public scrollConfig: ViewConfig,
    protected cmsComponentData: CmsComponentData<
      CmsProductListComponent,
      CmsProductListComponentConfiguration
    >
  ) {}

  ngOnInit(): void {
    this.isInfiniteScroll = this.scrollConfig.view.infiniteScroll.active;
  }

  sortList(sortCode: string): void {
    this.productListComponentService.sort(sortCode);
  }

  setViewMode(mode: ViewModes): void {
    this.viewMode$.next(mode);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
