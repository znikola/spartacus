import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CmsConfig, ConfigModule } from '@spartacus/core';
import { OutletModule } from '../../../../cms-structure/outlet/index';
import { MediaModule } from '../../../../shared/components/media/media.module';
import { ShareButtonsComponent } from './share-buttons.component';
import { IconModule } from '../../../misc/icon/index';
import { SOCIAL_NETWORKS, ShareLinksService } from '../../share-links.service';

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
          component: ShareButtonsComponent,
        },
      },
    }),
  ],
  declarations: [ShareButtonsComponent],
  entryComponents: [ShareButtonsComponent],
  exports: [ShareButtonsComponent],
  providers: [
    ShareLinksService,
    { provide: SOCIAL_NETWORKS, useValue: 'Test', multi: true },
  ],
})
export class ShareButtonsModule {}
