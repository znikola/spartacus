import { CartActions } from '@spartacus/core';
import { StateEvent } from '../../event/state-event/state-event.model';

export namespace CartEvents {
  export class CreateCart extends StateEvent<
    CartActions.CreateCart['payload']
  > {}
  export class CreateCartFail extends StateEvent<
    CartActions.CreateCartFail['payload']
  > {}
  export class CreateCartSuccess extends StateEvent<
    CartActions.CreateCartSuccess['payload']
  > {}

  export class LoadCart extends StateEvent<CartActions.LoadCart['payload']> {}
  export class LoadCartFail extends StateEvent<
    CartActions.LoadCartFail['payload']
  > {}
  export class LoadCartSuccess extends StateEvent<
    CartActions.LoadCartSuccess['payload']
  > {}

  export class CartAddEntry extends StateEvent<
    CartActions.CartAddEntry['payload']
  > {}
  export class CartAddEntrySuccess extends StateEvent<
    CartActions.CartAddEntrySuccess['payload']
  > {}
  export class CartAddEntryFail extends StateEvent<
    CartActions.CartAddEntryFail['payload']
  > {}

  export class CartRemoveEntry extends StateEvent<
    CartActions.CartRemoveEntry['payload']
  > {}
  export class CartRemoveEntrySuccess extends StateEvent<
    CartActions.CartRemoveEntrySuccess['payload']
  > {}
  export class CartRemoveEntryFail extends StateEvent<
    CartActions.CartRemoveEntryFail['payload']
  > {}

  export class CartUpdateEntry extends StateEvent<
    CartActions.CartUpdateEntry['payload']
  > {}
  export class CartUpdateEntrySuccess extends StateEvent<
    CartActions.CartUpdateEntrySuccess['payload']
  > {}
  export class CartUpdateEntryFail extends StateEvent<
    CartActions.CartUpdateEntryFail['payload']
  > {}
}
