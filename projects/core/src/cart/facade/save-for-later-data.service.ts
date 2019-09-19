import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Cart } from '../../model/cart.model';
import { CartSelectors } from '../store/selectors/index';
import { StateWithCart } from '../store/cart-state';
import { UserService } from '../../user/facade/user.service';
import { AuthService } from '../../auth/facade/auth.service';
import { filter } from 'rxjs/operators';
import { OCC_USER_ID_ANONYMOUS } from '../../occ/utils/occ-constants';

@Injectable()
export class SaveForLaterDataService {
  private _userId = OCC_USER_ID_ANONYMOUS;
  private _customerId = OCC_USER_ID_ANONYMOUS;
  private _saveForLater: Cart;

  constructor(
    protected store: Store<StateWithCart>,
    protected authService: AuthService,
    protected userService: UserService
  ) {
    this.authService
      .getUserToken()
      .pipe(filter(userToken => this.userId !== userToken.userId))
      .subscribe(userToken => {
        if (Object.keys(userToken).length !== 0) {
          this._userId = userToken.userId;
        } else {
          this._userId = OCC_USER_ID_ANONYMOUS;
        }
      });

    this.userService.get().subscribe(user => {
      if (user.customerId) {
        this._customerId = user.customerId;
      }
    });

    this.store
      .pipe(select(CartSelectors.getSaveForLaterContent))
      .subscribe(saveForLater => {
        this._saveForLater = saveForLater;
      });
  }

  get hasCart(): boolean {
    return !!this._saveForLater;
  }

  get userId(): string {
    return this._userId;
  }

  get saveForLater(): Cart {
    return this._saveForLater;
  }

  get cartId(): string {
    return 'selectivecart' + this._customerId;
  }
}
