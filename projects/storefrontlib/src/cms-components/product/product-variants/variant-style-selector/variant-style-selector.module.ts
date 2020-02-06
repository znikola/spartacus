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
import { VariantStyleSelectorComponent } from './variant-style-selector.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    UrlModule,
    I18nModule,
    ConfigModule.withConfig(<CmsConfig>{
      cmsComponents: {
        'cx-variant-style-selector': {
          component: VariantStyleSelectorComponent,
        },
      },
    }),
    SelectorModule,
  ],
  declarations: [VariantStyleSelectorComponent],
  entryComponents: [VariantStyleSelectorComponent],
  exports: [VariantStyleSelectorComponent],
})
export class VariantStyleSelectorModule {}
