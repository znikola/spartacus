import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// import { ReactiveFormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';
import {
  // AuthGuard,
  CmsConfig,
  ConfigModule,
  // I18nModule,
  // UrlModule,
} from '@spartacus/core';
import {
  CartSharedModule,
//   FormErrorsModule,
//   OrderDetailItemsComponent,
//   OrderDetailShippingComponent,
//   OrderDetailsService,
//   OrderDetailTotalsComponent,
//   SpinnerModule,
} from '@spartacus/storefront';

import { SavedCartDetailsActionComponent } from './saved-cart-details-action/saved-cart-details-action.component'; 
import { SavedCartDetailsItemsComponent } from './saved-cart-details-items/saved-cart-details-items.component';
import { SavedCartDetailsOverviewComponent } from './saved-cart-details-overview/saved-cart-details-overview.component';

@NgModule({
  imports: [
    // ReactiveFormsModule,
    CartSharedModule,
    CommonModule,
    // I18nModule,
    // UrlModule,
    // FormErrorsModule,
    // SpinnerModule,
    // RouterModule,
    ConfigModule.withConfig(<CmsConfig>{
      cmsComponents: {
        SavedCartDetailsActionComponent: {
          component: SavedCartDetailsActionComponent
        },
        SavedCartDetailsItemsComponent: {
          component: SavedCartDetailsItemsComponent
        },
        SavedCartDetailsOverviewComponent: {
          component: SavedCartDetailsOverviewComponent,
        },
      },
    }),
  ],
  declarations: [
    SavedCartDetailsActionComponent,
    SavedCartDetailsItemsComponent,
    SavedCartDetailsOverviewComponent
  ],
  exports: [
    SavedCartDetailsActionComponent,
    SavedCartDetailsItemsComponent,
    SavedCartDetailsOverviewComponent
  ],
  entryComponents: [
    SavedCartDetailsActionComponent,
    SavedCartDetailsItemsComponent,
    SavedCartDetailsOverviewComponent
  ],
})
export class SavedCartDetailsModule {}
