import {
  addressBookTest,
  verifyAsAnonymous,
} from '../../../helpers/address-book';
import * as login from '../../../helpers/login';
import { formats } from '../../../sample-data/viewports';

describe(
  `${formats.mobile.width + 1}p resolution - Address Book page`,
  {
    viewportHeight: formats.mobile.width,
    viewportWidth: formats.mobile.height,
  },
  () => {
    before(() => {
      cy.window().then((win) => win.sessionStorage.clear());
    });

    describe('address book test for anonymous user', () => {
      verifyAsAnonymous();
    });

    describe('address book test for logged in user', () => {
      before(() => {
        cy.requireLoggedIn();
        cy.reload();
        cy.visit('/');
        cy.selectUserMenuOption({
          option: 'Address Book',
          isMobile: true,
        });
      });

      beforeEach(() => {
        cy.restoreLocalStorage();
      });

      addressBookTest();

      afterEach(() => {
        cy.saveLocalStorage();
      });

      after(() => {
        login.signOutUser();
      });
    });
  }
);
