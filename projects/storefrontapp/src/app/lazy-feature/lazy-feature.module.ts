import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyBannerComponent } from './my-banner/my-banner.component';
import { ConfigModule } from '@spartacus/core';

@NgModule({
  declarations: [MyBannerComponent],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      cmsComponents: {
        SimpleBannerComponent: {
          component: MyBannerComponent,
        },
      },
    }),
  ],
  exports: [MyBannerComponent],
})
export class LazyFeatureModule {}
