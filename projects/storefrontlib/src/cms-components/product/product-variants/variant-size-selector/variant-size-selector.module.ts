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
import { VariantSizeSelectorComponent } from './variant-size-selector.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    UrlModule,
    I18nModule,
    ConfigModule.withConfig(<CmsConfig>{
      cmsComponents: {
        'cx-variant-size-selector': {
          component: VariantSizeSelectorComponent,
        },
      },
    }),
    SelectorModule,
  ],
  declarations: [VariantSizeSelectorComponent],
  entryComponents: [VariantSizeSelectorComponent],
  exports: [VariantSizeSelectorComponent],
})
export class VariantSizeSelectorModule {}
