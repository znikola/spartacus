import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  CmsConfig,
  ConfigModule,
  I18nModule,
  UrlModule,
} from '@spartacus/core';
import { SelectorModule } from '../../../../../selector/selector.module';
import { AmendOrderActionsComponent } from './amend-order-actions.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    UrlModule,
    I18nModule,
    ConfigModule.withConfig(<CmsConfig>{
      cmsComponents: {
        'cx-amend-order-actions': { component: AmendOrderActionsModule },
      },
    }),
    SelectorModule,
  ],
  declarations: [AmendOrderActionsComponent],
  exports: [AmendOrderActionsComponent],
  entryComponents: [AmendOrderActionsComponent],
})
export class AmendOrderActionsModule {}
