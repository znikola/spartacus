import {
  closeAccountTest,
  registerAndLogin,
  verifyAccountClosedTest,
  verifyAsAnonymous,
} from '../../../helpers/close-account';
import { formats } from '../../../sample-data/viewports';

describe(
  `${formats.mobile.width + 1}p resolution - Close Account page`,
  {
    viewportHeight: formats.mobile.width,
    viewportWidth: formats.mobile.height,
  },
  () => {
    before(() => {
      cy.window().then((win) => win.sessionStorage.clear());
    });

    describe('close account test for anonymous user', () => {
      verifyAsAnonymous();
    });

    describe('close account test for logged in user', () => {
      before(() => {
        registerAndLogin();
        cy.reload();
        cy.visit('/');
      });

      beforeEach(() => {
        cy.restoreLocalStorage();
        cy.selectUserMenuOption({
          option: 'Close Account',
          isMobile: true,
        });
      });

      closeAccountTest();

      afterEach(() => {
        cy.saveLocalStorage();
      });
    });

    describe('verify user is disabled and cannot login', () => {
      verifyAccountClosedTest();
    });
  }
);
