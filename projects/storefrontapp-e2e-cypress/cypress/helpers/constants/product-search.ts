export const SEARCH_QUERY_ALIAS = {
  FIRST_PAGE: 'first_page_query',
  CATEGORY_PAGE: 'category_page_query',
  BRAND_PAGE: 'brand_page_query',
  SONY_CLEAR_FACET: 'sony_query_clear_facet',
  PRICE_ASC_FILTER: 'price_query_asc_filter',
  PRICE_DSC_FILTER: 'price_query_dsc_filter',
  NAME_ASC_FILTER: 'name_query_asc_filter',
  NAME_DSC_FILTER: 'name_query_dsc_filter',
  CATEGORY_FILTER: 'category_query_filter',
  STORE_FILTER: 'store_query_filter',
  COLOR_FILTER: 'color_query_filter',
  TOP_RATED_FILTER: 'topRated_query_filter',
  RELEVANCE_FILTER: 'relevance_query_filter',
  SONY: 'sony_query',
  DSC_N1: 'dsc_n1_query',
  CANON: 'canon_query',
  CAMERA: 'camera_query',
  FACET: 'facet_query',
  PRODUCE_CODE: 'productCode_query',
  INFINITE_SCROLL_PRODUCT_LOADED: 'productLoaded_query',
};

// route url that uses the /products/search api in cy.route
export const ROUTE_SEARCH_URL_PREFIX = `${Cypress.env(
  'OCC_PREFIX'
)}/${Cypress.env('BASE_SITE')}/products/search`;

export const SEARCH_CAMERA = 'camera';
