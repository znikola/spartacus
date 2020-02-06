import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CmsConfig, ConfigModule, I18nModule } from '@spartacus/core';
import { SelectorModule } from '../../../selector/selector.module';
import { GenericLinkModule } from '../../../shared/components/generic-link/generic-link.module';
import { IconModule } from '../../misc/icon/icon.module';
import { NavigationUIComponent } from './navigation-ui.component';
import { NavigationComponent } from './navigation.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    IconModule,
    GenericLinkModule,
    ConfigModule.withConfig(<CmsConfig>{
      cmsComponents: {
        NavigationComponent: {
          component: NavigationComponent,
        },
      },
    }),
    I18nModule,
    ConfigModule.withConfig(<CmsConfig>{
      cmsComponents: {
        'cx-navigation-ui': {
          component: NavigationUIComponent,
        },
      },
    }),
    SelectorModule,
  ],
  declarations: [NavigationComponent, NavigationUIComponent],
  entryComponents: [NavigationComponent, NavigationUIComponent],
  exports: [NavigationComponent, NavigationUIComponent],
})
export class NavigationModule {}
