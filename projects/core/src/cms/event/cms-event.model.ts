import { Page } from '../model/page.model';

export namespace CmsEvents {
  export class LoadCmsPageDataSuccess {
    page: Page;
    constructor(data: LoadCmsPageDataSuccess) {
      Object.assign(this, data);
    }
  }
}
