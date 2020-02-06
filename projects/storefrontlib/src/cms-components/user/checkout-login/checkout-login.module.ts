import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CmsConfig, ConfigModule, I18nModule } from '@spartacus/core';
import { SelectorModule } from '../../../selector/selector.module';
import { NotCheckoutAuthGuard } from '../../checkout/guards/not-checkout-auth.guard';
import { CheckoutLoginComponent } from './checkout-login.component';

@NgModule({
  imports: [
    CommonModule,
    I18nModule,
    FormsModule,
    ReactiveFormsModule,
    ConfigModule.withConfig(<CmsConfig>{
      cmsComponents: {
        GuestCheckoutLoginComponent: {
          component: CheckoutLoginComponent,
          guards: [NotCheckoutAuthGuard],
        },
      },
    }),
    FormsModule,
    ReactiveFormsModule,
    SelectorModule,
  ],
  declarations: [CheckoutLoginComponent],
  exports: [CheckoutLoginComponent],
  entryComponents: [CheckoutLoginComponent],
})
export class CheckoutLoginModule {}
