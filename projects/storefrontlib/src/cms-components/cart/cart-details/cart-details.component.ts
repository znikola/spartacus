import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  Cart,
  CartService,
  OrderEntry,
  SelectiveCartService,
} from '@spartacus/core';
import { Observable } from 'rxjs';
import { Item } from '../cart-shared/cart-item/cart-item.component';

@Component({
  selector: 'cx-cart-details',
  templateUrl: './cart-details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartDetailsComponent implements OnInit {
  cart$: Observable<Cart>;
  entries$: Observable<OrderEntry[]>;
  cartLoading$: Observable<boolean>;

  sflCart$: Observable<Cart>;
  sflEntries$: Observable<OrderEntry[]>;

  constructor(
    protected cartService: CartService,
    protected selectiveCartService: SelectiveCartService
  ) {}

  ngOnInit() {
    this.cart$ = this.cartService.getActive();
    this.entries$ = this.cartService.getEntries();
    this.cartLoading$ = this.cartService.getLoading();

    this.sflCart$ = this.selectiveCartService.getCart();
    this.sflEntries$ = this.selectiveCartService.getEntries();
  }

  getAllPromotionsForCart(cart: Cart): any[] {
    const potentialPromotions = [];
    potentialPromotions.push(...(cart.potentialOrderPromotions || []));
    potentialPromotions.push(...(cart.potentialProductPromotions || []));

    const appliedPromotions = [];
    appliedPromotions.push(...(cart.appliedOrderPromotions || []));
    appliedPromotions.push(...(cart.appliedProductPromotions || []));

    return [...potentialPromotions, ...appliedPromotions];
  }

  saveItemForLater(item: Item): void {
    this.selectiveCartService.addEntry(item.product.code, item.quantity);
    this.cartService.removeEntry(item);
  }
  moveItemToCart(item: Item): void {
    this.cartService.addEntry(item.product.code, item.quantity);
    this.selectiveCartService.removeEntry(item);
  }
}
