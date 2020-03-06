import { Page } from '@spartacus/core';

export class AddedToCartContextAware {
  url: string;
  page: Page;
  added: any;

  constructor(data: AddedToCartContextAware) {
    Object.assign(this, data);
  }
}
