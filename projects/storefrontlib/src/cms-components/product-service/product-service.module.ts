import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthGuard, provideConfig } from '@spartacus/core';
import { CartNotEmptyGuard } from '../cart/index';
import {
  CheckoutGuard,
  CheckoutOrchestratorComponent,
  CheckoutStepType,
} from '../checkout/index';
import { CheckoutProductServiceComponent } from './checkout-product-service.component';
import { AdditionalCheckoutStep } from './product-service-checkout.model';
import { ProductServiceGuard } from './product-service.guard';

@NgModule({
  imports: [CommonModule],
  declarations: [CheckoutProductServiceComponent],
  exports: [CheckoutProductServiceComponent],
  entryComponents: [CheckoutProductServiceComponent],
  providers: [
    provideConfig({
      routing: {
        routes: {
          checkoutProductService: { paths: ['checkout/product-service'] },
        },
      },
      cmsComponents: {
        CheckoutProductService: {
          component: CheckoutProductServiceComponent,
        },
        CheckoutOrchestrator: {
          component: CheckoutOrchestratorComponent,
          guards: [
            AuthGuard,
            CartNotEmptyGuard,
            CheckoutGuard,
            ProductServiceGuard,
          ],
        },
      },
      checkout: {
        steps: [
          {
            id: 'shippingAddress',
            name: 'checkoutProgress.shippingAddress',
            routeName: 'checkoutShippingAddress',
            type: [CheckoutStepType.SHIPPING_ADDRESS],
          },
          {
            id: 'productService',
            name: 'XXX',
            routeName: 'checkoutProductService',
            type: [AdditionalCheckoutStep.PRODUCT_SERVICE as any],
          },
          {
            id: 'deliveryMode',
            name: 'checkoutProgress.deliveryMode',
            routeName: 'checkoutDeliveryMode',
            type: [CheckoutStepType.DELIVERY_MODE],
          },
          {
            id: 'paymentDetails',
            name: 'checkoutProgress.paymentDetails',
            routeName: 'checkoutPaymentDetails',
            type: [CheckoutStepType.PAYMENT_DETAILS],
          },
          {
            id: 'reviewOrder',
            name: 'checkoutProgress.reviewOrder',
            routeName: 'checkoutReviewOrder',
            type: [CheckoutStepType.REVIEW_ORDER],
          },
        ],
      },
    }),
  ],
})
export class ProductServiceModule {}
