import {
  assertNumberOfProducts,
  clickCategoryFromHeader,
  createProductQuery,
  createProductSortQuery,
  verifyProductSearch,
} from '../../../../helpers/commons/product-search/product-search';
import {
  CATEGORY_ID,
  CATEGORY_NAMES,
  PRODUCT_LISTING,
  PRODUCT_NAMES,
  SEARCH_QUERY_ALIAS,
} from '../../../../helpers/constants/index';

context('Product search pricing flow', () => {
  before(() => {
    cy.window().then((win) => win.sessionStorage.clear());
    cy.visit('/');
  });

  describe('Product search', () => {
    it('should be able to search product and sort by price', () => {
      cy.server();

      createProductQuery(
        SEARCH_QUERY_ALIAS.FIRST_PAGE,
        `:relevance:allCategories:${CATEGORY_ID.DIGITAL_COMPACTS}`,
        PRODUCT_LISTING.PRODUCTS_PER_PAGE,
        `&currentPage=1`
      );
      createProductSortQuery('price-asc', SEARCH_QUERY_ALIAS.PRICE_ASC_FILTER);

      createProductQuery(
        SEARCH_QUERY_ALIAS.CATEGORY_PAGE,
        `:relevance:allCategories:${CATEGORY_ID.DIGITAL_COMPACTS}`,
        PRODUCT_LISTING.PRODUCTS_PER_PAGE
      );

      clickCategoryFromHeader(
        PRODUCT_NAMES.DIGITAL_CAMERAS,
        PRODUCT_NAMES.COMPACT_CAMERAS
      );

      cy.wait(`@${SEARCH_QUERY_ALIAS.CATEGORY_PAGE}`)
        .its('status')
        .should('eq', 200);

      assertNumberOfProducts(
        `@${SEARCH_QUERY_ALIAS.CATEGORY_PAGE}`,
        CATEGORY_NAMES.DIGITAL_COMPACTS
      );

      verifyProductSearch(
        SEARCH_QUERY_ALIAS.FIRST_PAGE,
        SEARCH_QUERY_ALIAS.PRICE_ASC_FILTER,
        PRODUCT_LISTING.SORTING_TYPES.BY_PRICE_ASC
      );
    });
  });
});
