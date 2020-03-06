import { Cart } from '../../model/cart.model';
import { OrderEntry } from '../../model/order.model';

export namespace CartEvents {
  export class AddCartEntry {
    entry: OrderEntry;
    quantity: number;
    quantityAdded: number;
    statusCode: string;
    userId: string;
    cartId: string;

    constructor(data: AddCartEntry) {
      Object.assign(this, data);
    }
  }

  export class AddCartEntrySuccess {
    userId: string;
    cartId: string;
    productCode: string;
    quantity: string;

    constructor(data: AddCartEntrySuccess) {
      Object.assign(this, data);
    }
  }

  export class CreateCartSuccess {
    cart: Cart;

    constructor(data: CreateCartSuccess) {
      Object.assign(this, data);
    }
  }
}

export type CartEvent =
  | CartEvents.CreateCartSuccess
  | CartEvents.AddCartEntry
  | CartEvents.AddCartEntrySuccess;
