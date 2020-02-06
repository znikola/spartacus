import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  AuthGuard,
  CmsConfig,
  ConfigModule,
  I18nModule,
  UserService,
} from '@spartacus/core';
import { SelectorModule } from '../../../selector/selector.module';
import { CardModule } from '../../../shared/components/card/card.module';
import { SpinnerModule } from '../../../shared/components/spinner/spinner.module';
import { PaymentMethodsComponent } from './payment-methods.component';

@NgModule({
  imports: [
    CommonModule,
    CardModule,
    SpinnerModule,
    ConfigModule.withConfig(<CmsConfig>{
      cmsComponents: {
        AccountPaymentDetailsComponent: {
          component: PaymentMethodsComponent,
          guards: [AuthGuard],
        },
      },
    }),
    I18nModule,
    SelectorModule,
  ],
  providers: [UserService],
  declarations: [PaymentMethodsComponent],
  exports: [PaymentMethodsComponent],
  entryComponents: [PaymentMethodsComponent],
})
export class PaymentMethodsModule {}
