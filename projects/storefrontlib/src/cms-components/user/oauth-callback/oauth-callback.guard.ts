import { Injectable } from '@angular/core';
import { CanActivate, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  AuthActions,
  AuthRedirectService,
  AuthStorageService,
  OAuthLibWrapperService,
  OCC_USER_ID_CURRENT,
  RoutingService,
  StateWithClientAuth,
  UserIdService,
} from '@spartacus/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OAuthCallbackGuard implements CanActivate {
  constructor(
    protected store: Store<StateWithClientAuth>,
    protected userIdService: UserIdService,
    protected oAuthLibWrapperService: OAuthLibWrapperService,
    protected authStorageService: AuthStorageService,
    protected authRedirectService: AuthRedirectService,
    protected routingService: RoutingService
  ) {}

  canActivate(): Observable<boolean | UrlTree> {
    const sub = new Subject<boolean | UrlTree>();
    this.oAuthLibWrapperService.tryLogin().then((result) => {
      const token = this.authStorageService.getItem('access_token');
      if (result && token) {
        this.userIdService.setUserId(OCC_USER_ID_CURRENT);
        this.store.dispatch(new AuthActions.Login());
        this.authRedirectService.redirect();
        sub.next(true);
      }
    });
    return sub;
  }
}
