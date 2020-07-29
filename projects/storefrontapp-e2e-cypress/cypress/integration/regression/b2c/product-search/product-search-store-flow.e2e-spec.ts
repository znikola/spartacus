import {
  assertNumberOfProducts,
  clearSelectedFacet,
  clickFacet,
  createProductQuery,
  createProductSortQuery,
  verifyProductSearch,
} from '../../../../helpers/commons/product-search/product-search';
import {
  CATEGORY_NAMES,
  PRODUCT_LISTING,
  ROUTE_SEARCH_URL_PREFIX,
  SEARCH_QUERY_ALIAS,
} from '../../../../helpers/constants/index';
import { isMobile } from '../../../../sample-data/viewports';

context('Product search store flow', () => {
  before(() => {
    cy.window().then((win) => win.sessionStorage.clear());
    cy.visit('/');
  });

  describe('Product search', () => {
    it('should be able to search with store filtering', () => {
      cy.server();

      createProductQuery(
        SEARCH_QUERY_ALIAS.CANON,
        CATEGORY_NAMES.CANON,
        PRODUCT_LISTING.PRODUCTS_PER_PAGE
      );
      createProductQuery(
        SEARCH_QUERY_ALIAS.FIRST_PAGE,
        CATEGORY_NAMES.CANON,
        PRODUCT_LISTING.PRODUCTS_PER_PAGE,
        `&currentPage=1`
      );
      createProductSortQuery('name-desc', SEARCH_QUERY_ALIAS.NAME_DSC_FILTER);

      cy.get('cx-searchbox input').type('canon{enter}');

      cy.wait(`@${SEARCH_QUERY_ALIAS.CANON}`).its('status').should('eq', 200);

      assertNumberOfProducts(
        `@${SEARCH_QUERY_ALIAS.CANON}`,
        `"${CATEGORY_NAMES.CANON}"`
      );

      verifyProductSearch(
        SEARCH_QUERY_ALIAS.FIRST_PAGE,
        SEARCH_QUERY_ALIAS.NAME_DSC_FILTER,
        PRODUCT_LISTING.SORTING_TYPES.BY_NAME_DESC
      );
      cy.route('GET', `${ROUTE_SEARCH_URL_PREFIX}?fields=*`).as('facets');

      clickFacet('Stores', !isMobile);

      cy.wait(`@facets`).its('status').should('eq', 200);

      assertNumberOfProducts(`@facets`, `"${CATEGORY_NAMES.CANON}"`);

      clearSelectedFacet();

      cy.wait(`@facets`).its('status').should('eq', 200);

      assertNumberOfProducts(`@facets`, `"${CATEGORY_NAMES.CANON}"`);

      // Add product to cart from search listing page
      cy.get('cx-add-to-cart:first button').click({ force: true });
      cy.get('.cx-dialog-header .close').click();
      cy.get('cx-mini-cart .count').should('contain', '1');
    });
  });
});
