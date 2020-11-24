import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  AuthService,
  GlobalMessageService,
  GlobalMessageType,
  RoutingService,
  UserService,
} from '@spartacus/core';
import { first } from 'rxjs/operators';
import { CustomFormValidators } from '../../../shared/utils';

@Injectable({
  providedIn: 'root',
})
export class UpdateEmailService {
  isUpdating$ = this.userService.getUpdateEmailResultLoading();

  constructor(
    protected routingService: RoutingService,
    protected globalMessageService: GlobalMessageService,
    protected userService: UserService,
    protected authService: AuthService
  ) {}

  form: FormGroup = new FormGroup(
    {
      email: new FormControl('', [
        Validators.required,
        CustomFormValidators.emailValidator,
      ]),
      confirmEmail: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    },
    {
      validators: CustomFormValidators.emailsMustMatch('email', 'confirmEmail'),
    }
  );

  reset(): void {
    this.userService.resetUpdateEmailResultState();
  }

  save(): void {
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }

    this.form.disable();
    this.userService.updateEmail(
      this.form.get('password').value,
      this.form.get('confirmEmail').value
    );

    this.userService
      .getUpdateEmailResultSuccess()
      .pipe(first((success) => Boolean(success)))
      .subscribe(() => this.notify(this.form.get('confirmEmail').value));
  }

  /**
   * Notifies the user, resets the form, and signs out.
   *
   * TODO: clarify why we sign out.
   */
  protected notify(newUid: string): void {
    this.globalMessageService.add(
      {
        key: 'updateEmailForm.emailUpdateSuccess',
        params: { newUid },
      },
      GlobalMessageType.MSG_TYPE_CONFIRMATION
    );
    this.form.reset();
    this.form.enable();
    // TODO(#9638): Use logout route when it will support passing redirect url
    this.authService.coreLogout().then(() => {
      this.routingService.go({ cxRoute: 'login' }, null, {
        state: { newUid },
      });
    });
  }
}
