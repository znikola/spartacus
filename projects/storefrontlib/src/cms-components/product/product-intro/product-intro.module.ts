import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CmsConfig, ConfigModule, I18nModule } from '@spartacus/core';
import { SelectorModule } from '../../../selector/selector.module';
import { StarRatingModule } from '../../../shared/components/star-rating/star-rating.module';
import { ProductIntroComponent } from './product-intro.component';

@NgModule({
  imports: [
    CommonModule,
    I18nModule,
    StarRatingModule,
    ConfigModule.withConfig(<CmsConfig>{
      cmsComponents: {
        ProductIntroComponent: {
          component: ProductIntroComponent,
        },
      },
    }),
    SelectorModule,
  ],
  declarations: [ProductIntroComponent],
  exports: [ProductIntroComponent],
  entryComponents: [ProductIntroComponent],
})
export class ProductIntroModule {}
