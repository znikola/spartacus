import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  CmsConfig,
  ConfigModule,
  I18nModule,
  UrlModule,
} from '@spartacus/core';
import { SelectorModule } from '../../../../selector/selector.module';
import { VariantColorSelectorComponent } from './variant-color-selector.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    UrlModule,
    I18nModule,
    ConfigModule.withConfig(<CmsConfig>{
      cmsComponents: {
        'cx-variant-color-selector': {
          component: VariantColorSelectorComponent,
        },
      },
    }),
    SelectorModule,
  ],
  declarations: [VariantColorSelectorComponent],
  entryComponents: [VariantColorSelectorComponent],
  exports: [VariantColorSelectorComponent],
})
export class VariantColorSelectorModule {}
