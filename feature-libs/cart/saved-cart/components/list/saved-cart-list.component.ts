import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  Cart,
  MultiCartService,
  RoutingService,
  TranslationService,
  UserIdService,
} from '@spartacus/core';
import { Observable, Subscription } from 'rxjs';
import { ImportExportService } from '../../core/services';
import { ImportToCartService } from '../../core/services/import-to-cart.service';
import { SavedCartService } from '../../core/services/saved-cart.service';

@Component({
  selector: 'cx-saved-cart-list',
  templateUrl: './saved-cart-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SavedCartListComponent implements OnInit, OnDestroy {
  private subscription = new Subscription();
  selectedFile: FileList;

  savedCarts$: Observable<Cart[]> = this.savedCartService.getList();

  constructor(
    protected routing: RoutingService,
    protected translation: TranslationService,
    protected savedCartService: SavedCartService,
    protected userIdService: UserIdService,
    protected multiCartService: MultiCartService,
    protected importExportService: ImportExportService,
    protected importToCartService: ImportToCartService
  ) {}

  ngOnInit(): void {
    this.savedCartService.loadSavedCarts();

    this.subscription.add(
      this.savedCartService
        .getRestoreSavedCartProcessSuccess()
        .subscribe((success) => this.onSuccess(success))
    );
  }

  importProducts(file: FileList): void {
    this.importExportService
      .importFile(file)
      .then((data) => this.importToCartService.addProductsToCart(data));
  }

  goToSavedCartDetails(cart: Cart): void {
    this.routing.go({
      cxRoute: 'savedCartsDetails',
      params: { savedCartId: cart?.code },
    });
  }

  restoreSavedCart(event: Event, cartId: string): void {
    this.savedCartService.restoreSavedCart(cartId);
    event.stopPropagation();
  }

  onSuccess(success: boolean): void {
    if (success) {
      this.savedCartService.clearRestoreSavedCart();
      this.savedCartService.clearSaveCart();
    }
  }

  ngOnDestroy(): void {
    this.savedCartService.clearSavedCarts();
    this.savedCartService.clearSaveCart();
    this.subscription?.unsubscribe();
  }
}
