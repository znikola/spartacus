import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CmsConfig, ConfigModule, I18nModule } from '@spartacus/core';
import { OutletModule } from '../../../cms-structure/outlet/outlet.module';
import { ProductSummaryComponent } from './product-summary.component';
import { ShareButtonsModule } from '../../social-media/components/share-buttons/share-buttons.module';

@NgModule({
  imports: [
    CommonModule,
    OutletModule,
    I18nModule,
    ConfigModule.withConfig(<CmsConfig>{
      cmsComponents: {
        ProductSummaryComponent: {
          component: ProductSummaryComponent,
        },
      },
    }),
    ShareButtonsModule,
  ],
  declarations: [ProductSummaryComponent],
  entryComponents: [ProductSummaryComponent],
  exports: [ProductSummaryComponent],
})
export class ProductSummaryModule {}
