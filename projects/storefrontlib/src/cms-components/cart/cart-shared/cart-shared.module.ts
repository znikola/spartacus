import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {
  CmsConfig,
  ConfigModule,
  FeaturesConfigModule,
  I18nModule,
  UrlModule,
} from '@spartacus/core';
import { SelectorModule } from '../../../selector/selector.module';
import { ItemCounterModule, MediaModule } from '../../../shared/index';
import { PromotionsModule } from '../../checkout/components/promotions/promotions.module';
import { CartCouponModule } from '../cart-coupon/cart-coupon.module';
import { CartItemListComponent } from './cart-item-list/cart-item-list.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';

const components = [
  CartItemComponent,
  OrderSummaryComponent,
  CartItemListComponent,
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CartCouponModule,
    ReactiveFormsModule,
    UrlModule,
    NgbModule,
    PromotionsModule,
    I18nModule,
    MediaModule,
    ItemCounterModule,
    FeaturesConfigModule,
    ConfigModule.withConfig(<CmsConfig>{
      cmsComponents: {
        'cx-cart-item': { component: CartItemComponent },
        'cx-order-summary': { component: OrderSummaryComponent },
        'cx-cart-item-list': { component: CartItemListComponent },
      },
    }),
    SelectorModule,
  ],
  declarations: [...components],
  exports: [...components],
  entryComponents: [...components],
})
export class CartSharedModule {}
