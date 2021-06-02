import { Injectable, OnDestroy } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, ReplaySubject, Subscription } from 'rxjs';
import { distinctUntilKeyChanged, filter, map } from 'rxjs/operators';
import { BASE_SITE_CONTEXT_ID } from '../../site-context';
import { SiteContextParamsService } from '../../site-context/services/site-context-params.service';
import { CookiesService } from '../../state/services/cookies.service';
import { StatePersistenceService } from '../../state/services/state-persistence.service';
import { MultiCartService } from '../facade';
import { CartActions, MultiCartSelectors } from '../store';
import { StateWithMultiCart } from '../store/multi-cart-state';

@Injectable({
  providedIn: 'root',
})
export class MultiCartStatePersistenceService implements OnDestroy {
  protected subscription = new Subscription();
  protected initialized$ = new ReplaySubject<unknown>(1);

  constructor(
    protected statePersistenceService: StatePersistenceService,
    protected store: Store<StateWithMultiCart>,
    protected siteContextParamsService: SiteContextParamsService,
    protected cookiesService: CookiesService,
    protected multiCartService: MultiCartService
  ) {}

  public initSync(): Observable<unknown> {
    this.subscription.add(
      this.statePersistenceService.syncWithStorage({
        key: 'cart',
        state$: this.getCartState(),
        context$: this.siteContextParamsService.getValues([
          BASE_SITE_CONTEXT_ID,
        ]),
        onRead: (state) => this.onRead(state),
      })
    );

    return this.initialized$;
  }

  protected getCartState(): Observable<{ active: string }> {
    return this.store.pipe(
      select(MultiCartSelectors.getMultiCartState),
      filter((state) => !!state),
      distinctUntilKeyChanged('active'),
      map((state) => {
        console.log('GET cart state', state);
        return {
          active: state.active,
        };
      })
    );
  }

  protected onRead(state: { active: string }): void {
    // Check if initialized by other means
    if (!this.multiCartService.isInitialized(state.active)) {
      this.store.dispatch(new CartActions.ClearCartState());
      if (state) {
        this.store.dispatch(new CartActions.SetActiveCartId(state.active));
      } else {
        this.store.dispatch(new CartActions.SetActiveCartId(''));
      }
    }

    if (!this.initialized$.closed) {
      this.initialized$.next();
      this.initialized$.complete();
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
