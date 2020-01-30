import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CmsConfig, ConfigModule, I18nModule } from '@spartacus/core';
import { OutletModule } from '../../../cms-structure/outlet/outlet.module';
import { ProductSummaryComponent } from './product-summary.component';
import { ProductSharedButtonsModule} from '../../product/product-share-buttons/product-share-buttons.module';


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
    ProductSharedButtonsModule,
  ],
  declarations: [ProductSummaryComponent],
  entryComponents: [ProductSummaryComponent],
  exports: [ProductSummaryComponent],
})
export class ProductSummaryModule {}
