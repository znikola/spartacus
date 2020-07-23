import * as login from '../../../helpers/login';
import {
  registerAndLogin,
  updatePasswordTest,
  verifyAsAnonymous,
} from '../../../helpers/update-password';
import { formats } from '../../../sample-data/viewports';

describe(
  `${formats.mobile.width + 1}p resolution - Update Password page`,
  {
    viewportHeight: formats.mobile.width,
    viewportWidth: formats.mobile.height,
  },
  () => {
    before(() => {
      cy.window().then((win) => win.sessionStorage.clear());
    });

    describe('update password test for anonymous user', () => {
      verifyAsAnonymous();
    });

    describe('update password test for logged in user', () => {
      before(() => {
        registerAndLogin();
        cy.reload();
        cy.visit('/');
      });

      beforeEach(() => {
        cy.restoreLocalStorage();
        cy.selectUserMenuOption({
          option: 'Password',
          isMobile: true,
        });
      });

      updatePasswordTest();

      afterEach(() => {
        cy.saveLocalStorage();
        cy.visit('/');
      });

      after(() => {
        login.signOutUser();
      });
    });
  }
);
