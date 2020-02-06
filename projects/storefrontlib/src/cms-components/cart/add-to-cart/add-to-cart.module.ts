import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  CmsConfig,
  ConfigModule,
  FeaturesConfigModule,
  I18nModule,
  UrlModule,
} from '@spartacus/core';
import { IconModule } from '../../../cms-components/misc/icon/index';
import { SelectorModule } from '../../../selector/selector.module';
import { AutoFocusDirectiveModule } from '../../../shared/directives/auto-focus/auto-focus.directive.module';
import { ItemCounterModule, SpinnerModule } from '../../../shared/index';
import { PromotionsModule } from '../../checkout/components/promotions/promotions.module';
import { CartSharedModule } from './../cart-shared/cart-shared.module';
import { AddToCartComponent } from './add-to-cart.component';
import { AddedToCartDialogComponent } from './added-to-cart-dialog/added-to-cart-dialog.component';

@NgModule({
  imports: [
    CartSharedModule,
    CommonModule,
    RouterModule,
    SpinnerModule,
    PromotionsModule,
    FeaturesConfigModule,
    ConfigModule.withConfig(<CmsConfig>{
      cmsComponents: {
        ProductAddToCartComponent: {
          component: AddToCartComponent,
        },
      },
    }),
    ConfigModule.withConfig(<CmsConfig>{
      cmsComponents: {
        'cx-added-to-cart-dialog': {
          component: AddedToCartDialogComponent,
        },
      },
    }),
    UrlModule,
    IconModule,
    I18nModule,
    ItemCounterModule,
    AutoFocusDirectiveModule,
    SelectorModule,
  ],
  declarations: [AddToCartComponent, AddedToCartDialogComponent],
  entryComponents: [AddToCartComponent, AddedToCartDialogComponent],
  exports: [AddToCartComponent, AddedToCartDialogComponent],
})
export class AddToCartModule {}
