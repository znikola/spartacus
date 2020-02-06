import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CmsConfig, ConfigModule, FeaturesConfigModule } from '@spartacus/core';
import { SelectorModule } from '../../../../selector/selector.module';
import { PromotionsComponent } from './promotions.component';

@NgModule({
  imports: [
    CommonModule,
    FeaturesConfigModule,
    ConfigModule.withConfig(<CmsConfig>{
      cmsComponents: {
        'cx-promotions': { component: PromotionsComponent },
      },
    }),
    SelectorModule,
  ],
  declarations: [PromotionsComponent],
  exports: [PromotionsComponent],
  entryComponents: [PromotionsComponent],
})
export class PromotionsModule {}
