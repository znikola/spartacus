import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  ActiveCartService,
  MultiCartService,
  OrderEntries,
  UserIdService,
} from '@spartacus/core';
import { combineLatest, Observable } from 'rxjs';
import { OrderGridEntry } from '../../core/model/order-grid-entry.model';
import {
  GridVariantOption,
  VariantsMultiDimensionalService,
} from '../../core/services/variants-multi-dimensional.service';

@Component({
  selector: 'cx-order-grid',
  templateUrl: './order-grid.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderGridComponent {
  product$ = this.multiDimensionalService.product$;
  hasEntries: boolean = false;

  private entries: OrderGridEntry[] = [];

  constructor(
    protected multiDimensionalService: VariantsMultiDimensionalService,
    protected multiCartService: MultiCartService,
    protected userIdService: UserIdService,
    protected activeCartService: ActiveCartService
  ) {}

  getVariantOptions(): Observable<GridVariantOption[]> {
    return this.multiDimensionalService.getVariantOptions();
  }

  getVariantCategories(): string[] {
    return this.multiDimensionalService.getVariantCategories();
  }

  getAllEnriesQuantity(): number {
    return this.entries.reduce((prev, current) => {
      return prev + current.quantity;
    }, 0);
  }

  updateEntries(entry: OrderGridEntry): void {
    const entryIndex = this.entries.findIndex(
      (element: OrderGridEntry) => element.product.code === entry.product.code
    );

    if (entryIndex === -1) {
      if (entry.quantity > 0) {
        const element: OrderGridEntry = {
          quantity: entry.quantity,
          product: entry.product,
        };

        this.entries.push(element);
      }
    } else {
      this.entries[entryIndex].quantity = entry.quantity;
    }
    this.hasEntries = !!this.entries.length;
  }

  addAllToCart(): void {
    // TODO
    combineLatest([
      this.userIdService.getUserId(),
      this.activeCartService.getActiveCartId(),
    ]).subscribe(([userId, cartId]) => {
      let entries: OrderEntries = { orderEntries: [] };

      entries.orderEntries.push(
        {
          quantity: 2,
          product: {
            code: '26002000_1',
          },
        },
        {
          quantity: 3,
          product: {
            code: '26002000_9',
          },
        }
      );

      // TODO
      if ('anonymous' === userId) {
        return;
      }

      console.log('3 addAllToCart', userId, cartId, cartId, entries);

      this.multiCartService.addManyEntries(userId, cartId, entries);
    });

    this.clearEntries();
  }

  clearEntries(): void {
    this.entries = [];
  }
}
