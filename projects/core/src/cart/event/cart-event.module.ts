import { NgModule } from '@angular/core';
import { StateEventModule } from '../../event/state-event/state-event.module';
import { CartActions } from '../store/actions';
import { CartEvents } from './cart-event.model';
@NgModule({
  imports: [
    StateEventModule.fromActions([
      { action: CartActions.LOAD_CART, event: CartEvents.Load },
      { action: CartActions.LOAD_CART_FAIL, event: CartEvents.LoadFail },
      {
        action: CartActions.LOAD_CART_SUCCESS,
        event: CartEvents.LoadSuccess,
      },

      { action: CartActions.CREATE_CART, event: CartEvents.Create },
      {
        action: CartActions.CREATE_CART_FAIL,
        event: CartEvents.CreateFail,
      },
      {
        action: CartActions.CREATE_CART_SUCCESS,
        event: CartEvents.CreateSuccess,
      },

      { action: CartActions.CART_ADD_ENTRY, event: CartEvents.AddEntry },
      {
        action: CartActions.CART_ADD_ENTRY_FAIL,
        event: CartEvents.AddEntryFail,
      },
      {
        action: CartActions.CART_ADD_ENTRY_SUCCESS,
        event: CartEvents.AddEntrySuccess,
      },

      {
        action: CartActions.CART_UPDATE_ENTRY,
        event: CartEvents.UpdateEntry,
      },
      {
        action: CartActions.CART_UPDATE_ENTRY_FAIL,
        event: CartEvents.UpdateEntryFail,
      },
      {
        action: CartActions.CART_UPDATE_ENTRY_SUCCESS,
        event: CartEvents.UpdateEntrySuccess,
      },

      {
        action: CartActions.CART_REMOVE_ENTRY,
        event: CartEvents.RemoveEntry,
      },
      {
        action: CartActions.CART_REMOVE_ENTRY_FAIL,
        event: CartEvents.RemoveEntryFail,
      },
      {
        action: CartActions.CART_REMOVE_ENTRY_SUCCESS,
        event: CartEvents.RemoveEntrySuccess,
      },

      // todo: consider adding, if needed: addEmailToCart, deleteCart, mergeCart)],
    ]),
  ],
})
export class CartEventModule {}
