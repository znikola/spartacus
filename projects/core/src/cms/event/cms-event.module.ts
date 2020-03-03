import { NgModule } from '@angular/core';
import { StateEventModule } from '../../event/state-event/state-event.module';
import { CmsActions } from '../store/actions';
import { CmsEvents } from './cms-event.model';

/**
 * Premature event module for building cms related events.
 * There's currently only a very generic page load success event being added,
 * which doesn't add a lot of value. We'd rather have a product page, category
 * page, content page load event, all with a useful payload.
 */
@NgModule({
  imports: [
    StateEventModule.fromActions([
      {
        action: CmsActions.LOAD_CMS_PAGE_DATA_SUCCESS,
        event: CmsEvents.PageLoadSuccess,
        // spike just to test factory
        factory: (action: CmsActions.LoadCmsPageData) => {
          const res = new CmsEvents.PageLoadSuccess({
            ...action.payload,
            _test: 'test',
          });
          return res;
        },
      },
    ]),
  ],
})
export class CmsEventModule {}

/// SPIKE TODO SHOULD NOT BE EXPOSED
