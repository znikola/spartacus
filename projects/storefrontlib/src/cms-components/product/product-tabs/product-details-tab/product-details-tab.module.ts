import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CmsConfig, ConfigModule } from '@spartacus/core';
import { SelectorModule } from '../../../../selector/selector.module';
import { ProductDetailsTabComponent } from './product-details-tab.component';

@NgModule({
  imports: [
    CommonModule,
    ConfigModule.withConfig(<CmsConfig>{
      cmsComponents: {
        ProductDetailsTabComponent: {
          component: ProductDetailsTabComponent,
        },
      },
    }),
    SelectorModule,
  ],
  declarations: [ProductDetailsTabComponent],
  entryComponents: [ProductDetailsTabComponent],
  exports: [ProductDetailsTabComponent],
})
export class ProductDetailsTabModule {}
