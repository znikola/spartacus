import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import {
  CmsConfig,
  ConfigModule,
  FeaturesConfigModule,
  I18nModule,
} from '@spartacus/core';
import { IconModule } from '../../../cms-components/misc/icon/index';
import { SelectorModule } from '../../../selector/selector.module';
import { AppliedCouponsComponent } from './applied-coupons/applied-coupons.component';
import { CartCouponComponent } from './cart-coupon.component';

@NgModule({
  declarations: [CartCouponComponent, AppliedCouponsComponent],
  exports: [CartCouponComponent, AppliedCouponsComponent],
  imports: [
    SelectorModule,
    FeaturesConfigModule,
    CommonModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    I18nModule,
    IconModule,
    ConfigModule.withConfig(<CmsConfig>{
      cmsComponents: {
        CartApplyCouponComponent: {
          component: CartCouponComponent,
        },
      },
    }),
    ConfigModule.withConfig(<CmsConfig>{
      cmsComponents: {
        'cx-applied-coupons-component': {
          component: AppliedCouponsComponent,
        },
      },
    }),
  ],
  entryComponents: [CartCouponComponent, AppliedCouponsComponent],
})
export class CartCouponModule {}
