import { StateEvent } from '../../event/state-event/state-event.model';
import { CartActions } from '../store/actions';

export namespace CartEvents {
  export class Create extends StateEvent<CartActions.CreateCart['payload']> {}
  export class CreateFail extends StateEvent<
    CartActions.CreateCartFail['payload']
  > {}
  export class CreateSuccess extends StateEvent<
    CartActions.CreateCartSuccess['payload']
  > {}

  export class Load extends StateEvent<CartActions.LoadCart['payload']> {}
  export class LoadFail extends StateEvent<
    CartActions.LoadCartFail['payload']
  > {}
  export class LoadSuccess extends StateEvent<
    CartActions.LoadCartSuccess['payload']
  > {}

  export class AddEntry extends StateEvent<
    CartActions.CartAddEntry['payload']
  > {}
  export class AddEntrySuccess extends StateEvent<
    CartActions.CartAddEntrySuccess['payload']
  > {}
  export class AddEntryFail extends StateEvent<
    CartActions.CartAddEntryFail['payload']
  > {}

  export class RemoveEntry extends StateEvent<
    CartActions.CartRemoveEntry['payload']
  > {}
  export class RemoveEntrySuccess extends StateEvent<
    CartActions.CartRemoveEntrySuccess['payload']
  > {}
  export class RemoveEntryFail extends StateEvent<
    CartActions.CartRemoveEntryFail['payload']
  > {}

  export class UpdateEntry extends StateEvent<
    CartActions.CartUpdateEntry['payload']
  > {}
  export class UpdateEntrySuccess extends StateEvent<
    CartActions.CartUpdateEntrySuccess['payload']
  > {}
  export class UpdateEntryFail extends StateEvent<
    CartActions.CartUpdateEntryFail['payload']
  > {}

  export const all = [
    Create,
    CreateFail,
    CreateSuccess,
    Load,
    LoadFail,
    LoadSuccess,
    AddEntry,
    AddEntryFail,
    AddEntrySuccess,
    UpdateEntry,
    UpdateEntryFail,
    UpdateEntrySuccess,
  ];
}

export type CartEvent =
  | CartEvents.Create
  | CartEvents.CreateFail
  | CartEvents.CreateSuccess
  | CartEvents.Load
  | CartEvents.LoadFail
  | CartEvents.LoadSuccess
  | CartEvents.AddEntry
  | CartEvents.AddEntryFail
  | CartEvents.AddEntrySuccess
  | CartEvents.UpdateEntry
  | CartEvents.UpdateEntryFail
  | CartEvents.UpdateEntrySuccess;
