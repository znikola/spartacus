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
import { SelectorModule } from '../../selector/selector.module';
import {
  ItemCounterModule,
  MediaModule,
  StarRatingModule,
} from '../../shared/index';
import { AddToCartModule } from '../cart/index';
import { WishListItemComponent } from './components/wish-list-item/wish-list-item.component';
import { WishListComponent } from './components/wish-list/wish-list.component';

@NgModule({
  imports: [
    AddToCartModule,
    CommonModule,
    ConfigModule.withConfig(<CmsConfig>{
      cmsComponents: {
        WishListComponent: {
          component: WishListComponent,
          guards: [AuthGuard],
        },
      },
    }),
    ConfigModule.withConfig(<CmsConfig>{
      cmsComponents: {
        'cx-wish-list-item': {
          component: WishListItemComponent,
        },
      },
    }),
    I18nModule,
    MediaModule,
    RouterModule,
    StarRatingModule,
    UrlModule,
    ItemCounterModule,
    SelectorModule,
  ],
  declarations: [WishListComponent, WishListItemComponent],
  entryComponents: [WishListComponent, WishListItemComponent],
  exports: [WishListComponent, WishListItemComponent],
})
export class WishListModule {}
