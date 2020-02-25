import { NgModule } from '@angular/core';
import { StateEventModule } from '../../event/state-event/state-event.module';
import { CartActions } from '../store/actions';
import { CartEvents } from './cart-event.model';
@NgModule({
  imports: [
    StateEventModule.fromActions([
      [CartActions.LOAD_CART, CartEvents.LoadCart],
      [CartActions.LOAD_CART_FAIL, CartEvents.LoadCartFail],
      [CartActions.LOAD_CART_SUCCESS, CartEvents.LoadCartSuccess],

      [CartActions.CREATE_CART, CartEvents.CreateCart],
      [CartActions.CREATE_CART_FAIL, CartEvents.CreateCartFail],
      [CartActions.CREATE_CART_SUCCESS, CartEvents.CreateCartSuccess],

      [CartActions.CART_ADD_ENTRY, CartEvents.CartAddEntry],
      [CartActions.CART_ADD_ENTRY_FAIL, CartEvents.CartAddEntryFail],
      [CartActions.CART_ADD_ENTRY_SUCCESS, CartEvents.CartAddEntrySuccess],

      [CartActions.CART_UPDATE_ENTRY, CartEvents.CartUpdateEntry],
      [CartActions.CART_UPDATE_ENTRY_FAIL, CartEvents.CartUpdateEntryFail],
      [
        CartActions.CART_UPDATE_ENTRY_SUCCESS,
        CartEvents.CartUpdateEntrySuccess,
      ],

      [CartActions.CART_REMOVE_ENTRY, CartEvents.CartRemoveEntry],
      [CartActions.CART_REMOVE_ENTRY_FAIL, CartEvents.CartRemoveEntryFail],
      [
        CartActions.CART_REMOVE_ENTRY_SUCCESS,
        CartEvents.CartRemoveEntrySuccess,
      ],

      // todo: consider adding, if needed: addEmailToCart, deleteCart, mergeCart)],
    ]),
  ],
})
export class CartEventModule {}
