import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  CmsConfig,
  ConfigModule,
  I18nModule,
  UrlModule,
} from '@spartacus/core';
import { SelectorModule } from '../../../selector/selector.module';
import { CartCouponModule } from '../cart-coupon/cart-coupon.module';
import { CartSharedModule } from '../cart-shared/cart-shared.module';
import { CartTotalsComponent } from './cart-totals.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    UrlModule,
    ConfigModule.withConfig(<CmsConfig>{
      cmsComponents: {
        CartTotalsComponent: {
          component: CartTotalsComponent,
        },
      },
    }),
    CartSharedModule,
    I18nModule,
    CartCouponModule,
    SelectorModule,
  ],
  declarations: [CartTotalsComponent],
  exports: [CartTotalsComponent],
  entryComponents: [CartTotalsComponent],
})
export class CartTotalsModule {}
