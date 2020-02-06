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
import { VariantColorSelectorModule } from './color-selector/color-selector.module';
import { ProductVariantGuard } from './guards/product-variant.guard';
import { ProductVariantsComponent } from './product-variants.component';
import { VariantSizeSelectorModule } from './size-selector/size-selector.module';
import { VariantStyleIconsComponent } from './style-icons/style-icons.component';
import { VariantStyleIconsModule } from './style-icons/style-icons.module';
import { VariantStyleSelectorModule } from './style-selector/style-selector.module';

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
