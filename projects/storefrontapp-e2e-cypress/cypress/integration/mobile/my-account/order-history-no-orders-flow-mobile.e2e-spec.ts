import { getAlert } from '../../../helpers/commons/global-message';
import { waitForHomePage } from '../../../helpers/homepage';
import * as loginHelper from '../../../helpers/login';
import { orderHistoryTest } from '../../../helpers/order-history';
import { formats } from '../../../sample-data/viewports';

describe(
  `${formats.mobile.width + 1}p resolution - Order History with no orders`,
  {
    viewportHeight: formats.mobile.width,
    viewportWidth: formats.mobile.height,
  },
  () => {
    before(() => {
      cy.window().then((win) => win.sessionStorage.clear());

      cy.visit('/');

      waitForHomePage();

      loginHelper.registerUser();

      // waiting for post-register alert, so we don't abort register user request
      getAlert();
    });

    orderHistoryTest.checkRedirectNotLoggedInUser();
    orderHistoryTest.checkRedirectLoggedInUser();
    orderHistoryTest.checkStartShoppingButton();
  }
);
