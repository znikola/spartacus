import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CartEntryAdapter } from './cart-entry.adapter';
import { CartModification } from '../../../model/cart.model';
import { OrderEntries } from '@spartacus/core';

@Injectable({
  providedIn: 'root',
})
export class CartEntryConnector {
  constructor(protected adapter: CartEntryAdapter) {}

  public add(
    userId: string,
    cartId: string,
    productCode: string,
    quantity?: number
  ): Observable<CartModification> {
    return this.adapter.add(userId, cartId, productCode, quantity);
  }

  public addMany(
    userId: string,
    cartId: string,
    entries: OrderEntries
  ): Observable<any> {
    return this.adapter.addMany(userId, cartId, entries);
  }

  public update(
    userId: string,
    cartId: string,
    entryNumber: string,
    qty: number,
    pickupStore?: string
  ): Observable<CartModification> {
    return this.adapter.update(userId, cartId, entryNumber, qty, pickupStore);
  }

  public remove(
    userId: string,
    cartId: string,
    entryNumber: string
  ): Observable<any> {
    return this.adapter.remove(userId, cartId, entryNumber);
  }
}
