import { Injectable, OnDestroy } from '@angular/core';
import { Event, NavigationStart, Router } from '@angular/router';
import { UrlParsingService } from 'projects/core/src/routing/configurable-routes/url-translation/url-parsing.service';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { RoutingService } from '../../../routing/facade/routing.service';
import { ProtectedRoutesService } from '../../../routing/protected-routes/protected-routes.service';
import { AuthRedirectStorageService } from './auth-redirect-storage.service';

/**
 * Responsible for saving last accessed page (or attempted) before login and for redirecting to that page after login.
 */
@Injectable({
  providedIn: 'root',
})
export class AuthRedirectService implements OnDestroy {
  /**
   * This service is responsible for remembering the last page before the authentication. "The last page" can be:
   * 1. Just the previously opened page; or
   * 2. The page that we just tried to open, but AuthGuard cancelled it
   *
   * Then, after successful authentication it allows for redirecting to that remembered page via the `redirect()` method.
   *
   * For example:
   * 1. The user opens the product page, then clicks /login link and signs in
   *    -> Then we should redirect to the product page; or
   * 2. The user opens the product page, then he clicks /my-account link,
   *    but is automatically redirected to the login page by the AuthGuard, and he signs in
   *    -> Then we should redirect to the my-account page, not the product page
   */
  constructor(
    protected routing: RoutingService,
    protected router: Router,
    protected authRedirectStorageService: AuthRedirectStorageService,
    protected protectedRoutesService: ProtectedRoutesService,
    protected urlParsingService: UrlParsingService
  ) {
    this.init();
  }

  private subscription: Subscription;

  /**
   * Redirect to saved url (homepage if nothing is saved).
   */
  redirect() {
    this.authRedirectStorageService
      .getRedirectUrl()
      .pipe(take(1))
      .subscribe((redirectUrl) => {
        if (redirectUrl === undefined) {
          this.routing.go('/');
        } else {
          this.routing.goByUrl(redirectUrl);
        }
        this.authRedirectStorageService.setRedirectUrl(undefined);
      });
  }

  /**
   * Initializes the subscription to the NavigationStart Router events. Based on those events,
   * we remember possible redirect URL.
   */
  protected init() {
    if (this.subscription) {
      return; // prevent calling init() twice
    }

    this.subscription = this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.saveRedirectUrl(event.url);
      }
    });
  }

  /**
   * @deprecated since 4.0, the method is not needed anymore
   */
  reportAuthGuard() {}

  /**
   * @deprecated since 4.0, the method is not needed anymore
   */
  reportNotAuthGuard() {}

  /**
   * Saves the last redirect URL candidate as the actual redirect URL.
   */
  private saveRedirectUrl(url: string) {
    if (this.shouldSaveRedirectUrl(url)) {
      this.authRedirectStorageService.setRedirectUrl(url);
    }
  }

  /**
   * Returns true if URL is restricted only for not-authenticated users.
   *
   * Such a restriction can be configured by setting `protected: false` for specific routes
   * in Spartacus routing configuration.
   */
  private shouldSaveRedirectUrl(url: string): boolean {
    return !this.protectedRoutesService.isUrlProtected(url);
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
