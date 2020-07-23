import { visitHomePage } from '../../../helpers/checkout-flow';
import * as login from '../../../helpers/login';
import {
  checkAnonymous,
  paymentMethodsTest,
} from '../../../helpers/payment-methods';
import { formats } from '../../../sample-data/viewports';

describe(
  `${formats.mobile.width + 1}p resolution - Payment Methods`,
  {
    viewportHeight: formats.mobile.width,
    viewportWidth: formats.mobile.height,
  },
  () => {
    before(() => {
      cy.window().then((win) => win.sessionStorage.clear());
      visitHomePage();
    });

    describe('Anonymous user', () => {
      checkAnonymous();
    });

    describe('Authenticated user', () => {
      before(() => {
        cy.server();
        visitHomePage();
      });

      beforeEach(() => {
        cy.restoreLocalStorage();
      });

      paymentMethodsTest(true);

      afterEach(() => {
        cy.saveLocalStorage();
      });

      after(() => {
        login.signOutUser();
      });
    });
  }
);
