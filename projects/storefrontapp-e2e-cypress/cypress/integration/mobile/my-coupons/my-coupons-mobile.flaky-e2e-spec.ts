import * as cartCoupon from '../../../helpers/cart-coupon';
import { visitHomePage } from '../../../helpers/checkout-flow';
import * as myCoupons from '../../../helpers/my-coupons';
import { formats } from '../../../sample-data/viewports';

describe(
  `${
    formats.mobile.width + 1
  }p resolution - My coupons test for anonymous user`,
  {
    viewportHeight: formats.mobile.width,
    viewportWidth: formats.mobile.height,
  },
  () => {
    before(() => {
      cy.window().then((win) => win.sessionStorage.clear());
    });

    it('should redirect to login page when entering my coupons using anonymous user', () => {
      myCoupons.verifyMyCouponsAsAnonymous();
    });

    it('should apply customer coupon that fails for anonymous user', () => {
      cartCoupon.applyMyCouponAsAnonymous(cartCoupon.myCouponCode2);
    });

    describe(`${
      formats.mobile.width + 1
    }p resolution - claim coupon test for anonymous user`, () => {
      before(() => {
        myCoupons.createStandardUser();
        cy.reload();
        visitHomePage();
      });

      beforeEach(() => {
        cy.restoreLocalStorage();
      });

      it('claim customer coupon that is successful for anonymous user', () => {
        myCoupons.verifyClaimCouponSuccessAsAnonymous(
          myCoupons.validCouponCode
        );
      });

      it('claim customer coupon that fails for anonymous user', () => {
        myCoupons.verifyClaimCouponFailedAsAnonymous(
          myCoupons.invalidCouponCode
        );
      });

      afterEach(() => {
        cy.saveLocalStorage();
      });
    });
  }
);

describe(
  `${formats.mobile.width + 1}p resolution - My coupons test for login user`,
  {
    viewportHeight: formats.mobile.width,
    viewportWidth: formats.mobile.height,
  },
  () => {
    before(() => {});

    beforeEach(() => {
      cy.window().then((win) => {
        win.sessionStorage.clear();
        win.localStorage.clear();
      });

      cy.requireLoggedIn();
      cy.reload();
      visitHomePage();
    });

    it('claim customer coupon, switch notification button and find product', () => {
      cy.selectUserMenuOption({
        option: 'My Coupons',
        isMobile: true,
      });
      myCoupons.verifyMyCoupons();
    });

    it('should list customer coupons and apply at cart', () => {
      cartCoupon.verifyOrderPlacingWithCouponAndCustomerCoupon();
    });

    it('should remove customer coupon from cart', () => {
      cartCoupon.verifyCustomerCouponRemoving();
    });
  }
);

describe(
  `${
    formats.mobile.width + 1
  }p resolution - My coupons test for pagination and sort`,
  {
    viewportHeight: formats.mobile.width,
    viewportWidth: formats.mobile.height,
  },
  () => {
    before(() => {
      cy.window().then((win) => {
        win.sessionStorage.clear();
        win.localStorage.clear();
      });

      cy.login(myCoupons.testUser, myCoupons.testPassword);
      visitHomePage();
    });

    it('should page and sort my coupon list', () => {
      cy.selectUserMenuOption({
        option: 'My Coupons',
        isMobile: true,
      });
      myCoupons.verifyPagingAndSorting();
    });
  }
);
