import { NgModule } from '@angular/core';
import { StateEventModule } from '../../event/state-event/state-event.module';
import { CartActions } from '../store/actions';
import { CartEvents } from './cart-event.model';
@NgModule({
  imports: [
    StateEventModule.fromActions([
      { action: CartActions.LOAD_CART, event: CartEvents.LoadCart },
      { action: CartActions.LOAD_CART_FAIL, event: CartEvents.LoadCartFail },
      {
        action: CartActions.LOAD_CART_SUCCESS,
        event: CartEvents.LoadCartSuccess,
      },

      { action: CartActions.CREATE_CART, event: CartEvents.CreateCart },
      {
        action: CartActions.CREATE_CART_FAIL,
        event: CartEvents.CreateCartFail,
      },
      {
        action: CartActions.CREATE_CART_SUCCESS,
        event: CartEvents.CreateCartSuccess,
      },

      { action: CartActions.CART_ADD_ENTRY, event: CartEvents.CartAddEntry },
      {
        action: CartActions.CART_ADD_ENTRY_FAIL,
        event: CartEvents.CartAddEntryFail,
      },
      {
        action: CartActions.CART_ADD_ENTRY_SUCCESS,
        event: CartEvents.CartAddEntrySuccess,
      },

      {
        action: CartActions.CART_UPDATE_ENTRY,
        event: CartEvents.CartUpdateEntry,
      },
      {
        action: CartActions.CART_UPDATE_ENTRY_FAIL,
        event: CartEvents.CartUpdateEntryFail,
      },
      {
        action: CartActions.CART_UPDATE_ENTRY_SUCCESS,
        event: CartEvents.CartUpdateEntrySuccess,
      },

      {
        action: CartActions.CART_REMOVE_ENTRY,
        event: CartEvents.CartRemoveEntry,
      },
      {
        action: CartActions.CART_REMOVE_ENTRY_FAIL,
        event: CartEvents.CartRemoveEntryFail,
      },
      {
        action: CartActions.CART_REMOVE_ENTRY_SUCCESS,
        event: CartEvents.CartRemoveEntrySuccess,
      },

      // todo: consider adding, if needed: addEmailToCart, deleteCart, mergeCart)],
    ]),
  ],
})
export class CartEventModule {}
