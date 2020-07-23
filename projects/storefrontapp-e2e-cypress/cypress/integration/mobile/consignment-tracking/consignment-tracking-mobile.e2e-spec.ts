import * as orderDetail from '../../../helpers/consignment-tracking';
import { formats } from '../../../sample-data/viewports';

describe(
  `${formats.mobile.width + 1}p consignment tracking`,
  {
    viewportHeight: formats.mobile.width,
    viewportWidth: formats.mobile.height,
  },
  () => {
    before(() => {
      cy.window().then((win) => win.sessionStorage.clear());
      orderDetail.loginUsingUserWithOrder();
    });

    it('should see tracking package button and tracking events when consignment is shipped', () => {
      orderDetail.visitOrderDetailWithConsignment();
    });

    it('should not see tracking package button when no consignment', () => {
      orderDetail.visitOrderDetailWithoutConsignment();
    });
  }
);
