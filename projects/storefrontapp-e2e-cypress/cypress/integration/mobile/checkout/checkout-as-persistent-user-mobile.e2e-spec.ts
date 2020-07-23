import {
  checkoutAsPersistentUserTest,
  retrieveTokenAndLogin,
} from '../../../helpers/checkout-as-persistent-user';
import * as login from '../../../helpers/login';
import { formats } from '../../../sample-data/viewports';

describe(
  `${formats.mobile.width + 1}p resolution - Checkout - As a Persistent User`,
  {
    viewportHeight: formats.mobile.width,
    viewportWidth: formats.mobile.height,
  },
  () => {
    before(() => {
      cy.window().then((win) => win.sessionStorage.clear());

      retrieveTokenAndLogin();
      cy.reload();
      cy.visit('/');
    });

    beforeEach(() => {
      cy.restoreLocalStorage();
    });

    checkoutAsPersistentUserTest();

    afterEach(() => {
      cy.saveLocalStorage();
    });

    after(() => {
      login.signOutUser();
    });
  }
);
