import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  AuthGuard,
  I18nModule,
  provideDefaultConfig,
  UrlModule,
} from '@spartacus/core';
import { IconModule } from '../../../cms-components/misc/icon/index';
import { KeyboardFocusModule } from '../../../layout/a11y/keyboard-focus/keyboard-focus.module';
import { SpinnerModule } from '../../../shared/components/spinner/spinner.module';
import { CloseAccountModalComponent } from './components/close-account-modal/close-account-modal.component';
import { CloseAccountComponent } from './components/close-account/close-account.component';
import { defaultCloseAccountLayoutConfig } from './default-close-account-layout.config';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    UrlModule,
    I18nModule,
    IconModule,
    SpinnerModule,
    KeyboardFocusModule,
  ],
  providers: [
    provideDefaultConfig({
      cmsComponents: {
        CloseAccountComponent: {
          component: CloseAccountComponent,
          guards: [AuthGuard],
        },
      },
      ...defaultCloseAccountLayoutConfig,
    }),
  ],
  declarations: [CloseAccountComponent, CloseAccountModalComponent],
  exports: [CloseAccountComponent, CloseAccountModalComponent],
  entryComponents: [CloseAccountComponent, CloseAccountModalComponent],
})
export class CloseAccountModule {}
