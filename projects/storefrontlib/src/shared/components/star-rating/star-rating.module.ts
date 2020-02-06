import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CmsConfig, ConfigModule } from '@spartacus/core';
import { IconModule } from '../../../cms-components/misc/index';
import { SelectorModule } from '../../../selector/selector.module';
import { StarRatingComponent } from './star-rating.component';

@NgModule({
  imports: [
    CommonModule,
    IconModule,
    ConfigModule.withConfig(<CmsConfig>{
      cmsComponents: {
        'cx-star-rating': {
          component: StarRatingComponent,
        },
      },
    }),
    SelectorModule,
  ],
  declarations: [StarRatingComponent],
  exports: [StarRatingComponent],
  entryComponents: [StarRatingComponent],
})
export class StarRatingModule {}
