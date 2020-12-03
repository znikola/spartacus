import { Injectable } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import {
  ActiveCartService,
  OrderEntry,
  RoutingConfigService,
} from '@spartacus/core';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import {
  CheckoutConfigService,
  CheckoutGuard,
  CheckoutStepService,
  ExpressCheckoutService,
} from '../checkout/index';
import { AdditionalCheckoutStep } from './product-service-checkout.model';

@Injectable({
  providedIn: 'root',
})
export class ProductServiceGuard extends CheckoutGuard {
  constructor(
    protected router: Router,
    protected routingConfigService: RoutingConfigService,
    protected checkoutConfigService: CheckoutConfigService,
    protected expressCheckoutService: ExpressCheckoutService,
    protected activeCartService: ActiveCartService,
    protected checkoutStepService: CheckoutStepService
  ) {
    super(
      router,
      routingConfigService,
      checkoutConfigService,
      expressCheckoutService,
      activeCartService,
      checkoutStepService
    );
  }

  canActivate(): Observable<boolean | UrlTree> {
    return this.activeCartService.getEntries().pipe(
      tap((entries) => {
        if (this.containsProductServiceConfig(entries)) {
          this.checkoutStepService.disableEnableStep(
            AdditionalCheckoutStep.PRODUCT_SERVICE as any,
            true
          );
        }
      }),
      switchMap((_) => super.canActivate())
    );
  }

  protected containsProductServiceConfig(entries: OrderEntry[]): boolean {
    const serviceProducts = entries.filter(
      (entry) => entry.product.code === '816802'
    );
    return serviceProducts.length > 0;
  }
}
