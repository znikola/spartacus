import { Injectable } from '@angular/core';
import { B2BUser, Permission, RoutingService } from '@spartacus/core';
import { B2BUserService } from '@spartacus/my-account/organization/core';
import { Observable, of } from 'rxjs';
import { OrganizationItemService } from '../../shared/organization-item.service';
import { UserFormService } from '../form/user-form.service';
import { CurrentUserService } from './current-user.service';
import { LoadStatus } from '../../../core/model/budget.model';

@Injectable({
  providedIn: 'root',
})
export class UserItemService extends OrganizationItemService<Permission> {
  constructor(
    protected currentItemService: CurrentUserService,
    protected routingService: RoutingService,
    protected formService: UserFormService,
    protected userService: B2BUserService
  ) {
    super(currentItemService, routingService, formService);
  }

  load(code: string): Observable<B2BUser> {
    this.userService.load(code);
    return this.userService.get(code);
  }

  update(code, value: B2BUser): Observable<LoadStatus> {
    delete value.approvers;
    this.userService.update(code, value);
    return of(LoadStatus.ERROR);
  }

  protected create(value: B2BUser) {
    this.userService.create(value);
  }

  protected getDetailsRoute(): string {
    return 'userDetails';
  }
}
