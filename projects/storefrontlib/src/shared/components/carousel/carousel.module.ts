import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CmsConfig, ConfigModule, UrlModule } from '@spartacus/core';
import { IconModule } from '../../../cms-components/misc/icon/index';
import { SelectorModule } from '../../../selector/selector.module';
import { MediaModule } from '../media/media.module';
import { CarouselComponent } from './carousel.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    IconModule,
    MediaModule,
    UrlModule,
    ConfigModule.withConfig(<CmsConfig>{
      cmsComponents: {
        'cx-carousel': {
          component: CarouselComponent,
        },
      },
    }),
    SelectorModule,
  ],
  declarations: [CarouselComponent],
  exports: [CarouselComponent],
  entryComponents: [CarouselComponent],
})
export class CarouselModule {}
