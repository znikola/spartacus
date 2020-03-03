import { StateEvent } from '../../event/state-event/state-event.model';
import { AuthActions } from '../store/actions';

export namespace AuthEvents {
  export class Login extends StateEvent<AuthActions.Login['payload']> {}
  export class Logout extends StateEvent<AuthActions.Logout['payload']> {}

  export const all = [Login, Logout];
}

export type AuthEvent = AuthEvents.Login | AuthEvents.Logout;
