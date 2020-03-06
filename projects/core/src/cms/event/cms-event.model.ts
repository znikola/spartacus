import { Page } from '../model/page.model';

export namespace CmsEvents {
  export class PageLoadSuccess {
    page: Page;
    constructor(data: PageLoadSuccess) {
      Object.assign(this, data);
    }
  }
}
