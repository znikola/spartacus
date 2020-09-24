import { Injectable } from '@angular/core';
import { RoutingService } from '@spartacus/core';
import {
  UserGroup,
  UserGroupService,
} from '@spartacus/my-account/organization/core';
import { Observable, of } from 'rxjs';
import { OrganizationItemService } from '../../shared/organization-item.service';
import { UserGroupFormService } from '../form/user-group-form.service';
import { CurrentUserGroupService } from './current-user-group.service';
import { LoadStatus } from '../../../core/model/budget.model';

@Injectable({
  providedIn: 'root',
})
export class UserGroupItemService extends OrganizationItemService<UserGroup> {
  constructor(
    protected currentItemService: CurrentUserGroupService,
    protected routingService: RoutingService,
    protected formService: UserGroupFormService,
    protected userGroupService: UserGroupService
  ) {
    super(currentItemService, routingService, formService);
  }

  load(code: string): Observable<UserGroup> {
    this.userGroupService.load(code);
    return this.userGroupService.get(code);
  }

  update(code, value: UserGroup): Observable<LoadStatus> {
    this.userGroupService.update(code, value);
    // TODO:
    return of(LoadStatus.ERROR);
  }

  protected create(value: UserGroup) {
    this.userGroupService.create(value);
  }

  protected getDetailsRoute(): string {
    return 'userGroupDetails';
  }
}
