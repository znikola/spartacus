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
import { VariantStyleIconsComponent } from './variant-style-icons.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    UrlModule,
    I18nModule,
    ConfigModule.withConfig(<CmsConfig>{
      cmsComponents: {
        'cx-variant-style-icons': {
          component: VariantStyleIconsComponent,
        },
      },
    }),
    SelectorModule,
  ],
  declarations: [VariantStyleIconsComponent],
  entryComponents: [VariantStyleIconsComponent],
  exports: [VariantStyleIconsComponent],
})
export class VariantStyleIconsModule {}
