import { Action } from '@ngrx/store';

export const LOGIN = '[Auth] Login';
export const LOGOUT = '[Auth] Logout';
export const LOGOUT_CUSTOMER_SUPPORT_AGENT =
  '[Auth] Logout Customer Support Agent';

export class Login implements Action {
  readonly type = LOGIN;
  constructor(public payload?: { userId?: string }) {}
}

export class Logout implements Action {
  readonly type = LOGOUT;
  constructor(public payload?: { userId?: string }) {}
}

// action types
export type LoginLogoutAction = Login | Logout;
