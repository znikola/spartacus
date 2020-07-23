import {
  BREADCRUMB_TITLE_SELECTOR,
  CURRENT_PAGE_LINK_SELECTOR,
  FIRST_PRODUCT_ITEM_NAME_SELECTOR,
  FIRST_PRODUCT_ITEM_PRICE_SELECTOR,
  FIRST_PRODUCT_ITEM_SELECTOR,
  PAGINATION_SELECTOR,
  PRODUCT_LISTING,
  PRODUCT_LIST_ITEM_NAME_SELECTOR,
  PRODUCT_LIST_ITEM_SELECTOR,
  PRODUCT_NAMES,
  ROUTE_SEARCH_URL_PREFIX,
  SEARCH_ICON_SELECTOR,
  SEARCH_QUERY_ALIAS,
  SORTING_OPTION_SELECTOR,
} from '../../constants/index';

export function clickSearchIcon() {
  cy.get(SEARCH_ICON_SELECTOR).click({ force: true });
}

export function assertFirstProduct() {
  cy.get(PRODUCT_LIST_ITEM_NAME_SELECTOR)
    .first()
    .invoke('text')
    .should('match', /\w+/);
}

export function checkDistinctProductName(firstProduct: string) {
  cy.get(PRODUCT_LIST_ITEM_NAME_SELECTOR)
    .first()
    .invoke('text')
    .should('match', /\w+/)
    .should('not.be.eq', firstProduct);
}

export function verifyProductSearch(
  productAlias: string,
  sortingAlias: string,
  sortBy: string
): void {
  cy.get(PRODUCT_LIST_ITEM_NAME_SELECTOR)
    .first()
    .invoke('text')
    .should('match', /\w+/)
    .then((firstProduct) => {
      // Navigate to next page
      nextPage();
      cy.get(CURRENT_PAGE_LINK_SELECTOR).should('contain', '2');

      cy.wait(`@${productAlias}`);

      checkDistinctProductName(firstProduct);

      cy.get(SORTING_OPTION_SELECTOR).ngSelect(sortBy);

      cy.wait(`@${sortingAlias}`);

      cy.get(CURRENT_PAGE_LINK_SELECTOR).should('contain', '2');

      checkDistinctProductName(firstProduct);
    });
}

export function searchResult(searchResult: string = 'camera') {
  cy.server();
  createQuery(SEARCH_QUERY_ALIAS.CAMERA);
  cy.wait(`@${SEARCH_QUERY_ALIAS.CAMERA}`).then((xhr) => {
    const cameraResults = xhr.response.body.pagination.totalResults;

    cy.get(BREADCRUMB_TITLE_SELECTOR).should(
      'contain',
      `${cameraResults} results for "${searchResult}"`
    );
    cy.get(PRODUCT_LIST_ITEM_SELECTOR).should(
      'have.length',
      PRODUCT_LISTING.PRODUCTS_PER_PAGE
    );
    cy.get(FIRST_PRODUCT_ITEM_SELECTOR).within(() => {
      cy.get('a.cx-product-name').should('be.visible');
    });
  });
}

export function clickCategoryFromHeader(
  firstCategoryName: string = PRODUCT_NAMES.DIGITAL_CAMERAS,
  secondCategoryName: string = PRODUCT_NAMES.COMPACT_CAMERAS
) {
  cy.get('header').within(() => {
    cy.get('cx-navigation-ui')
      .contains(firstCategoryName)
      .click({ force: true });
    cy.get('.childs cx-generic-link')
      .contains(secondCategoryName)
      .click({ force: true });
  });
}

export function nextPage(): void {
  cy.get(CURRENT_PAGE_LINK_SELECTOR).next().first().click();
}

export function choosePage(pageNumber: number): void {
  cy.get(PAGINATION_SELECTOR).contains(pageNumber).first().click();
}

export function previousPage(): void {
  cy.get(CURRENT_PAGE_LINK_SELECTOR).prev().first().click();
}

export function verifyNextPage(pageNumber: number): void {
  nextPage();
  cy.get(CURRENT_PAGE_LINK_SELECTOR).should('contain', pageNumber);
}

export function verifyChoosePage(pageNumber: number): void {
  choosePage(pageNumber);
  cy.get(CURRENT_PAGE_LINK_SELECTOR).should('contain', pageNumber);
}

export function verifyPreviousPage(pageNumber: number): void {
  previousPage();
  cy.get(CURRENT_PAGE_LINK_SELECTOR).should('contain', pageNumber);
}

export function viewMode() {
  cy.get('cx-product-view button:first').click({ force: true });
  cy.get('cx-product-list cx-product-grid-item').should(
    'have.length',
    PRODUCT_LISTING.PRODUCTS_PER_PAGE
  );
}

export function filterUsingFacetFiltering(
  mobile: boolean,
  searchResult: string = 'camera'
) {
  cy.server();
  createFacetFilterQuery(SEARCH_QUERY_ALIAS.FACET);

  clickFacet('Stores', mobile);

  cy.wait(`@${SEARCH_QUERY_ALIAS.FACET}`).then((xhr) => {
    const facetResults = xhr.response.body.pagination.totalResults;
    cy.get(BREADCRUMB_TITLE_SELECTOR).should(
      'contain',
      `${facetResults} results for "${searchResult}"`
    );
  });
}

export function clearActiveFacet(searchResult: string = 'camera') {
  cy.get('cx-active-facets a:first').click();
  cy.get(BREADCRUMB_TITLE_SELECTOR).should(
    'contain',
    `results for "${searchResult}"`
  );
}

