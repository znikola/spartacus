import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CmsConfig, ConfigModule } from '@spartacus/core';
import { OutletModule } from '../../../../cms-structure/outlet/index';
import { MediaModule } from '../../../../shared/components/media/media.module';
import { ShareButtonsComponent } from './share-buttons.component';
import { IconModule } from '../../../misc/icon/index';
import { AbstractSocialNetworkService } from '../../services/social-network-service/abstract-social-network.service';
import { FacebookSocialNetworkService } from '../../services/social-network-service/facebook-social-network.service';
import { TwitterSocialNetworkService } from '../../services/social-network-service/twitter-social-network.service';
import { EMailSocialNetworkService } from '../../services/social-network-service/email-social-network.service';
import { PinterestSocialNetworkService } from '../../services/social-network-service/pinterest-social-network.service';

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
    {
      provide: AbstractSocialNetworkService,
      useExisting: FacebookSocialNetworkService,
      multi: true,
    },
    {
      provide: AbstractSocialNetworkService,
      useExisting: TwitterSocialNetworkService,
      multi: true,
    },
    {
      provide: AbstractSocialNetworkService,
      useExisting: EMailSocialNetworkService,
      multi: true,
    },
    {
      provide: AbstractSocialNetworkService,
      useExisting: PinterestSocialNetworkService,
      multi: true,
    },
  ],
})
export class ShareButtonsModule {}
