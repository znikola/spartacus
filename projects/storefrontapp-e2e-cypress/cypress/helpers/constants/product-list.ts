export const PRODUCT_LISTING = {
  PRODUCTS_PER_PAGE: 10,
  SORTING_TYPES: {
    BY_TOP_RATED: 'Top Rated',
    BY_RELEVANCE: 'Relevance',
    BY_PRICE_ASC: 'Price (lowest first)',
    BY_PRICE_DESC: 'Price (highest first)',
    BY_NAME_ASC: 'Name (ascending)',
    BY_NAME_DESC: 'Name (descending)',
  },
};

export const PRODUCT_LIST_ITEM_SELECTOR =
  'cx-product-list cx-product-list-item';
export const PRODUCT_LIST_ITEM_NAME_SELECTOR =
  'cx-product-list-item .cx-product-name';
export const FIRST_PRODUCT_ITEM_SELECTOR = `${PRODUCT_LIST_ITEM_SELECTOR}:first`;
export const FIRST_PRODUCT_ITEM_PRICE_SELECTOR = `${FIRST_PRODUCT_ITEM_SELECTOR} .cx-product-price`;
export const FIRST_PRODUCT_ITEM_NAME_SELECTOR = `${FIRST_PRODUCT_ITEM_SELECTOR} a.cx-product-name`;