export function sortByLowestPrice() {
  createProductSortQuery('price-asc', 'query_price_asc');
  cy.get(SORTING_OPTION_SELECTOR).ngSelect('Price (lowest first)');
  cy.wait('@query_price_asc').its('status').should('eq', 200);
  cy.get(FIRST_PRODUCT_ITEM_PRICE_SELECTOR).should('contain', '$1.58');
}

export function sortByHighestPrice() {
  createProductSortQuery('price-desc', 'query_price_desc');
  cy.get(SORTING_OPTION_SELECTOR).ngSelect('Price (highest first)');
  cy.wait('@query_price_desc').its('status').should('eq', 200);
  cy.get(FIRST_PRODUCT_ITEM_PRICE_SELECTOR).should('contain', '$6,030.71');
}

export function sortByNameAscending() {
  createProductSortQuery('name-asc', 'query_name_asc');
  cy.get(SORTING_OPTION_SELECTOR).ngSelect('Name (ascending)');
  cy.wait('@query_name_asc').its('status').should('eq', 200);
  cy.get(FIRST_PRODUCT_ITEM_NAME_SELECTOR).should(
    'contain',
    '10.2 Megapixel D-SLR'
  );
}

export function sortByNameDescending() {
  createProductSortQuery('name-desc', 'query_name_desc');
  cy.get(SORTING_OPTION_SELECTOR).ngSelect('Name (descending)');
  cy.wait('@query_name_desc').its('status').should('eq', 200);
  cy.get(FIRST_PRODUCT_ITEM_NAME_SELECTOR).should(
    'contain',
    'Wide Strap for EOS 450D'
  );
}

export function sortByRelevance() {
  createProductSortQuery('relevance', 'query_relevance');
  cy.get(SORTING_OPTION_SELECTOR).ngSelect('Relevance');
  cy.wait('@query_relevance').its('status').should('eq', 200);
  cy.get(FIRST_PRODUCT_ITEM_NAME_SELECTOR).should('not.be.empty');
}

export function sortByTopRated() {
  cy.get(SORTING_OPTION_SELECTOR).ngSelect('Top Rated');
  cy.get(FIRST_PRODUCT_ITEM_NAME_SELECTOR).should('not.be.empty');
}

export function checkFirstItem(productName: string): void {
  cy.get('cx-product-list-item .cx-product-name')
    .first()
    .then((firstProductName) => {
      const clearHTMLProductName = productName.replace(/<(.|\n)*?>/g, '');
      cy.wrap(firstProductName).should('contain', clearHTMLProductName);
    });
}

export function clickFacet(header: string, mobile: boolean) {
  if (mobile) {
    cy.get('cx-product-facet-navigation button').click();
  }
  cy.get('cx-facet .heading')
    .contains(header)
    .then((el) => {
      if (el.find('.fa-plus').is(':visible')) {
        // TODO Remove force once you can scroll facets on mobile
        cy.wrap(el).click({ force: true });
      }
    });
  cy.get('cx-facet .heading')
    .contains(header)
    .parents('cx-facet')
    .within(() => {
      // TODO Remove force once you can scroll facets on mobile
      cy.get('a.value').first().click({ force: true });
    });
  if (mobile) {
    cy.get('cx-product-facet-navigation button.close').click();
  }
}

export function clearSelectedFacet() {
  cy.get('cx-product-facet-navigation cx-active-facets a').first().click();
}

function createQuery(alias: string, query: string = 'camera'): void {
  cy.route('GET', `${ROUTE_SEARCH_URL_PREFIX}?fields=*&query=${query}*`).as(
    alias
  );
}

function createFacetFilterQuery(alias: string, query: string = 'camera'): void {
  cy.route(
    'GET',
    `${ROUTE_SEARCH_URL_PREFIX}?fields=*&query=${query}:relevance:availableInStores*`
  ).as(alias);
}

export function createProductSortQuery(sort: string, alias: string): void {
  cy.route('GET', `${ROUTE_SEARCH_URL_PREFIX}?fields=*&sort=${sort}*`).as(
    alias
  );
}

export function createAllProductQuery(alias: string): void {
  cy.route('GET', `${ROUTE_SEARCH_URL_PREFIX}*`).as(alias);
}

export function createProductQuery(
  alias: string,
  queryId: string,
  pageSize: number,
  currentPage: string = ''
): void {
  cy.route(
    'GET',
    `${ROUTE_SEARCH_URL_PREFIX}?fields=*&query=${queryId}&pageSize=${pageSize}${currentPage}&lang=en&curr=USD`
  ).as(alias);
}

export function createProductFacetQuery(
  param: string,
  search: string,
  alias: string
): void {
  cy.route(
    'GET',
    `${ROUTE_SEARCH_URL_PREFIX}?fields=*&query=${search}:relevance:${param}*`
  ).as(alias);
}

export function assertNumberOfProducts(alias: string, searchResult: string) {
  cy.get(alias).then((xhr) => {
    const body = xhr.response.body;
    const paginationTotalresults: number = body.pagination.totalResults;
    const productLengthInPage: number = body.products.length;
    const firstProduct = body.products[0].name;

    cy.get(BREADCRUMB_TITLE_SELECTOR).should(
      'contain',
      `${paginationTotalresults} results for ${searchResult}`
    );

    cy.get(PRODUCT_LIST_ITEM_SELECTOR).should(
      'have.length',
      productLengthInPage
    );

    checkFirstItem(firstProduct);
  });
}
