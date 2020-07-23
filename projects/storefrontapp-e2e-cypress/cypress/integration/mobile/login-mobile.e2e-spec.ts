import { clickHamburger, waitForHomePage } from '../../helpers/homepage';
import * as login from '../../helpers/login';
import { formats } from '../../sample-data/viewports';

describe(
  `${formats.mobile.width + 1}p resolution - Login`,
  {
    viewportHeight: formats.mobile.width,
    viewportWidth: formats.mobile.height,
  },
  () => {
    before(() => {
      cy.window().then((win) => win.sessionStorage.clear());

      cy.visit('/');

      waitForHomePage();

      login.registerUser();
    });

    it('should login successfully with correct credentials', () => {
      login.loginUser();

      waitForHomePage();

      const tokenRevocationRequestAlias = login.listenForTokenRevocationReqest();
      login.signOutUser();
      cy.wait(tokenRevocationRequestAlias).its('status').should('eq', 200);
    });

    it('login should fail if password is wrong', () => {
      clickHamburger();
      login.loginWithBadCredentials();
    });
  }
);
