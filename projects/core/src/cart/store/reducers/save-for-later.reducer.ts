import { CartState } from '../cart-state';

export const initialState: CartState = {
  content: {},
  entries: {},
  refresh: false,
  cartMergeComplete: false,
};

export function reducer(state = initialState): CartState {
  return state;
}
