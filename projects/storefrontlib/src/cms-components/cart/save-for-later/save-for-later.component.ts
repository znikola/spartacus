import { Component, OnInit, Input } from '@angular/core';
import { Cart, OrderEntry, SelectiveCartService } from '@spartacus/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'cx-save-for-later',
  templateUrl: './save-for-later.component.html',
})
export class SaveForLaterComponent implements OnInit {
  @Input()
  cartEntries$: Observable<OrderEntry[]>;

  sflCart$: Observable<Cart>;
  sflEntries$: Observable<OrderEntry[]>;
  sflCartLoaded$: Observable<boolean>;

  // constructor(private saveForLaterService: SaveForLaterService) {}

  // ngOnInit() {
  //   this.sflCart$ =
  //   this.sflCart$ = this.saveForLaterService.getSaveForLater();
  //   this.sflEntries$ = this.saveForLaterService.getEntries();
  //   this.sflCartLoading$ = this.saveForLaterService.getLoading();
  // }
  constructor(private selectiveCartService: SelectiveCartService) {}

  ngOnInit() {
    this.sflCart$ = this.sflCart$ = this.selectiveCartService.getCart();
    this.sflEntries$ = this.selectiveCartService.getEntries();
    this.sflCartLoaded$ = this.selectiveCartService.getLoaded();
  }
}
