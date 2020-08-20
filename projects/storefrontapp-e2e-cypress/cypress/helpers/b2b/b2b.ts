import {
  SampleCartProduct,
  SampleProduct,
} from '../../sample-data/checkout-flow';

//TODO: move to sample dafa

export const POWERTOOLS_BASESITE = 'powertools-spa';
export const POWERTOOLS_DEFAULT_DELIVERY_MODE = 'deliveryMode-standard-net';
export const poNumber = '123';
export const product: SampleProduct = {
  name: 'Cordless screwdriver 2436',
  code: '3881074',
};

export const cartWithB2bProduct: SampleCartProduct = {
  estimatedShipping: '$9.99',
  total: '$35.00',
  totalAndShipping: '$44.99',
};

export const products: SampleProduct[] = [product];
