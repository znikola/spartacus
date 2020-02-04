import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CmsConfig, ConfigModule } from '@spartacus/core';
import { OutletModule } from '../../../cms-structure/outlet/index';
import { MediaModule } from '../../../shared/components/media/media.module';
import { ProductShareButtonsComponent } from './product-share-buttons.component';
import { IconModule } from '../../../cms-components/misc/icon/index';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MediaModule,
    OutletModule,
    IconModule,
    ConfigModule.withConfig(<CmsConfig>{
      cmsComponents: {
        SocialShareComponent: {
          component: ProductShareButtonsComponent,
        },
      },
    }),
  ],
  declarations: [ProductShareButtonsComponent],
  entryComponents: [ProductShareButtonsComponent],
  exports: [ProductShareButtonsComponent],
})
export class ProductSharedButtonsModule {}
