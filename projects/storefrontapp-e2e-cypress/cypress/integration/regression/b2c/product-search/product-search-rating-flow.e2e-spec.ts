import {
  assertFirstProduct,
  assertNumberOfProducts,
  clearSelectedFacet,
  clickFacet,
  clickSearchIcon,
  createProductQuery,
  createProductSortQuery,
  previousPage,
  verifyProductSearch,
} from '../../../../helpers/commons/product-search/product-search';
import {
  CURRENT_PAGE_LINK_SELECTOR,
  PRODUCT_LISTING,
  PRODUCT_NAMES,
  ROUTE_SEARCH_URL_PREFIX,
  SEARCH_QUERY_ALIAS,
  TABS_HEADER_LIST,
} from '../../../../helpers/constants/index';
import { isMobile } from '../../../../sample-data/viewports';

context('Product search rating flow', () => {
  before(() => {
    cy.window().then((win) => win.sessionStorage.clear());
    cy.visit('/');
  });

  describe('Product search', () => {
    it('should be able to search and show product rating', () => {
      cy.server();

      createProductQuery(
        SEARCH_QUERY_ALIAS.FIRST_PAGE,
        PRODUCT_NAMES.DSC_N1,
        PRODUCT_LISTING.PRODUCTS_PER_PAGE,
        `&currentPage=1`
      );
      createProductQuery(
        SEARCH_QUERY_ALIAS.DSC_N1,
        PRODUCT_NAMES.DSC_N1,
        PRODUCT_LISTING.PRODUCTS_PER_PAGE
      );
      createProductSortQuery('topRated', SEARCH_QUERY_ALIAS.TOP_RATED_FILTER);

      clickSearchIcon();

      cy.get('cx-searchbox input').type(`${PRODUCT_NAMES.DSC_N1}{enter}`);

      cy.wait(`@${SEARCH_QUERY_ALIAS.DSC_N1}`).its('status').should('eq', 200);

      assertNumberOfProducts(
        `@${SEARCH_QUERY_ALIAS.DSC_N1}`,
        `"${PRODUCT_NAMES.DSC_N1}"`
      );

      verifyProductSearch(
        SEARCH_QUERY_ALIAS.FIRST_PAGE,
        SEARCH_QUERY_ALIAS.TOP_RATED_FILTER,
        PRODUCT_LISTING.SORTING_TYPES.BY_TOP_RATED
      );

      // Navigate to previous page
      previousPage();
      cy.wait(`@${SEARCH_QUERY_ALIAS.TOP_RATED_FILTER}`)
        .its('status')
        .should('eq', 200);

      // active paginated number
      cy.get(CURRENT_PAGE_LINK_SELECTOR).should('contain', `1`);

      assertFirstProduct();

      // Filter by category
      cy.route('GET', `${ROUTE_SEARCH_URL_PREFIX}?fields=*`).as('facets');
      clickFacet('Category', !isMobile);

      cy.wait(`@facets`).its('status').should('eq', 200);

      assertNumberOfProducts(`@facets`, `"${PRODUCT_NAMES.DSC_N1}"`);

      assertFirstProduct();

      clearSelectedFacet();

      cy.route('GET', `${ROUTE_SEARCH_URL_PREFIX}?fields=*`).as('facets');

      cy.wait(`@facets`).its('status').should('eq', 200);

      assertNumberOfProducts(`@facets`, `"${PRODUCT_NAMES.DSC_N1}"`);

      // Select product and read all the tabs on product details page
      cy.get('cx-product-list-item:first .cx-product-name').click();
      cy.get(TABS_HEADER_LIST).eq(0).should('contain', 'Product Details');
      cy.get(TABS_HEADER_LIST).eq(1).should('contain', 'Specs');
      cy.get(TABS_HEADER_LIST).eq(2).should('contain', 'Reviews');
      cy.get(TABS_HEADER_LIST).eq(3).should('contain', 'Shipping');
    });
  });
});
