import { CanActivate, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, switchMap, filter, take } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {
  ProductService,
  Product,
  RoutingService,
  ProductScope,
} from '@spartacus/core';

@Injectable({
  providedIn: 'root',
})
export class ProductVariantGuard implements CanActivate {
  constructor(
    private productService: ProductService,
    private routingService: RoutingService
  ) {}

  canActivate(): Observable<boolean | UrlTree> {
          // return of(true);
    return this.routingService.getRouterState().pipe(
      map((state) => state.nextState.params.productCode),
      switchMap((productCode: string) => {
        // if open pdp from smartedit
        if (!productCode) {
          return of(true);
        }

        return this.productService.get(productCode, ProductScope.VARIANTS).pipe(
          filter(Boolean),
          map((product: Product) => {
            if (product.multidimensional && product.variantMatrix) {
              // const variant = this.findVariant(product.variantOptions);
              // below call might looks redundant but in fact this data is going to be loaded anyways
              // we're just calling it earlier and storing
              // this.productService
              //   .get(product.code, ProductScope.LIST)
              //   .pipe(filter(Boolean), take(1))
              //   .subscribe((_product: Product) => {
              //     this.routingService.go({
              //       cxRoute: 'product',
              //       params: _product,
              //     });
              //   });
              return true;
            } else {
              return true;
            }
          })
        );
      })
    );
  }

  // protected findVariant(variants: VariantOption[]): VariantOption {
  //   const results: VariantOption[] = variants.filter((variant) => {
  //     return variant.stock && variant.stock.stockLevel ? variant : false;
  //   });
  //   return !results.length && variants.length ? variants[0] : results[0];
  // }
}
