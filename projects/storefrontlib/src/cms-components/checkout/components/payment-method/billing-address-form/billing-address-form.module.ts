import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { I18nModule } from '@spartacus/core';
import { SelectorModule } from '../../../../../selector/selector.module';
import { BillingAddressFormComponent } from './billing-address-form.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    NgSelectModule,
    I18nModule,
    SelectorModule,
  ],
  declarations: [BillingAddressFormComponent],
  exports: [BillingAddressFormComponent],
})
export class BillingAddressFormModule {}
