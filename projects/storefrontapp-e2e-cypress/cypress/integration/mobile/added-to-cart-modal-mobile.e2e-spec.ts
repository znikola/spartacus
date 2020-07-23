import * as addedToCartModal from '../../helpers/added-to-cart-modal';
import { SEARCH_ICON_SELECTOR } from '../../helpers/constants/index';
import { formats } from '../../sample-data/viewports';

describe(
  `${formats.mobile.width + 1}p resolution - Added to cart modal`,
  {
    viewportHeight: formats.mobile.width,
    viewportWidth: formats.mobile.height,
  },
  () => {
    before(() => {
      cy.visit(`/product/${addedToCartModal.productId}`);
    });

    it('basic modal behavior', () => {
      addedToCartModal.verifyItemCounterOnPDP();
    });

    it('adding same product twice to cart', () => {
      addedToCartModal.addSameProductTwice();
    });

    it('adding different products to cart', () => {
      cy.get(SEARCH_ICON_SELECTOR).click();
      addedToCartModal.addDifferentProducts(true);
    });

    it('refreshing page should not show modal', () => {
      addedToCartModal.refreshPage();
    });

    it('total price is correctly estimated', () => {
      addedToCartModal.increaseProductQtyOnPDP();
    });
  }
);
