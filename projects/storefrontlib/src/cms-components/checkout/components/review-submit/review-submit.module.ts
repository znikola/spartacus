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
import { CartSharedModule } from '../../../../cms-components/cart/cart-shared/cart-shared.module';
import { SelectorModule } from '../../../../selector/selector.module';
import { CardModule } from '../../../../shared/components/card/card.module';
import { CheckoutAuthGuard } from '../../guards/checkout-auth.guard';
import { DeliveryModeSetGuard } from '../../guards/delivery-mode-set.guard';
import { PaymentDetailsSetGuard } from '../../guards/payment-details-set.guard';
import { ShippingAddressSetGuard } from '../../guards/shipping-address-set.guard';
import { PromotionsModule } from '../promotions/promotions.module';
import { CartNotEmptyGuard } from './../../../../cms-components/cart/cart-not-empty.guard';
import { ReviewSubmitComponent } from './review-submit.component';

@NgModule({
  imports: [
    CommonModule,
    CardModule,
    CartSharedModule,
    I18nModule,
    UrlModule,
    RouterModule,
    PromotionsModule,
    FeaturesConfigModule,
    ConfigModule.withConfig(<CmsConfig>{
      cmsComponents: {
        CheckoutReviewOrder: {
          component: ReviewSubmitComponent,
          guards: [
            CheckoutAuthGuard,
            CartNotEmptyGuard,
            ShippingAddressSetGuard,
            DeliveryModeSetGuard,
            PaymentDetailsSetGuard,
          ],
        },
      },
    }),
    SelectorModule,
  ],
  declarations: [ReviewSubmitComponent],
  entryComponents: [ReviewSubmitComponent],
  exports: [ReviewSubmitComponent],
})
export class ReviewSubmitModule {}
