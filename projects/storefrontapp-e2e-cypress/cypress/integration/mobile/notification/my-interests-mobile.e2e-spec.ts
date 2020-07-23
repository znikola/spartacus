import * as orderDetail from '../../../helpers/consignment-tracking';
import * as notification from '../../../helpers/notification';
import { formats } from '../../../sample-data/viewports';

describe(
  `${formats.mobile.width + 1}p resolution - My interests`,
  {
    viewportHeight: formats.mobile.width,
    viewportWidth: formats.mobile.height,
  },
  () => {
    beforeEach(() => {
      cy.window().then((win) => win.sessionStorage.clear());
      cy.requireLoggedIn();
      cy.visit('/');
      notification.enableNotificationChannel();
    });

    it('should show/remove interest', () => {
      notification.verifyCustomerInterests();
    });

    it('should remove the subscrption in PDP', () => {
      notification.verifyRemovingCustomerInterestInPDP();
    });
  }
);

describe(
  `${formats.mobile.width + 1}p resolution - My interests paging and sorting`,
  {
    viewportHeight: formats.mobile.width,
    viewportWidth: formats.mobile.height,
  },
  () => {
    before(() => {
      cy.window().then((win) => win.sessionStorage.clear());
      orderDetail.loginUsingUserWithOrder();
    });

    it('should page and sort', () => {
      notification.verifyPagingAndSorting();
    });
  }
);
