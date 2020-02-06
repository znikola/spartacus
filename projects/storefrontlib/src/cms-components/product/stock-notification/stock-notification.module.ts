import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  CmsConfig,
  ConfigModule,
  I18nModule,
  UrlModule,
} from '@spartacus/core';
import { SelectorModule } from '../../../selector/selector.module';
import { SpinnerModule } from '../../../shared/components/spinner/spinner.module';
import { StockNotificationDialogComponent } from './stock-notification-dialog/stock-notification-dialog.component';
import { StockNotificationComponent } from './stock-notification.component';

@NgModule({
  declarations: [StockNotificationComponent, StockNotificationDialogComponent],
  imports: [
    CommonModule,
    ConfigModule.withConfig(<CmsConfig>{
      cmsComponents: {
        StockNotificationComponent: {
          component: StockNotificationComponent,
        },
      },
    }),
    ConfigModule.withConfig(<CmsConfig>{
      cmsComponents: {
        'cx-stock-notification-dialog': {
          component: StockNotificationDialogComponent,
        },
      },
    }),
    RouterModule,
    I18nModule,
    SpinnerModule,
    UrlModule,
    SelectorModule,
  ],
  entryComponents: [
    StockNotificationComponent,
    StockNotificationDialogComponent,
  ],
  exports: [StockNotificationComponent, StockNotificationDialogComponent],
})
export class StockNotificationModule {}
