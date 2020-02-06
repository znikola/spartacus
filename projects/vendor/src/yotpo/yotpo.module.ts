import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CmsConfig, Config, ConfigModule } from '@spartacus/core';
import { defaultYotpoConfig } from './yotpoconfig/default-yotpo-config';
import { YotpoConfig } from './yotpoconfig/yotpo-config';
import { YotporeviewComponent } from './yotporeview/yotpo-review.component';
import { YotpostarratingComponent } from './yotpostarrating/yotpo-star-rating.component';

@NgModule({
  imports: [
    CommonModule,
    ConfigModule.withConfig(defaultYotpoConfig),
    ConfigModule.withConfig(<CmsConfig>{
      cmsComponents: {
        'cx-yotpo-review': {
          component: YotporeviewComponent,
        },
        'cx-yotpo-star-rating': {
          component: YotpostarratingComponent,
        },
      },
    }),
  ],
  exports: [YotporeviewComponent, YotpostarratingComponent],
  declarations: [YotporeviewComponent, YotpostarratingComponent],
  entryComponents: [YotporeviewComponent, YotpostarratingComponent],
  providers: [{ provide: YotpoConfig, useExisting: Config }],
})
export class YotpoModule {}
