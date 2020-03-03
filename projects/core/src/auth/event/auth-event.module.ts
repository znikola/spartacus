import { NgModule } from '@angular/core';
import { StateEventModule } from '../../event/state-event/state-event.module';
import { AuthActions } from '../store/actions';
import { AuthEvents } from './auth-event.model';
@NgModule({
  imports: [
    StateEventModule.fromActions([
      { action: AuthActions.LOGIN, event: AuthEvents.Login },
      { action: AuthActions.LOGOUT, event: AuthEvents.Logout },
    ]),
  ],
})
export class AuthEventModule {}
