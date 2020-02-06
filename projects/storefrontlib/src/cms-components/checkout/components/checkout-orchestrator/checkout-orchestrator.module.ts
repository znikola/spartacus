import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CmsConfig, Config, ConfigModule } from '@spartacus/core';
import { SelectorModule } from '../../../../selector/selector.module';
import { CheckoutConfig } from '../../config/checkout-config';
import { defaultCheckoutConfig } from '../../config/default-checkout-config';
import { CheckoutAuthGuard } from '../../guards/checkout-auth.guard';
import { CheckoutGuard } from '../../guards/checkout.guard';
import { CartNotEmptyGuard } from './../../../../cms-components/cart/cart-not-empty.guard';
import { CheckoutOrchestratorComponent } from './checkout-orchestrator.component';

@NgModule({
  imports: [
    CommonModule,
    ConfigModule.withConfig(defaultCheckoutConfig),
    ConfigModule.withConfig(<CmsConfig>{
      cmsComponents: {
        CheckoutOrchestrator: {
          component: CheckoutOrchestratorComponent,
          guards: [CheckoutAuthGuard, CartNotEmptyGuard, CheckoutGuard],
        },
      },
    }),
    SelectorModule,
  ],
  providers: [{ provide: CheckoutConfig, useExisting: Config }],
  declarations: [CheckoutOrchestratorComponent],
  entryComponents: [CheckoutOrchestratorComponent],
  exports: [CheckoutOrchestratorComponent],
})
export class CheckoutOrchestratorModule {}
