import * as savedCart from '../../../../helpers/b2b/b2b-saved-cart';
import { viewportContext } from '../../../../helpers/viewport-context';
import * as sampleData from '../../../../sample-data/b2b-saved-cart';

context('B2B - Saved Cart', () => {
  viewportContext(['mobile', 'desktop'], () => {
    before(() => {
      cy.window().then((win) => win.sessionStorage.clear());
      cy.window().then((win) => win.localStorage.clear());
      cy.clearLocalStorageMemory();
    });

    describe('Accessibility - keyboarding', () => {
      // describe('Cart page', () => {
      //   it('should conform to tabbing order', () => {
      //     savedCart.verifyCartPageTabbingOrder();
      //   });
      // });

      describe('Quick Order Listing Page', () => {
        before(() => {
          savedCart.waitForSavedCartListingPageData(sampleData.products[0]);
          savedCart.visitSavedCartListingPage();
        });

        it('should conform to tabbing order', () => {
          savedCart.verifyListingTabbingOrder();
        });
      });

      describe('Saved Cart Details Page', () => {
        before(() => {
          savedCart.loginB2bUser();
          savedCart.waitForSavedCartDetailsPageData(sampleData.products[0]);
        });

        it('should conform to tabbing order', () => {
          savedCart.verifyDetailsTabbingOrder();
        });
      });
    });
  });
});
