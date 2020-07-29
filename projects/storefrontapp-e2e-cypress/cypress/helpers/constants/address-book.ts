import { AddressData } from '../commons/checkout/checkout-forms';

export const ADDRESS_BOOK_LABEL = 'Address Book';

// SELECTORS
export const ADDRESS_BOOK_FORM_SELECTOR = 'cx-address-form';

/**
 * specific electronics data
 */

// ADDRESS DATA
export const NEW_ADDRESS_DATA: AddressData = {
  firstName: 'Foo',
  lastName: 'Bar',
  phone: '1234567',
  address: {
    city: 'NS',
    country: 'Canada',
    line1: 'xxx1',
    line2: 'xxx2',
    postal: '21000',
    state: 'Quebec',
  },
};

export const NEW_SECOND_ADDRESS_DATA: AddressData = {
  ...NEW_ADDRESS_DATA,
  firstName: 'N',
  lastName: 'Z',
};

export const FULL_NAME_FROM_SECOND_ADDRESS =
  NEW_SECOND_ADDRESS_DATA.firstName + ' ' + NEW_SECOND_ADDRESS_DATA.lastName;

export const EDITED_ADDRESS_DATA: AddressData = {
  ...NEW_ADDRESS_DATA,
  firstName: 'Baz',
  lastName: 'Qux',
};

export const FULL_NAME_FROM_EDITED_ADDRESS =
  EDITED_ADDRESS_DATA.firstName + ' ' + EDITED_ADDRESS_DATA.lastName;

/**
 * specific apparel data
 */
