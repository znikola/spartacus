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
import { ProductVariantGuard } from './guards/product-variant.guard';
import { ProductVariantsComponent } from './product-variants.component';
import { VariantColorSelectorModule } from './variant-color-selector/variant-color-selector.module';
import { VariantSizeSelectorModule } from './variant-size-selector/variant-size-selector.module';
import { VariantStyleIconsComponent } from './variant-style-icons/variant-style-icons.component';
import { VariantStyleIconsModule } from './variant-style-icons/variant-style-icons.module';
import { VariantStyleSelectorModule } from './variant-style-selector/variant-style-selector.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    UrlModule,
    ConfigModule.withConfig(<CmsConfig>{
      cmsComponents: {
        ProductVariantSelectorComponent: {
          component: ProductVariantsComponent,
          guards: [ProductVariantGuard],
        },
      },
    }),
    I18nModule,
    VariantStyleSelectorModule,
    VariantSizeSelectorModule,
    VariantColorSelectorModule,
    VariantStyleIconsModule,
    SelectorModule,
  ],
  declarations: [ProductVariantsComponent],
  entryComponents: [ProductVariantsComponent],
  exports: [VariantStyleIconsComponent],
})
export class ProductVariantsModule {}
