import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CmsConfig, ConfigModule, I18nModule } from '@spartacus/core';
import { IconModule } from '../../../cms-components/misc/icon/index';
import { ConsentManagementModule } from '../../../cms-components/myaccount/consent-management/consent-management.module';
import { SelectorModule } from '../../../selector/selector.module';
import { SpinnerModule } from '../spinner/index';
import { AnonymousConsentDialogComponent } from './dialog/anonymous-consent-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    I18nModule,
    IconModule,
    SpinnerModule,
    ConsentManagementModule,
    ConfigModule.withConfig(<CmsConfig>{
      cmsComponents: {
        'cx-anonymous-consent-dialog': {
          component: AnonymousConsentDialogComponent,
        },
      },
    }),
    SelectorModule,
  ],
  declarations: [AnonymousConsentDialogComponent],
  entryComponents: [AnonymousConsentDialogComponent],
  exports: [AnonymousConsentDialogComponent],
})
export class AnonymousConsentsModule {}
