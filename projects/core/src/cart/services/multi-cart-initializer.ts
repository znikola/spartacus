import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ConfigInitializerService } from '../../config/config-initializer/config-initializer.service';
import { CookiesService } from '../../state/services/cookies.service';
import { MultiCartService } from '../facade/multi-cart.service';
import { MultiCartStatePersistenceService } from './multi-cart-state-persistence.service';

@Injectable({ providedIn: 'root' })
export class MultiCartInitializer {
  protected subscription: Subscription;

  constructor(
    protected multiCartStatePersistenceService: MultiCartStatePersistenceService,
    protected multiCartService: MultiCartService,
    protected cookiesService: CookiesService,
    protected configInit: ConfigInitializerService
  ) {}

  initialize(): void {
    this.subscription = this.configInit
      .getStable('context')
      .pipe(
        // switchMap(() => this.multiCartStatePersistenceService.readCookie()),
        switchMap(() => this.multiCartStatePersistenceService.initSync())
      )
      .subscribe();
  }
}
