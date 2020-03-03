import { StateEvent } from '../../event/state-event/state-event.model';
import { CmsActions } from '../store';

export namespace CmsEvents {
  export class PageLoadSuccess extends StateEvent<
    CmsActions.LoadCmsPageDataSuccess['payload']
  > {}
}
