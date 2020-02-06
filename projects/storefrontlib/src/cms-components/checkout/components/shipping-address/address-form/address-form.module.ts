import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { CmsConfig, ConfigModule, I18nModule } from '@spartacus/core';
import { SelectorModule } from '../../../../../selector/selector.module';
import { AutoFocusDirectiveModule } from '../../../../../shared/directives/auto-focus/auto-focus.directive.module';
import { IconModule } from '../../../../misc/icon/index';
import { AddressFormComponent } from './address-form.component';
import { SuggestedAddressDialogComponent } from './suggested-addresses-dialog/suggested-addresses-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    NgSelectModule,
    IconModule,
    I18nModule,
    AutoFocusDirectiveModule,
    ConfigModule.withConfig(<CmsConfig>{
      cmsComponents: {
        'cx-address-form': { component: AddressFormComponent },
        'cx-suggested-address-dialog': { component: AddressFormComponent },
      },
    }),
    SelectorModule,
  ],
  declarations: [AddressFormComponent, SuggestedAddressDialogComponent],
  entryComponents: [AddressFormComponent, SuggestedAddressDialogComponent],
  exports: [AddressFormComponent, SuggestedAddressDialogComponent],
})
export class AddressFormModule {}
