import { CmsComponent } from '@spartacus/core';
import { Observable } from 'rxjs';

export abstract class CmsComponentData<T extends CmsComponent, C = any> {
  uid: string;
  data$: Observable<T>;
  configuration?: C;
}
