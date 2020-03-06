import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CmsConfig, ConfigModule } from '@spartacus/core';
import { GenericLinkModule } from '../../../shared/components/generic-link/generic-link.module';
import { MediaModule } from '../../../shared/components/media/media.module';
import { DetailedLinkComponent } from './detailed-link.component';

@NgModule({
  imports: [
    GenericLinkModule,
    MediaModule,
    CommonModule,
    ConfigModule.withConfig(<CmsConfig>{
      cmsComponents: {
        DetailedLinkComponent: {
          component: DetailedLinkComponent,
        },
      },
    }),
  ],
  declarations: [DetailedLinkComponent],
  entryComponents: [DetailedLinkComponent],
  exports: [DetailedLinkComponent],
})
export class DetailedLinkModule {}
