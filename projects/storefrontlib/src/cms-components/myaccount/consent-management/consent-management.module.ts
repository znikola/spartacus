import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  AuthGuard,
  CmsConfig,
  ConfigModule,
  I18nModule,
} from '@spartacus/core';
import { SelectorModule } from '../../../selector/selector.module';
import { SpinnerModule } from '../../../shared/components/spinner/spinner.module';
import { IconModule } from '../../misc/index';
import { ConsentManagementFormComponent } from './components/consent-form/consent-management-form.component';
import { ConsentManagementComponent } from './components/consent-management.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SpinnerModule,
    I18nModule,
    IconModule,
    ConfigModule.withConfig(<CmsConfig>{
      cmsComponents: {
        ConsentManagementComponent: {
          component: ConsentManagementComponent,
          guards: [AuthGuard],
        },
      },
    }),
    ConfigModule.withConfig(<CmsConfig>{
      cmsComponents: {
        'cx-consent-management-form': {
          component: ConsentManagementFormComponent,
        },
      },
    }),
    SelectorModule,
  ],
  declarations: [ConsentManagementComponent, ConsentManagementFormComponent],
  exports: [ConsentManagementComponent, ConsentManagementFormComponent],
  entryComponents: [ConsentManagementComponent, ConsentManagementFormComponent],
})
export class ConsentManagementModule {}
