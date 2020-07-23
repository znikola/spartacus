import * as notification from '../../../helpers/notification';
import { registerAndLogin } from '../../../helpers/update-email';
import { formats } from '../../../sample-data/viewports';

describe(
  `${formats.mobile.width + 1}p resolution - Notification Preference for guest`,
  {
    viewportHeight: formats.mobile.width,
    viewportWidth: formats.mobile.height,
  },
  () => {
    before(() => {
      cy.window().then((win) => win.sessionStorage.clear());
    });

    it('should redirect to login page for anonymous user', () => {
      notification.verifyNotificationPrefAsAnonymous();
    });
  }
);

describe(
  `${
    formats.mobile.width + 1
  }p resolution - Notification Preference for customer`,
  {
    viewportHeight: formats.mobile.width,
    viewportWidth: formats.mobile.height,
  },
  () => {
    before(() => {
      cy.window().then((win) => win.sessionStorage.clear());
      registerAndLogin();
      cy.visit('/');
    });

    it('should enable/disable notification preference', () => {
      notification.verifyNotificationChannel();
    });

    it('should show correct email channel after update email address', () => {
      notification.verifyChannelValueUpdating();
    });
  }
);
