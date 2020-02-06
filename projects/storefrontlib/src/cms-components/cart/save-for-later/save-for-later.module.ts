import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  CmsConfig,
  ConfigModule,
  FeaturesConfig,
  I18nModule,
} from '@spartacus/core';
import { SelectorModule } from '../../../selector/selector.module';
import { CartSharedModule } from '../cart-shared/cart-shared.module';
import { SaveForLaterComponent } from './save-for-later.component';

@NgModule({
  imports: [
    CommonModule,
    ConfigModule.withConfig(<CmsConfig | FeaturesConfig>{
      cmsComponents: {
        SaveForLaterComponent: {
          component: SaveForLaterComponent,
        },
      },
      features: {
        saveForLater: '1.5',
      },
    }),
    I18nModule,
    CartSharedModule,
    SelectorModule,
  ],
  declarations: [SaveForLaterComponent],
  exports: [SaveForLaterComponent],
  entryComponents: [SaveForLaterComponent],
})
export class SaveForLaterModule {}
