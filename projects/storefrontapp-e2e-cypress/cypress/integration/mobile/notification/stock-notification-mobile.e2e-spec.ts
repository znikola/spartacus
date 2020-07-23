import * as notification from '../../../helpers/notification';
import { formats } from '../../../sample-data/viewports';

describe(
  `${formats.mobile.width + 1}p resolution - Stock Notification for guest`,
  {
    viewportHeight: formats.mobile.width,
    viewportWidth: formats.mobile.height,
  },
  () => {
    before(() => {
      cy.window().then((win) => win.sessionStorage.clear());
      cy.visit('/');
    });
    it('should login first when guest want to subcribe notification', () => {
      notification.verifyStockNotificationAsGuest();
    });
  }
);

describe(
  `${formats.mobile.width + 1}p resolution - Stock Notification for customer`,
  {
    viewportHeight: formats.mobile.width,
    viewportWidth: formats.mobile.height,
  },
  () => {
    before(() => {
      cy.window().then((win) => win.sessionStorage.clear());
      cy.requireLoggedIn();
      cy.visit('/');
    });

    it('should navigate to notification preference page through product detail page', () => {
      notification.verifyStockNotificationWithoutChannel();
    });

    it('should subcribe/unsubscribe notification', () => {
      notification.verifyStockNotification();
    });
  }
);
