import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CmsConfig, ConfigModule } from '@spartacus/core';
import { SelectorModule } from '../../../selector/selector.module';
import { MediaComponent } from './media.component';

@NgModule({
  imports: [
    CommonModule,
    ConfigModule.withConfig(<CmsConfig>{
      cmsComponents: {
        'cx-media': {
          component: MediaComponent,
        },
      },
    }),
    SelectorModule,
  ],
  declarations: [MediaComponent],
  exports: [MediaComponent],
  entryComponents: [MediaComponent],
})
export class MediaModule {}
