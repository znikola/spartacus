import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  AuthGuard,
  CmsConfig,
  ConfigModule,
  I18nModule,
  UrlModule,
} from '@spartacus/core';
import { SelectorModule } from '../../../selector/selector.module';
import { ListNavigationModule } from '../../../shared/components/list-navigation/list-navigation.module';
import { MediaModule } from '../../../shared/components/media/media.module';
import { SpinnerModule } from '../../../shared/components/spinner/spinner.module';
import { MyInterestsComponent } from './my-interests.component';

@NgModule({
  declarations: [MyInterestsComponent],
  imports: [
    CommonModule,
    I18nModule,
    ConfigModule.withConfig(<CmsConfig>{
      cmsComponents: {
        MyInterestsComponent: {
          component: MyInterestsComponent,
          guards: [AuthGuard],
        },
      },
    }),
    RouterModule,
    ListNavigationModule,
    I18nModule,
    UrlModule,
    MediaModule,
    SpinnerModule,
    SelectorModule,
  ],
  exports: [MyInterestsComponent],
  entryComponents: [MyInterestsComponent],
})
export class MyInterestsModule {}
