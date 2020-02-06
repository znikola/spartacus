import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  CmsConfig,
  ConfigModule,
  FeaturesConfigModule,
  I18nModule,
  UrlModule,
} from '@spartacus/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SelectorModule } from '../../../selector/selector.module';
import { ViewConfig } from '../../../shared/config/view-config';
import { ViewConfigModule } from '../../../shared/config/view-config.module';
import {
  ItemCounterModule,
  ListNavigationModule,
  MediaModule,
  SpinnerModule,
  StarRatingModule,
} from '../../../shared/index';
import { AddToCartModule } from '../../cart/index';
import { IconModule } from '../../misc/icon/index';
import { defaultScrollConfig } from '../config/default-scroll-config';
import { ProductVariantsModule } from '../product-variants/product-variants.module';
import { ProductListComponent } from './container/product-list.component';
import { ProductScrollComponent } from './container/product-scroll/product-scroll.component';
import { ProductFacetNavigationComponent } from './product-facet-navigation/product-facet-navigation.component';
import { ProductGridItemComponent } from './product-grid-item/product-grid-item.component';
import { ProductListItemComponent } from './product-list-item/product-list-item.component';
import { ProductViewComponent } from './product-view/product-view.component';

const components = [
  ProductListComponent,
  ProductFacetNavigationComponent,
  ProductListItemComponent,
  ProductGridItemComponent,
  ProductViewComponent,
  ProductScrollComponent,
];

@NgModule({
  imports: [
    CommonModule,
    ConfigModule.withConfig(<ViewConfig>defaultScrollConfig),
    ConfigModule.withConfig(<CmsConfig>{
      cmsComponents: {
        'cx-product-list-item': { component: ProductListItemComponent },
        'cx-product-grid-item': { component: ProductGridItemComponent },
        'cx-product-view': { component: ProductViewComponent },
        'cx-product-scroll': { component: ProductScrollComponent },
      },
    }),
    ConfigModule.withConfig(<CmsConfig>{
      cmsComponents: {
        CMSProductListComponent: {
          component: ProductListComponent,
        },
        ProductGridComponent: {
          component: ProductListComponent,
        },
        SearchResultsListComponent: {
          component: ProductListComponent,
        },
        ProductRefinementComponent: {
          component: ProductFacetNavigationComponent,
        },
      },
    }),
    RouterModule,
    MediaModule,
    AddToCartModule,
    ItemCounterModule,
    ListNavigationModule,
    UrlModule,
    I18nModule,
    StarRatingModule,
    IconModule,
    SpinnerModule,
    InfiniteScrollModule,
    ViewConfigModule,
    ProductVariantsModule,
    FeaturesConfigModule,
    SelectorModule,
  ],
  declarations: [...components],
  exports: [...components],
  entryComponents: [...components],
})
export class ProductListModule {}
