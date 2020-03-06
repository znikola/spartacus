import { NgModule } from '@angular/core';
import { StateEventModule } from '../../event/state-event/state-event.module';
import { CartActions } from '../store/actions';
import { CartEvents } from './cart-event.model';
@NgModule({
  imports: [
    StateEventModule.fromActions([
      {
        action: CartActions.CART_ADD_ENTRY,
        event: CartEvents.AddCartEntry,
        factory: ({ payload }: CartActions.CartAddEntry) =>
          new CartEvents.AddCartEntry(payload),
      },
      {
        action: CartActions.CART_ADD_ENTRY_SUCCESS,
        event: CartEvents.AddCartEntrySuccess,
      },
      {
        action: CartActions.CREATE_CART_SUCCESS,
        event: CartEvents.CreateCartSuccess,
        factory: ({ payload }: CartActions.CreateCartSuccess) =>
          new CartEvents.CreateCartSuccess(payload),
      },
    ]),
  ],
})
export class CartEventModule {}
