import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  ActiveCartService,
  MultiCartService,
  OrderEntries,
  UserIdService,
} from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { VariantsMultiDimensionalService } from '../../core/services/variants-multi-dimensional.service';

@Component({
  selector: 'cx-order-grid',
  templateUrl: './order-grid.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderGridComponent {
  constructor(
    public multiDimensionalService: VariantsMultiDimensionalService,
    protected multiCartService: MultiCartService,
    protected userIdService: UserIdService,
    protected activeCartService: ActiveCartService
  ) {}

  addAllToCart(): void {
    // TODO
    combineLatest([
      this.userIdService.getUserId(),
      this.activeCartService.getActive(),
    ]).subscribe(([userId, cart]) => {
      let cartId: string = cart.code || '';
      let entries: OrderEntries = { orderEntries: [] };

      entries.orderEntries.push(
        {
          quantity: 2,
          product: {
            code: 26002000_1,
          },
        },
        {
          quantity: 3,
          product: {
            code: 26002000_9,
          },
        }
      );

      if ('anonymous' === userId && cart.guid) {
        cartId = cart.guid;
      }

      console.log('addAllToCart', userId, cart, cartId, entries);

      this.multiCartService.addManyEntries(userId, cartId, entries);
    });
  }
}
