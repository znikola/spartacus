import { Component, OnInit } from '@angular/core';
import { Cart, OrderEntry, WishListService } from '@spartacus/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'cx-saved-cart-details-items',
  templateUrl: './saved-cart-details-items.component.html'
})
export class SavedCartDetailsItemsComponent implements OnInit {

  wishList$: Observable<Cart> = this.wishListService.getWishList();
  loading$: Observable<boolean> = this.wishListService.getWishListLoading();

  constructor(protected wishListService: WishListService) {}

  ngOnInit(): void {
  }

  removeEntry(item: OrderEntry) {
    this.wishListService.removeEntry(item);
  }
}
