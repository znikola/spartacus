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
import { CmsPageGuard } from '../../../cms-structure/guards/cms-page.guard';
import { PageLayoutComponent } from '../../../cms-structure/page/page-layout/page-layout.component';
import { SelectorModule } from '../../../selector/selector.module';
import { CardModule } from '../../../shared/components/card/card.module';
import { ListNavigationModule } from '../../../shared/components/list-navigation/list-navigation.module';
import { SpinnerModule } from '../../../shared/components/spinner/spinner.module';
import { IconModule } from '../../misc/icon/icon.module';
import { CouponCardComponent } from './coupon-card/coupon-card.component';
import { CouponDialogComponent } from './coupon-card/coupon-dialog/coupon-dialog.component';
import { CouponClaimComponent } from './coupon-claim/coupon-claim.component';
import { MyCouponsComponent } from './my-coupons.component';

const components = [
  MyCouponsComponent,
  CouponCardComponent,
  CouponDialogComponent,
  CouponClaimComponent,
];

@NgModule({
  imports: [
    CommonModule,
    CardModule,
    SpinnerModule,
    I18nModule,
    RouterModule,
    UrlModule,
    IconModule,
    ListNavigationModule,
    ConfigModule.withConfig(<CmsConfig>{
      cmsComponents: {
        MyCouponsComponent: {
          component: MyCouponsComponent,
          guards: [AuthGuard],
        },
        CouponClaimComponent: {
          component: CouponClaimComponent,
          guards: [AuthGuard],
        },
      },
    }),
    RouterModule.forChild([
      {
        path: null,
        canActivate: [AuthGuard, CmsPageGuard],
        component: PageLayoutComponent,
        data: { cxRoute: 'couponClaim' },
      },
    ]),
    ConfigModule.withConfig(<CmsConfig>{
      cmsComponents: {
        'cx-coupon-card': { component: CouponCardComponent },
        'cx-coupon-dialog': { component: CouponDialogComponent },
      },
    }),
    SelectorModule,
  ],
  declarations: [...components],
  exports: [...components],
  entryComponents: [...components],
})
export class MyCouponsModule {}
