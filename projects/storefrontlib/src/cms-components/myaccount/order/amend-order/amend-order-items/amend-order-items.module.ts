import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  CmsConfig,
  ConfigModule,
  FeaturesConfigModule,
  I18nModule,
} from '@spartacus/core';
import { SelectorModule } from '../../../../../selector/selector.module';
import { ItemCounterModule, MediaModule } from '../../../../../shared/index';
import { CancelOrReturnItemsComponent } from './amend-order-items.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    I18nModule,
    MediaModule,
    ItemCounterModule,
    FeaturesConfigModule,
    ConfigModule.withConfig(<CmsConfig>{
      cmsComponents: {
        'cx-cancel-or-return-items-component': {
          component: CancelOrReturnItemsComponent,
        },
      },
    }),
    SelectorModule,
  ],
  declarations: [CancelOrReturnItemsComponent],
  exports: [CancelOrReturnItemsComponent],
  entryComponents: [CancelOrReturnItemsComponent],
})
export class AmendOrderItemsModule {}
