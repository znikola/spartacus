import { Component, OnInit } from '@angular/core';
import { Cart, OrderEntry, SelectiveCartService, ActiveCartService } from '@spartacus/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'cx-save-for-later',
  templateUrl: './save-for-later.component.html',
})
export class SaveForLaterComponent implements OnInit {

  sflCart$: Observable<Cart>;
  sflEntries$: Observable<OrderEntry[]>;
  sflCartLoaded$: Observable<boolean>;
  cartEntries$: Observable<OrderEntry[]>;

  constructor(private selectiveCartService: SelectiveCartService, private activeCartService: ActiveCartService) {}

  ngOnInit() {
    this.sflCart$ = this.selectiveCartService.getCart();
    this.sflEntries$ = this.selectiveCartService.getEntries();
    this.sflCartLoaded$ = this.selectiveCartService.getLoaded();
    this.cartEntries$ = this.activeCartService.getEntries();
  }
}
