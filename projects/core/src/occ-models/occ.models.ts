/**
 * @interface
 * An interface representing Country.
 */
export interface Country {
  /**
   * @member {string} [isocode]
   */
  isocode?: string;
  /**
   * @member {string} [name]
   */
  name?: string;
}

/**
 * @interface
 * An interface representing Region.
 */
export interface Region {
  /**
   * @member {string} [countryIso]
   */
  countryIso?: string;
  /**
   * @member {string} [isocode]
   */
  isocode?: string;
  /**
   * @member {string} [isocodeShort]
   */
  isocodeShort?: string;
  /**
   * @member {string} [name]
   */
  name?: string;
}

/**
 * @interface
 * An interface representing Address.
 */
export interface Address {
  /**
   * @member {string} [companyName]
   */
  companyName?: string;
  /**
   * @member {Country} [country]
   */
  country?: Country;
  /**
   * @member {boolean} [defaultAddress]
   */
  defaultAddress?: boolean;
  /**
   * @member {string} [email]
   */
  email?: string;
  /**
   * @member {string} [firstName]
   */
  firstName?: string;
  /**
   * @member {string} [formattedAddress]
   */
  formattedAddress?: string;
  /**
   * @member {string} [id]
   */
  id?: string;
  /**
   * @member {string} [lastName]
   */
  lastName?: string;
  /**
   * @member {string} [line1]
   */
  line1?: string;
  /**
   * @member {string} [line2]
   */
  line2?: string;
  /**
   * @member {string} [phone]
   */
  phone?: string;
  /**
   * @member {string} [postalCode]
   */
  postalCode?: string;
  /**
   * @member {Region} [region]
   */
  region?: Region;
  /**
   * @member {boolean} [shippingAddress]
   */
  shippingAddress?: boolean;
  /**
   * @member {string} [title]
   */
  title?: string;
  /**
   * @member {string} [titleCode]
   */
  titleCode?: string;
  /**
   * @member {string} [town]
   */
  town?: string;
  /**
   * @member {boolean} [visibleInAddressBook]
   */
  visibleInAddressBook?: boolean;
}

/**
 * @interface
 * An interface representing AddressList.
 */
export interface AddressList {
  /**
   * @member {Address[]} [addresses]
   */
  addresses?: Address[];
}

/**
 * @interface
 * An interface representing ErrorModel.
 * Error message
 *
 */
export interface ErrorModel {
  /**
   * @member {string} [errorCode] Error code
   */
  errorCode?: string;
  /**
   * @member {string} [message] Descriptive, human readable error message.
   */
  message?: string;
  /**
   * @member {string} [reason] Additional classification specific for each
   * error type e.g. 'noStock'.
   */
  reason?: string;
  /**
   * @member {string} [subject] Identifier of the related object e.g. '1'.
   */
  subject?: string;
  /**
   * @member {string} [subjectType] Type of the object related to the error
   * e.g. 'entry'.
   */
  subjectType?: string;
  /**
   * @member {string} [type] Type of the error e.g. 'LowStockError'.
   */
  type?: string;
}

/**
 * @interface
 * An interface representing ErrorList.
 * List of errors
 *
 */
export interface ErrorList {
  /**
   * @member {ErrorModel[]} [errors]
   */
  errors?: ErrorModel[];
}

/**
 * @interface
 * An interface representing AddressValidation.
 */
export interface AddressValidation {
  /**
   * @member {string} [decision]
   */
  decision?: string;
  /**
   * @member {ErrorList} [errors]
   */
  errors?: ErrorList;
  /**
   * @member {Address[]} [suggestedAddresses]
   */
  suggestedAddresses?: Address[];
}

/**
 * @interface
 * An interface representing Price.
 */
export interface Price {
  /**
   * @member {string} [currencyIso]
   */
  currencyIso?: string;
  /**
   * @member {string} [formattedValue]
   */
  formattedValue?: string;
  /**
   * @member {number} [maxQuantity]
   */
  maxQuantity?: number;
  /**
   * @member {number} [minQuantity]
   */
  minQuantity?: number;
  /**
   * @member {PriceType} [priceType] Possible values include: 'BUY', 'FROM'
   */
  priceType?: PriceType;
  /**
   * @member {number} [value]
   */
  value?: number;
}

/**
 * @interface
 * An interface representing Stock.
 */
export interface Stock {
  /**
   * @member {number} [stockLevel]
   */
  stockLevel?: number;
  /**
   * @member {string} [stockLevelStatus]
   */
  stockLevelStatus?: string;
}

/**
 * @interface
 * An interface representing Image.
 */
export interface Image {
  /**
   * @member {string} [altText]
   */
  altText?: string;
  /**
   * @member {string} [format]
   */
  format?: string;
  /**
   * @member {number} [galleryIndex]
   */
  galleryIndex?: number;
  /**
   * @member {ImageType} [imageType] Possible values include: 'PRIMARY',
   * 'GALLERY'
   */
  imageType?: ImageType;
  /**
   * @member {string} [url]
   */
  url?: string;
}

/**
 * @interface
 * An interface representing VariantOptionQualifier.
 */
export interface VariantOptionQualifier {
  /**
   * @member {Image} [image]
   */
  image?: Image;
  /**
   * @member {string} [name]
   */
  name?: string;
  /**
   * @member {string} [qualifier]
   */
  qualifier?: string;
  /**
   * @member {string} [value]
   */
  value?: string;
}

/**
 * @interface
 * An interface representing VariantOption.
 */
export interface VariantOption {
  /**
   * @member {string} [code]
   */
  code?: string;
  /**
   * @member {Price} [priceData]
   */
  priceData?: Price;
  /**
   * @member {Stock} [stock]
   */
  stock?: Stock;
  /**
   * @member {string} [url]
   */
  url?: string;
  /**
   * @member {VariantOptionQualifier[]} [variantOptionQualifiers]
   */
  variantOptionQualifiers?: VariantOptionQualifier[];
}

/**
 * @interface
 * An interface representing BaseOption.
 */
export interface BaseOption {
  /**
   * @member {VariantOption[]} [options]
   */
  options?: VariantOption[];
  /**
   * @member {VariantOption} [selected]
   */
  selected?: VariantOption;
  /**
   * @member {string} [variantType]
   */
  variantType?: string;
}

/**
 * @interface
 * An interface representing Currency.
 */
export interface Currency {
  /**
   * @member {boolean} [active]
   */
  active?: boolean;
  /**
   * @member {string} [isocode]
   */
  isocode?: string;
  /**
   * @member {string} [name]
   */
  name?: string;
  /**
   * @member {string} [symbol]
   */
  symbol?: string;
}

/**
 * @interface
 * An interface representing GeoPoint.
 */
export interface GeoPoint {
  /**
   * @member {number} [latitude]
   */
  latitude?: number;
  /**
   * @member {number} [longitude]
   */
  longitude?: number;
}

/**
 * @interface
 * An interface representing Time.
 */
export interface Time {
  /**
   * @member {string} [formattedHour]
   */
  formattedHour?: string;
  /**
   * @member {Uint8Array} [hour]
   */
  hour?: Uint8Array;
  /**
   * @member {Uint8Array} [minute]
   */
  minute?: Uint8Array;
}

/**
 * @interface
 * An interface representing SpecialOpeningDay.
 */
export interface SpecialOpeningDay {
  /**
   * @member {boolean} [closed]
   */
  closed?: boolean;
  /**
   * @member {Time} [closingTime]
   */
  closingTime?: Time;
  /**
   * @member {string} [comment]
   */
  comment?: string;
  /**
   * @member {Date} [date]
   */
  date?: Date;
  /**
   * @member {string} [formattedDate]
   */
  formattedDate?: string;
  /**
   * @member {string} [name]
   */
  name?: string;
  /**
   * @member {Time} [openingTime]
   */
  openingTime?: Time;
}

/**
 * @interface
 * An interface representing WeekdayOpeningDay.
 */
export interface WeekdayOpeningDay {
  /**
   * @member {boolean} [closed]
   */
  closed?: boolean;
  /**
   * @member {Time} [closingTime]
   */
  closingTime?: Time;
  /**
   * @member {Time} [openingTime]
   */
  openingTime?: Time;
  /**
   * @member {string} [weekDay]
   */
  weekDay?: string;
}

/**
 * @interface
 * An interface representing OpeningSchedule.
 */
export interface OpeningSchedule {
  /**
   * @member {string} [code]
   */
  code?: string;
  /**
   * @member {string} [name]
   */
  name?: string;
  /**
   * @member {SpecialOpeningDay[]} [specialDayOpeningList]
   */
  specialDayOpeningList?: SpecialOpeningDay[];
  /**
   * @member {WeekdayOpeningDay[]} [weekDayOpeningList]
   */
  weekDayOpeningList?: WeekdayOpeningDay[];
}

/**
 * @interface
 * An interface representing PointOfService.
 */
export interface PointOfService {
  /**
   * @member {Address} [address]
   */
  address?: Address;
  /**
   * @member {string} [description]
   */
  description?: string;
  /**
   * @member {string} [displayName]
   */
  displayName?: string;
  /**
   * @member {number} [distanceKm]
   */
  distanceKm?: number;
  /**
   * @member {{ [propertyName: string]: string }} [features]
   */
  features?: { [propertyName: string]: string };
  /**
   * @member {string} [formattedDistance]
   */
  formattedDistance?: string;
  /**
   * @member {GeoPoint} [geoPoint]
   */
  geoPoint?: GeoPoint;
  /**
   * @member {Image} [mapIcon]
   */
  mapIcon?: Image;
  /**
   * @member {string} [name]
   */
  name?: string;
  /**
   * @member {OpeningSchedule} [openingHours]
   */
  openingHours?: OpeningSchedule;
  /**
   * @member {string} [storeContent]
   */
  storeContent?: string;
  /**
   * @member {Image[]} [storeImages]
   */
  storeImages?: Image[];
  /**
   * @member {string} [url]
   */
  url?: string;
}

/**
 * @interface
 * An interface representing Language.
 */
export interface Language {
  /**
   * @member {boolean} [active]
   */
  active?: boolean;
  /**
   * @member {string} [isocode]
   */
  isocode?: string;
  /**
   * @member {string} [name]
   */
  name?: string;
  /**
   * @member {string} [nativeName]
   */
  nativeName?: string;
}

/**
 * @interface
 * An interface representing DeliveryMode.
 */
export interface DeliveryMode {
  /**
   * @member {string} [code]
   */
  code?: string;
  /**
   * @member {Price} [deliveryCost]
   */
  deliveryCost?: Price;
  /**
   * @member {string} [description]
   */
  description?: string;
  /**
   * @member {string} [name]
   */
  name?: string;
}

/**
 * @interface
 * An interface representing DeliveryModeList.
 */
export interface DeliveryModeList {
  /**
   * @member {DeliveryMode[]} [deliveryModes]
   */
  deliveryModes?: DeliveryMode[];
}

/**
 * @interface
 * An interface representing BaseStore.
 */
export interface BaseStore {
  /**
   * @member {string} [createReturnProcessCode]
   */
  createReturnProcessCode?: string;
  /**
   * @member {Currency[]} [currencies]
   */
  currencies?: Currency[];
  /**
   * @member {Currency} [defaultCurrency]
   */
  defaultCurrency?: Currency;
  /**
   * @member {PointOfService} [defaultDeliveryOrigin]
   */
  defaultDeliveryOrigin?: PointOfService;
  /**
   * @member {Language} [defaultLanguage]
   */
  defaultLanguage?: Language;
  /**
   * @member {Country[]} [deliveryCountries]
   */
  deliveryCountries?: Country[];
  /**
   * @member {DeliveryModeList} [deliveryModes]
   */
  deliveryModes?: DeliveryModeList;
  /**
   * @member {boolean} [externalTaxEnabled]
   */
  externalTaxEnabled?: boolean;
  /**
   * @member {Language[]} [languages]
   */
  languages?: Language[];
  /**
   * @member {number} [maxRadiusForPosSearch]
   */
  maxRadiusForPosSearch?: number;
  /**
   * @member {string} [name]
   */
  name?: string;
  /**
   * @member {string} [paymentProvider]
   */
  paymentProvider?: string;
  /**
   * @member {PointOfService[]} [pointsOfService]
   */
  pointsOfService?: PointOfService[];
  /**
   * @member {string} [submitOrderProcessCode]
   */
  submitOrderProcessCode?: string;
}

/**
 * @interface
 * An interface representing SearchQuery.
 */
export interface SearchQuery {
  /**
   * @member {string} [value]
   */
  value?: string;
}

/**
 * @interface
 * An interface representing SearchState.
 */
export interface SearchState {
  /**
   * @member {SearchQuery} [query]
   */
  query?: SearchQuery;
  /**
   * @member {string} [url]
   */
  url?: string;
}

/**
 * @interface
 * An interface representing Breadcrumb.
 */
export interface Breadcrumb {
  /**
   * @member {string} [facetCode]
   */
  facetCode?: string;
  /**
   * @member {string} [facetName]
   */
  facetName?: string;
  /**
   * @member {string} [facetValueCode]
   */
  facetValueCode?: string;
  /**
   * @member {string} [facetValueName]
   */
  facetValueName?: string;
  /**
   * @member {SearchState} [removeQuery]
   */
  removeQuery?: SearchState;
  /**
   * @member {SearchState} [truncateQuery]
   */
  truncateQuery?: SearchState;
}

/**
 * @interface
 * An interface representing Component.
 */
export interface Component {
  /**
   * @member {Date} [modifiedtime]
   */
  modifiedtime?: Date;
  /**
   * @member {string} [name]
   */
  name?: string;
  /**
   * @member {any} [otherProperties]
   */
  otherProperties?: any;
  /**
   * @member {string} [typeCode]
   */
  typeCode?: string;
  /**
   * @member {string} [uid]
   */
  uid?: string;
}

/**
 * @interface
 * An interface representing ComponentList.
 */
export interface ComponentList {
  /**
   * @member {Component[]} [component]
   */
  component?: Component[];
}

/**
 * @interface
 * An interface representing ContentSlot.
 */
export interface ContentSlot {
  /**
   * @member {ComponentList} [components]
   */
  components?: ComponentList;
  /**
   * @member {string} [name]
   */
  name?: string;
  /**
   * @member {string} [position]
   */
  position?: string;
  /**
   * @member {string} [slotId]
   */
  slotId?: string;
  /**
   * @member {boolean} [slotShared]
   */
  slotShared?: boolean;
  /**
   * @member {string} [slotStatus]
   */
  slotStatus?: string;
}

/**
 * @interface
 * An interface representing ContentSlotList.
 */
export interface ContentSlotList {
  /**
   * @member {ContentSlot[]} [contentSlot]
   */
  contentSlot?: ContentSlot[];
}

/**
 * @interface
 * An interface representing CMSPage.
 */
export interface CMSPage {
  /**
   * @member {ContentSlotList} [contentSlots]
   */
  contentSlots?: ContentSlotList;
  /**
   * @member {boolean} [defaultPage]
   */
  defaultPage?: boolean;
  /**
   * @member {string} [name]
   */
  name?: string;
  /**
   * @member {string} [template]
   */
  template?: string;
  /**
   * @member {string} [title]
   */
  title?: string;
  /**
   * @member {string} [typeCode]
   */
  typeCode?: string;
  /**
   * @member {string} [uid]
   */
  uid?: string;
}

/**
 * @interface
 * An interface representing CardType.
 */
export interface CardType {
  /**
   * @member {string} [code]
   */
  code?: string;
  /**
   * @member {string} [name]
   */
  name?: string;
}

/**
 * @interface
 * An interface representing CardTypeList.
 */
export interface CardTypeList {
  /**
   * @member {CardType[]} [cardTypes]
   */
  cardTypes?: CardType[];
}

/**
 * @interface
 * An interface representing PromotionOrderEntryConsumed.
 */
export interface PromotionOrderEntryConsumed {
  /**
   * @member {number} [adjustedUnitPrice]
   */
  adjustedUnitPrice?: number;
  /**
   * @member {string} [code]
   */
  code?: string;
  /**
   * @member {number} [orderEntryNumber]
   */
  orderEntryNumber?: number;
  /**
   * @member {number} [quantity]
   */
  quantity?: number;
}

/**
 * @interface
 * An interface representing PromotionRestriction.
 */
export interface PromotionRestriction {
  /**
   * @member {string} [description]
   */
  description?: string;
  /**
   * @member {string} [restrictionType]
   */
  restrictionType?: string;
}

/**
 * @interface
 * An interface representing Promotion.
 */
export interface Promotion {
  /**
   * @member {string} [code]
   */
  code?: string;
  /**
   * @member {string[]} [couldFireMessages]
   */
  couldFireMessages?: string[];
  /**
   * @member {string} [description]
   */
  description?: string;
  /**
   * @member {boolean} [enabled]
   */
  enabled?: boolean;
  /**
   * @member {Date} [endDate]
   */
  endDate?: Date;
  /**
   * @member {string[]} [firedMessages]
   */
  firedMessages?: string[];
  /**
   * @member {number} [priority]
   */
  priority?: number;
  /**
   * @member {Image} [productBanner]
   */
  productBanner?: Image;
  /**
   * @member {string} [promotionGroup]
   */
  promotionGroup?: string;
  /**
   * @member {string} [promotionType]
   */
  promotionType?: string;
  /**
   * @member {PromotionRestriction[]} [restrictions]
   */
  restrictions?: PromotionRestriction[];
  /**
   * @member {Date} [startDate]
   */
  startDate?: Date;
  /**
   * @member {string} [title]
   */
  title?: string;
}

/**
 * @interface
 * An interface representing PromotionResult.
 */
export interface PromotionResult {
  /**
   * @member {PromotionOrderEntryConsumed[]} [consumedEntries]
   */
  consumedEntries?: PromotionOrderEntryConsumed[];
  /**
   * @member {string} [description]
   */
  description?: string;
  /**
   * @member {Promotion} [promotion]
   */
  promotion?: Promotion;
}

/**
 * @interface
 * An interface representing Voucher.
 */
export interface Voucher {
  /**
   * @member {Price} [appliedValue]
   */
  appliedValue?: Price;
  /**
   * @member {string} [code]
   */
  code?: string;
  /**
   * @member {Currency} [currency]
   */
  currency?: Currency;
  /**
   * @member {string} [description]
   */
  description?: string;
  /**
   * @member {boolean} [freeShipping]
   */
  freeShipping?: boolean;
  /**
   * @member {string} [name]
   */
  name?: string;
  /**
   * @member {number} [value]
   */
  value?: number;
  /**
   * @member {string} [valueFormatted]
   */
  valueFormatted?: string;
  /**
   * @member {string} [valueString]
   */
  valueString?: string;
  /**
   * @member {string} [voucherCode]
   */
  voucherCode?: string;
}

/**
 * @interface
 * An interface representing ConfigurationInfo.
 */
export interface ConfigurationInfo {
  /**
   * @member {string} [configurationLabel]
   */
  configurationLabel?: string;
  /**
   * @member {string} [configurationValue]
   */
  configurationValue?: string;
  /**
   * @member {string} [configuratorType]
   */
  configuratorType?: string;
  /**
   * @member {string} [status]
   */
  status?: string;
}

/**
 * @interface
 * An interface representing Category.
 */
export interface Category {
  /**
   * @member {string} [code]
   */
  code?: string;
  /**
   * @member {Image} [image]
   */
  image?: Image;
  /**
   * @member {string} [url]
   */
  url?: string;
}

/**
 * @interface
 * An interface representing FeatureUnit.
 */
export interface FeatureUnit {
  /**
   * @member {string} [name]
   */
  name?: string;
  /**
   * @member {string} [symbol]
   */
  symbol?: string;
  /**
   * @member {string} [unitType]
   */
  unitType?: string;
}

/**
 * @interface
 * An interface representing FeatureValue.
 */
export interface FeatureValue {
  /**
   * @member {string} [value]
   */
  value?: string;
}

/**
 * @interface
 * An interface representing Feature.
 */
export interface Feature {
  /**
   * @member {string} [code]
   */
  code?: string;
  /**
   * @member {boolean} [comparable]
   */
  comparable?: boolean;
  /**
   * @member {string} [description]
   */
  description?: string;
  /**
   * @member {FeatureUnit} [featureUnit]
   */
  featureUnit?: FeatureUnit;
  /**
   * @member {FeatureValue[]} [featureValues]
   */
  featureValues?: FeatureValue[];
  /**
   * @member {string} [name]
   */
  name?: string;
  /**
   * @member {boolean} [range]
   */
  range?: boolean;
  /**
   * @member {string} [type]
   */
  type?: string;
}

/**
 * @interface
 * An interface representing Classification.
 */
export interface Classification {
  /**
   * @member {string} [code]
   */
  code?: string;
  /**
   * @member {Feature[]} [features]
   */
  features?: Feature[];
  /**
   * @member {string} [name]
   */
  name?: string;
}

/**
 * @interface
 * An interface representing FutureStock.
 */
export interface FutureStock {
  /**
   * @member {Date} [date]
   */
  date?: Date;
  /**
   * @member {string} [formattedDate]
   */
  formattedDate?: string;
  /**
   * @member {Stock} [stock]
   */
  stock?: Stock;
}

/**
 * @interface
 * An interface representing PriceRange.
 */
export interface PriceRange {
  /**
   * @member {Price} [maxPrice]
   */
  maxPrice?: Price;
  /**
   * @member {Price} [minPrice]
   */
  minPrice?: Price;
}

/**
 * @interface
 * An interface representing ProductReference.
 */
export interface ProductReference {
  /**
   * @member {string} [description]
   */
  description?: string;
  /**
   * @member {boolean} [preselected]
   */
  preselected?: boolean;
  /**
   * @member {number} [quantity]
   */
  quantity?: number;
  /**
   * @member {string} [referenceType]
   */
  referenceType?: string;
  /**
   * @member {Product} [target]
   */
  target?: Product;
}

/**
 * @interface
 * An interface representing User.
 */
export interface User {
  /**
   * @member {Currency} [currency]
   */
  currency?: Currency;
  /**
   * @member {string} [customerId]
   */
  customerId?: string;
  /**
   * @member {Date} [deactivationDate]
   */
  deactivationDate?: Date;
  /**
   * @member {Address} [defaultAddress]
   */
  defaultAddress?: Address;
  /**
   * @member {string} [displayUid]
   */
  displayUid?: string;
  /**
   * @member {string} [firstName]
   */
  firstName?: string;
  /**
   * @member {Language} [language]
   */
  language?: Language;
  /**
   * @member {string} [lastName]
   */
  lastName?: string;
  /**
   * @member {string} [name]
   */
  name?: string;
  /**
   * @member {string} [title]
   */
  title?: string;
  /**
   * @member {string} [titleCode]
   */
  titleCode?: string;
  /**
   * @member {string} [uid]
   */
  uid?: string;
}

/**
 * @interface
 * An interface representing Review.
 */
export interface Review {
  /**
   * @member {string} [alias]
   */
  alias?: string;
  /**
   * @member {string} [comment]
   */
  comment?: string;
  /**
   * @member {Date} [date]
   */
  date?: Date;
  /**
   * @member {string} [headline]
   */
  headline?: string;
  /**
   * @member {string} [id]
   */
  id?: string;
  /**
   * @member {User} [principal]
   */
  principal?: User;
  /**
   * @member {number} [rating]
   */
  rating?: number;
}

/**
 * @interface
 * An interface representing VariantCategory.
 */
export interface VariantCategory {
  /**
   * @member {boolean} [hasImage]
   */
  hasImage?: boolean;
  /**
   * @member {string} [name]
   */
  name?: string;
  /**
   * @member {number} [priority]
   */
  priority?: number;
}

/**
 * @interface
 * An interface representing VariantValueCategory.
 */
export interface VariantValueCategory {
  /**
   * @member {string} [name]
   */
  name?: string;
  /**
   * @member {number} [sequence]
   */
  sequence?: number;
  /**
   * @member {VariantCategory[]} [superCategories]
   */
  superCategories?: VariantCategory[];
}

/**
 * @interface
 * An interface representing VariantMatrixElement.
 */
export interface VariantMatrixElement {
  /**
   * @member {VariantMatrixElement[]} [elements]
   */
  elements?: VariantMatrixElement[];
  /**
   * @member {boolean} [isLeaf]
   */
  isLeaf?: boolean;
  /**
   * @member {VariantCategory} [parentVariantCategory]
   */
  parentVariantCategory?: VariantCategory;
  /**
   * @member {VariantOption} [variantOption]
   */
  variantOption?: VariantOption;
  /**
   * @member {VariantValueCategory} [variantValueCategory]
   */
  variantValueCategory?: VariantValueCategory;
}

/**
 * @interface
 * An interface representing Product.
 */
export interface Product {
  /**
   * @member {boolean} [availableForPickup]
   */
  availableForPickup?: boolean;
  /**
   * @member {number} [averageRating]
   */
  averageRating?: number;
  /**
   * @member {BaseOption[]} [baseOptions]
   */
  baseOptions?: BaseOption[];
  /**
   * @member {string} [baseProduct]
   */
  baseProduct?: string;
  /**
   * @member {Category[]} [categories]
   */
  categories?: Category[];
  /**
   * @member {Classification[]} [classifications]
   */
  classifications?: Classification[];
  /**
   * @member {string} [code]
   */
  code?: string;
  /**
   * @member {boolean} [configurable]
   */
  configurable?: boolean;
  /**
   * @member {string} [configuratorType]
   */
  configuratorType?: string;
  /**
   * @member {string} [description]
   */
  description?: string;
  /**
   * @member {FutureStock[]} [futureStocks]
   */
  futureStocks?: FutureStock[];
  /**
   * @member {Image[]} [images]
   */
  images?: Image[];
  /**
   * @member {string} [manufacturer]
   */
  manufacturer?: string;
  /**
   * @member {boolean} [multidimensional]
   */
  multidimensional?: boolean;
  /**
   * @member {string} [name]
   */
  name?: string;
  /**
   * @member {number} [numberOfReviews]
   */
  numberOfReviews?: number;
  /**
   * @member {Promotion[]} [potentialPromotions]
   */
  potentialPromotions?: Promotion[];
  /**
   * @member {Price} [price]
   */
  price?: Price;
  /**
   * @member {PriceRange} [priceRange]
   */
  priceRange?: PriceRange;
  /**
   * @member {ProductReference[]} [productReferences]
   */
  productReferences?: ProductReference[];
  /**
   * @member {boolean} [purchasable]
   */
  purchasable?: boolean;
  /**
   * @member {Review[]} [reviews]
   */
  reviews?: Review[];
  /**
   * @member {Stock} [stock]
   */
  stock?: Stock;
  /**
   * @member {string} [summary]
   */
  summary?: string;
  /**
   * @member {string[]} [tags]
   */
  tags?: string[];
  /**
   * @member {string} [url]
   */
  url?: string;
  /**
   * @member {VariantMatrixElement[]} [variantMatrix]
   */
  variantMatrix?: VariantMatrixElement[];
  /**
   * @member {VariantOption[]} [variantOptions]
   */
  variantOptions?: VariantOption[];
  /**
   * @member {string} [variantType]
   */
  variantType?: string;
  /**
   * @member {Price[]} [volumePrices]
   */
  volumePrices?: Price[];
  /**
   * @member {boolean} [volumePricesFlag]
   */
  volumePricesFlag?: boolean;
}

/**
 * @interface
 * An interface representing OrderEntry.
 */
export interface OrderEntry {
  /**
   * @member {Price} [basePrice]
   */
  basePrice?: Price;
  /**
   * @member {ConfigurationInfo[]} [configurationInfos]
   */
  configurationInfos?: ConfigurationInfo[];
  /**
   * @member {DeliveryMode} [deliveryMode]
   */
  deliveryMode?: DeliveryMode;
  /**
   * @member {PointOfService} [deliveryPointOfService]
   */
  deliveryPointOfService?: PointOfService;
  /**
   * @member {number} [entryNumber]
   */
  entryNumber?: number;
  /**
   * @member {Product} [product]
   */
  product?: Product;
  /**
   * @member {number} [quantity]
   */
  quantity?: number;
  /**
   * @member {Price} [totalPrice]
   */
  totalPrice?: Price;
  /**
   * @member {boolean} [updateable]
   */
  updateable?: boolean;
}

/**
 * @interface
 * An interface representing DeliveryOrderEntryGroup.
 */
export interface DeliveryOrderEntryGroup {
  /**
   * @member {Address} [deliveryAddress]
   */
  deliveryAddress?: Address;
  /**
   * @member {OrderEntry[]} [entries]
   */
  entries?: OrderEntry[];
  /**
   * @member {number} [quantity]
   */
  quantity?: number;
  /**
   * @member {Price} [totalPriceWithTax]
   */
  totalPriceWithTax?: Price;
}

/**
 * @interface
 * An interface representing PaymentDetails.
 */
export interface PaymentDetails {
  /**
   * @member {string} [accountHolderName]
   */
  accountHolderName?: string;
  /**
   * @member {Address} [billingAddress]
   */
  billingAddress?: Address;
  /**
   * @member {string} [cardNumber]
   */
  cardNumber?: string;
  /**
   * @member {CardType} [cardType]
   */
  cardType?: CardType;
  /**
   * @member {boolean} [defaultPayment]
   */
  defaultPayment?: boolean;
  /**
   * @member {string} [expiryMonth]
   */
  expiryMonth?: string;
  /**
   * @member {string} [expiryYear]
   */
  expiryYear?: string;
  /**
   * @member {string} [id]
   */
  id?: string;
  /**
   * @member {string} [issueNumber]
   */
  issueNumber?: string;
  /**
   * @member {boolean} [saved]
   */
  saved?: boolean;
  /**
   * @member {string} [startMonth]
   */
  startMonth?: string;
  /**
   * @member {string} [startYear]
   */
  startYear?: string;
  /**
   * @member {string} [subscriptionId]
   */
  subscriptionId?: string;
}

/**
 * @interface
 * An interface representing PickupOrderEntryGroup.
 */
export interface PickupOrderEntryGroup {
  /**
   * @member {PointOfService} [deliveryPointOfService]
   */
  deliveryPointOfService?: PointOfService;
  /**
   * @member {number} [distance]
   */
  distance?: number;
  /**
   * @member {OrderEntry[]} [entries]
   */
  entries?: OrderEntry[];
  /**
   * @member {number} [quantity]
   */
  quantity?: number;
  /**
   * @member {Price} [totalPriceWithTax]
   */
  totalPriceWithTax?: Price;
}

/**
 * @interface
 * An interface representing Principal.
 */
export interface Principal {
  /**
   * @member {string} [name]
   */
  name?: string;
  /**
   * @member {string} [uid]
   */
  uid?: string;
}

/**
 * @interface
 * An interface representing Cart.
 */
export interface Cart {
  /**
   * @member {PromotionResult[]} [appliedOrderPromotions]
   */
  appliedOrderPromotions?: PromotionResult[];
  /**
   * @member {PromotionResult[]} [appliedProductPromotions]
   */
  appliedProductPromotions?: PromotionResult[];
  /**
   * @member {Voucher[]} [appliedVouchers]
   */
  appliedVouchers?: Voucher[];
  /**
   * @member {boolean} [calculated]
   */
  calculated?: boolean;
  /**
   * @member {string} [code]
   */
  code?: string;
  /**
   * @member {Address} [deliveryAddress]
   */
  deliveryAddress?: Address;
  /**
   * @member {Price} [deliveryCost]
   */
  deliveryCost?: Price;
  /**
   * @member {number} [deliveryItemsQuantity]
   */
  deliveryItemsQuantity?: number;
  /**
   * @member {DeliveryMode} [deliveryMode]
   */
  deliveryMode?: DeliveryMode;
  /**
   * @member {DeliveryOrderEntryGroup[]} [deliveryOrderGroups]
   */
  deliveryOrderGroups?: DeliveryOrderEntryGroup[];
  /**
   * @member {string} [description]
   */
  description?: string;
  /**
   * @member {OrderEntry[]} [entries]
   */
  entries?: OrderEntry[];
  /**
   * @member {Date} [expirationTime]
   */
  expirationTime?: Date;
  /**
   * @member {string} [guid]
   */
  guid?: string;
  /**
   * @member {string} [name]
   */
  name?: string;
  /**
   * @member {boolean} [net]
   */
  net?: boolean;
  /**
   * @member {Price} [orderDiscounts]
   */
  orderDiscounts?: Price;
  /**
   * @member {PaymentDetails} [paymentInfo]
   */
  paymentInfo?: PaymentDetails;
  /**
   * @member {number} [pickupItemsQuantity]
   */
  pickupItemsQuantity?: number;
  /**
   * @member {PickupOrderEntryGroup[]} [pickupOrderGroups]
   */
  pickupOrderGroups?: PickupOrderEntryGroup[];
  /**
   * @member {PromotionResult[]} [potentialOrderPromotions]
   */
  potentialOrderPromotions?: PromotionResult[];
  /**
   * @member {PromotionResult[]} [potentialProductPromotions]
   */
  potentialProductPromotions?: PromotionResult[];
  /**
   * @member {Price} [productDiscounts]
   */
  productDiscounts?: Price;
  /**
   * @member {Date} [saveTime]
   */
  saveTime?: Date;
  /**
   * @member {Principal} [savedBy]
   */
  savedBy?: Principal;
  /**
   * @member {string} [site]
   */
  site?: string;
  /**
   * @member {string} [store]
   */
  store?: string;
  /**
   * @member {Price} [subTotal]
   */
  subTotal?: Price;
  /**
   * @member {Price} [totalDiscounts]
   */
  totalDiscounts?: Price;
  /**
   * @member {number} [totalItems]
   */
  totalItems?: number;
  /**
   * @member {Price} [totalPrice]
   */
  totalPrice?: Price;
  /**
   * @member {Price} [totalPriceWithTax]
   */
  totalPriceWithTax?: Price;
  /**
   * @member {Price} [totalTax]
   */
  totalTax?: Price;
  /**
   * @member {number} [totalUnitCount]
   */
  totalUnitCount?: number;
  /**
   * @member {Principal} [user]
   */
  user?: Principal;
}

/**
 * @interface
 * An interface representing CartList.
 */
export interface CartList {
  /**
   * @member {Cart[]} [carts]
   */
  carts?: Cart[];
}

/**
 * @interface
 * An interface representing CartModification.
 */
export interface CartModification {
  /**
   * @member {boolean} [deliveryModeChanged]
   */
  deliveryModeChanged?: boolean;
  /**
   * @member {OrderEntry} [entry]
   */
  entry?: OrderEntry;
  /**
   * @member {number} [quantity]
   */
  quantity?: number;
  /**
   * @member {number} [quantityAdded]
   */
  quantityAdded?: number;
  /**
   * @member {string} [statusCode]
   */
  statusCode?: string;
  /**
   * @member {string} [statusMessage]
   */
  statusMessage?: string;
}

/**
 * @interface
 * An interface representing CartModificationList.
 */
export interface CartModificationList {
  /**
   * @member {CartModification[]} [cartModifications]
   */
  cartModifications?: CartModification[];
}

/**
 * @interface
 * An interface representing CategoryHierarchy.
 */
export interface CategoryHierarchy {
  /**
   * @member {string} [id]
   */
  id?: string;
  /**
   * @member {Date} [lastModified]
   */
  lastModified?: Date;
  /**
   * @member {string} [name]
   */
  name?: string;
  /**
   * @member {CategoryHierarchy[]} [subcategories]
   */
  subcategories?: CategoryHierarchy[];
  /**
   * @member {string} [url]
   */
  url?: string;
}

/**
 * @interface
 * An interface representing CatalogVersion.
 */
export interface CatalogVersion {
  /**
   * @member {CategoryHierarchy[]} [categories]
   */
  categories?: CategoryHierarchy[];
  /**
   * @member {string} [id]
   */
  id?: string;
  /**
   * @member {Date} [lastModified]
   */
  lastModified?: Date;
  /**
   * @member {string} [name]
   */
  name?: string;
  /**
   * @member {string} [url]
   */
  url?: string;
}

/**
 * @interface
 * An interface representing Catalog.
 */
export interface Catalog {
  /**
   * @member {CatalogVersion[]} [catalogVersions]
   */
  catalogVersions?: CatalogVersion[];
  /**
   * @member {string} [id]
   */
  id?: string;
  /**
   * @member {Date} [lastModified]
   */
  lastModified?: Date;
  /**
   * @member {string} [name]
   */
  name?: string;
  /**
   * @member {string} [url]
   */
  url?: string;
}

/**
 * @interface
 * An interface representing CatalogList.
 */
export interface CatalogList {
  /**
   * @member {Catalog[]} [catalogs]
   */
  catalogs?: Catalog[];
}

/**
 * @interface
 * An interface representing ComponentIDList.
 */
export interface ComponentIDList {
  /**
   * @member {string[]} [idList]
   */
  idList?: string[];
}

/**
 * @interface
 * An interface representing Consent.
 */
export interface Consent {
  /**
   * @member {string} [code]
   */
  code?: string;
  /**
   * @member {Date} [consentGivenDate]
   */
  consentGivenDate?: Date;
  /**
   * @member {Date} [consentWithdrawnDate]
   */
  consentWithdrawnDate?: Date;
}

/**
 * @interface
 * An interface representing ConsentTemplate.
 */
export interface ConsentTemplate {
  /**
   * @member {Consent} [currentConsent]
   */
  currentConsent?: Consent;
  /**
   * @member {string} [description]
   */
  description?: string;
  /**
   * @member {string} [id]
   */
  id?: string;
  /**
   * @member {string} [name]
   */
  name?: string;
  /**
   * @member {number} [version]
   */
  version?: number;
}

/**
 * @interface
 * An interface representing ConsentTemplateList.
 */
export interface ConsentTemplateList {
  /**
   * @member {ConsentTemplate[]} [consentTemplates]
   */
  consentTemplates?: ConsentTemplate[];
}

/**
 * @interface
 * An interface representing ConsignmentEntry.
 */
export interface ConsignmentEntry {
  /**
   * @member {OrderEntry} [orderEntry]
   */
  orderEntry?: OrderEntry;
  /**
   * @member {number} [quantity]
   */
  quantity?: number;
  /**
   * @member {number} [shippedQuantity]
   */
  shippedQuantity?: number;
}

/**
 * @interface
 * An interface representing Consignment.
 */
export interface Consignment {
  /**
   * @member {string} [code]
   */
  code?: string;
  /**
   * @member {PointOfService} [deliveryPointOfService]
   */
  deliveryPointOfService?: PointOfService;
  /**
   * @member {ConsignmentEntry[]} [entries]
   */
  entries?: ConsignmentEntry[];
  /**
   * @member {Address} [shippingAddress]
   */
  shippingAddress?: Address;
  /**
   * @member {string} [status]
   */
  status?: string;
  /**
   * @member {Date} [statusDate]
   */
  statusDate?: Date;
  /**
   * @member {string} [trackingID]
   */
  trackingID?: string;
}

/**
 * @interface
 * An interface representing CountryList.
 */
export interface CountryList {
  /**
   * @member {Country[]} [countries]
   */
  countries?: Country[];
}

/**
 * @interface
 * An interface representing CurrencyList.
 */
export interface CurrencyList {
  /**
   * @member {Currency[]} [currencies]
   */
  currencies?: Currency[];
}

/**
 * @interface
 * An interface representing FacetValue.
 */
export interface FacetValue {
  /**
   * @member {number} [count]
   */
  count?: number;
  /**
   * @member {string} [name]
   */
  name?: string;
  /**
   * @member {SearchState} [query]
   */
  query?: SearchState;
  /**
   * @member {boolean} [selected]
   */
  selected?: boolean;
}

/**
 * @interface
 * An interface representing Facet.
 */
export interface Facet {
  /**
   * @member {boolean} [category]
   */
  category?: boolean;
  /**
   * @member {boolean} [multiSelect]
   */
  multiSelect?: boolean;
  /**
   * @member {string} [name]
   */
  name?: string;
  /**
   * @member {number} [priority]
   */
  priority?: number;
  /**
   * @member {FacetValue[]} [topValues]
   */
  topValues?: FacetValue[];
  /**
   * @member {FacetValue[]} [values]
   */
  values?: FacetValue[];
  /**
   * @member {boolean} [visible]
   */
  visible?: boolean;
}

/**
 * @interface
 * An interface representing LanguageList.
 */
export interface LanguageList {
  /**
   * @member {Language[]} [languages]
   */
  languages?: Language[];
}

/**
 * @interface
 * An interface representing Pagination.
 * Pagination info
 *
 */
export interface Pagination {
  /**
   * @member {number} [count] Number of elements on this page
   */
  count?: number;
  /**
   * @member {boolean} [hasNext] Indicates if there is next page
   */
  hasNext?: boolean;
  /**
   * @member {boolean} [hasPrevious] Indicates if there is previous page
   */
  hasPrevious?: boolean;
  /**
   * @member {number} [page] Current page number
   */
  page?: number;
  /**
   * @member {number} [totalCount] Total number of elements
   */
  totalCount?: number;
  /**
   * @member {number} [totalPages] Total number of pages
   */
  totalPages?: number;
}

/**
 * @interface
 * An interface representing Sort.
 * Sort option
 *
 */
export interface Sort {
  /**
   * @member {boolean} [asc]
   */
  asc?: boolean;
  /**
   * @member {string} [code]
   */
  code?: string;
}

/**
 * @interface
 * An interface representing ListAdaptedComponents.
 */
export interface ListAdaptedComponents {
  /**
   * @member {any[]} [components]
   */
  components?: any[];
  /**
   * @member {Pagination} [pagination]
   */
  pagination?: Pagination;
  /**
   * @member {Sort[]} [sorts]
   */
  sorts?: Sort[];
}

/**
 * @interface
 * An interface representing MemberList.
 */
export interface MemberList {
  /**
   * @member {Principal[]} [members]
   */
  members?: Principal[];
}

/**
 * @interface
 * An interface representing OrderEntryList.
 */
export interface OrderEntryList {
  /**
   * @member {OrderEntry[]} [orderEntries]
   */
  orderEntries?: OrderEntry[];
}

/**
 * @interface
 * An interface representing OrderHistory.
 */
export interface OrderHistory {
  /**
   * @member {string} [code]
   */
  code?: string;
  /**
   * @member {string} [guid]
   */
  guid?: string;
  /**
   * @member {Date} [placed]
   */
  placed?: Date;
  /**
   * @member {string} [status]
   */
  status?: string;
  /**
   * @member {string} [statusDisplay]
   */
  statusDisplay?: string;
  /**
   * @member {Price} [total]
   */
  total?: Price;
}

/**
 * @interface
 * An interface representing PaginationModel.
 */
export interface PaginationModel {
  /**
   * @member {number} [currentPage]
   */
  currentPage?: number;
  /**
   * @member {number} [pageSize]
   */
  pageSize?: number;
  /**
   * @member {string} [sort]
   */
  sort?: string;
  /**
   * @member {number} [totalPages]
   */
  totalPages?: number;
  /**
   * @member {number} [totalResults]
   */
  totalResults?: number;
}

/**
 * @interface
 * An interface representing SortModel.
 */
export interface SortModel {
  /**
   * @member {string} [code]
   */
  code?: string;
  /**
   * @member {string} [name]
   */
  name?: string;
  /**
   * @member {boolean} [selected]
   */
  selected?: boolean;
}

/**
 * @interface
 * An interface representing OrderHistoryList.
 */
export interface OrderHistoryList {
  /**
   * @member {OrderHistory[]} [orders]
   */
  orders?: OrderHistory[];
  /**
   * @member {PaginationModel} [pagination]
   */
  pagination?: PaginationModel;
  /**
   * @member {SortModel[]} [sorts]
   */
  sorts?: SortModel[];
}

/**
 * @interface
 * An interface representing OrderStatusUpdateElement.
 */
export interface OrderStatusUpdateElement {
  /**
   * @member {string} [baseSiteId]
   */
  baseSiteId?: string;
  /**
   * @member {string} [code]
   */
  code?: string;
  /**
   * @member {string} [status]
   */
  status?: string;
}

/**
 * @interface
 * An interface representing OrderStatusUpdateElementList.
 */
export interface OrderStatusUpdateElementList {
  /**
   * @member {OrderStatusUpdateElement[]} [orderStatusUpdateElements]
   */
  orderStatusUpdateElements?: OrderStatusUpdateElement[];
}

/**
 * @interface
 * An interface representing Order.
 */
export interface Order {
  /**
   * @member {PromotionResult[]} [appliedOrderPromotions]
   */
  appliedOrderPromotions?: PromotionResult[];
  /**
   * @member {PromotionResult[]} [appliedProductPromotions]
   */
  appliedProductPromotions?: PromotionResult[];
  /**
   * @member {Voucher[]} [appliedVouchers]
   */
  appliedVouchers?: Voucher[];
  /**
   * @member {boolean} [calculated]
   */
  calculated?: boolean;
  /**
   * @member {string} [code]
   */
  code?: string;
  /**
   * @member {Consignment[]} [consignments]
   */
  consignments?: Consignment[];
  /**
   * @member {Date} [created]
   */
  created?: Date;
  /**
   * @member {Address} [deliveryAddress]
   */
  deliveryAddress?: Address;
  /**
   * @member {Price} [deliveryCost]
   */
  deliveryCost?: Price;
  /**
   * @member {number} [deliveryItemsQuantity]
   */
  deliveryItemsQuantity?: number;
  /**
   * @member {DeliveryMode} [deliveryMode]
   */
  deliveryMode?: DeliveryMode;
  /**
   * @member {DeliveryOrderEntryGroup[]} [deliveryOrderGroups]
   */
  deliveryOrderGroups?: DeliveryOrderEntryGroup[];
  /**
   * @member {string} [deliveryStatus]
   */
  deliveryStatus?: string;
  /**
   * @member {string} [deliveryStatusDisplay]
   */
  deliveryStatusDisplay?: string;
  /**
   * @member {OrderEntry[]} [entries]
   */
  entries?: OrderEntry[];
  /**
   * @member {boolean} [guestCustomer]
   */
  guestCustomer?: boolean;
  /**
   * @member {string} [guid]
   */
  guid?: string;
  /**
   * @member {boolean} [net]
   */
  net?: boolean;
  /**
   * @member {Price} [orderDiscounts]
   */
  orderDiscounts?: Price;
  /**
   * @member {PaymentDetails} [paymentInfo]
   */
  paymentInfo?: PaymentDetails;
  /**
   * @member {number} [pickupItemsQuantity]
   */
  pickupItemsQuantity?: number;
  /**
   * @member {PickupOrderEntryGroup[]} [pickupOrderGroups]
   */
  pickupOrderGroups?: PickupOrderEntryGroup[];
  /**
   * @member {Price} [productDiscounts]
   */
  productDiscounts?: Price;
  /**
   * @member {string} [site]
   */
  site?: string;
  /**
   * @member {string} [status]
   */
  status?: string;
  /**
   * @member {string} [statusDisplay]
   */
  statusDisplay?: string;
  /**
   * @member {string} [store]
   */
  store?: string;
  /**
   * @member {Price} [subTotal]
   */
  subTotal?: Price;
  /**
   * @member {Price} [totalDiscounts]
   */
  totalDiscounts?: Price;
  /**
   * @member {number} [totalItems]
   */
  totalItems?: number;
  /**
   * @member {Price} [totalPrice]
   */
  totalPrice?: Price;
  /**
   * @member {Price} [totalPriceWithTax]
   */
  totalPriceWithTax?: Price;
  /**
   * @member {Price} [totalTax]
   */
  totalTax?: Price;
  /**
   * @member {OrderEntry[]} [unconsignedEntries]
   */
  unconsignedEntries?: OrderEntry[];
  /**
   * @member {Principal} [user]
   */
  user?: Principal;
}

/**
 * @interface
 * An interface representing PaymentDetailsList.
 */
export interface PaymentDetailsList {
  /**
   * @member {PaymentDetails[]} [payments]
   */
  payments?: PaymentDetails[];
}

/**
 * @interface
 * An interface representing PaymentRequest.
 */
export interface PaymentRequest {
  /**
   * @member {{ [propertyName: string]: string }} [mappingLabels]
   */
  mappingLabels?: { [propertyName: string]: string };
  /**
   * @member {{ [propertyName: string]: string }} [parameters]
   */
  parameters?: { [propertyName: string]: string };
  /**
   * @member {string} [postUrl]
   */
  postUrl?: string;
}

/**
 * @interface
 * An interface representing PointOfServiceList.
 */
export interface PointOfServiceList {
  /**
   * @member {PointOfService[]} [pointOfServices]
   */
  pointOfServices?: PointOfService[];
}

/**
 * @interface
 * An interface representing PointOfServiceStock.
 */
export interface PointOfServiceStock {
  /**
   * @member {Address} [address]
   */
  address?: Address;
  /**
   * @member {string} [description]
   */
  description?: string;
  /**
   * @member {string} [displayName]
   */
  displayName?: string;
  /**
   * @member {number} [distanceKm]
   */
  distanceKm?: number;
  /**
   * @member {{ [propertyName: string]: string }} [features]
   */
  features?: { [propertyName: string]: string };
  /**
   * @member {string} [formattedDistance]
   */
  formattedDistance?: string;
  /**
   * @member {GeoPoint} [geoPoint]
   */
  geoPoint?: GeoPoint;
  /**
   * @member {Image} [mapIcon]
   */
  mapIcon?: Image;
  /**
   * @member {string} [name]
   */
  name?: string;
  /**
   * @member {OpeningSchedule} [openingHours]
   */
  openingHours?: OpeningSchedule;
  /**
   * @member {Stock} [stockInfo]
   */
  stockInfo?: Stock;
  /**
   * @member {string} [storeContent]
   */
  storeContent?: string;
  /**
   * @member {Image[]} [storeImages]
   */
  storeImages?: Image[];
  /**
   * @member {string} [url]
   */
  url?: string;
}

/**
 * @interface
 * An interface representing ProductExpressUpdateElement.
 */
export interface ProductExpressUpdateElement {
  /**
   * @member {string} [catalogId]
   */
  catalogId?: string;
  /**
   * @member {string} [catalogVersion]
   */
  catalogVersion?: string;
  /**
   * @member {string} [code]
   */
  code?: string;
}

/**
 * @interface
 * An interface representing ProductExpressUpdateElementList.
 */
export interface ProductExpressUpdateElementList {
  /**
   * @member {ProductExpressUpdateElement[]} [productExpressUpdateElements]
   */
  productExpressUpdateElements?: ProductExpressUpdateElement[];
}

/**
 * @interface
 * An interface representing ProductList.
 */
export interface ProductList {
  /**
   * @member {string} [catalog]
   */
  catalog?: string;
  /**
   * @member {number} [currentPage]
   */
  currentPage?: number;
  /**
   * @member {Product[]} [products]
   */
  products?: Product[];
  /**
   * @member {number} [totalPageCount]
   */
  totalPageCount?: number;
  /**
   * @member {number} [totalProductCount]
   */
  totalProductCount?: number;
  /**
   * @member {string} [version]
   */
  version?: string;
}

/**
 * @interface
 * An interface representing ProductReferenceList.
 */
export interface ProductReferenceList {
  /**
   * @member {ProductReference[]} [references]
   */
  references?: ProductReference[];
}

/**
 * @interface
 * An interface representing SpellingSuggestion.
 */
export interface SpellingSuggestion {
  /**
   * @member {string} [query]
   */
  query?: string;
  /**
   * @member {string} [suggestion]
   */
  suggestion?: string;
}

/**
 * @interface
 * An interface representing ProductSearchPage.
 */
export interface ProductSearchPage {
  /**
   * @member {Breadcrumb[]} [breadcrumbs]
   */
  breadcrumbs?: Breadcrumb[];
  /**
   * @member {string} [categoryCode]
   */
  categoryCode?: string;
  /**
   * @member {SearchState} [currentQuery]
   */
  currentQuery?: SearchState;
  /**
   * @member {Facet[]} [facets]
   */
  facets?: Facet[];
  /**
   * @member {string} [freeTextSearch]
   */
  freeTextSearch?: string;
  /**
   * @member {string} [keywordRedirectUrl]
   */
  keywordRedirectUrl?: string;
  /**
   * @member {PaginationModel} [pagination]
   */
  pagination?: PaginationModel;
  /**
   * @member {Product[]} [products]
   */
  products?: Product[];
  /**
   * @member {SortModel[]} [sorts]
   */
  sorts?: SortModel[];
  /**
   * @member {SpellingSuggestion} [spellingSuggestion]
   */
  spellingSuggestion?: SpellingSuggestion;
}

/**
 * @interface
 * An interface representing PromotionList.
 */
export interface PromotionList {
  /**
   * @member {Promotion[]} [promotions]
   */
  promotions?: Promotion[];
}

/**
 * @interface
 * An interface representing PromotionResultList.
 */
export interface PromotionResultList {
  /**
   * @member {PromotionResult[]} [promotions]
   */
  promotions?: PromotionResult[];
}

/**
 * @interface
 * An interface representing RegionList.
 */
export interface RegionList {
  /**
   * @member {Region[]} [regions]
   */
  regions?: Region[];
}

/**
 * @interface
 * An interface representing ReviewList.
 */
export interface ReviewList {
  /**
   * @member {Review[]} [reviews]
   */
  reviews?: Review[];
}

/**
 * @interface
 * An interface representing SaveCartResult.
 */
export interface SaveCartResult {
  /**
   * @member {Cart} [savedCartData]
   */
  savedCartData?: Cart;
}

/**
 * @interface
 * An interface representing StoreFinderSearchPage.
 */
export interface StoreFinderSearchPage {
  /**
   * @member {number} [boundEastLongitude]
   */
  boundEastLongitude?: number;
  /**
   * @member {number} [boundNorthLatitude]
   */
  boundNorthLatitude?: number;
  /**
   * @member {number} [boundSouthLatitude]
   */
  boundSouthLatitude?: number;
  /**
   * @member {number} [boundWestLongitude]
   */
  boundWestLongitude?: number;
  /**
   * @member {string} [locationText]
   */
  locationText?: string;
  /**
   * @member {PaginationModel} [pagination]
   */
  pagination?: PaginationModel;
  /**
   * @member {SortModel[]} [sorts]
   */
  sorts?: SortModel[];
  /**
   * @member {number} [sourceLatitude]
   */
  sourceLatitude?: number;
  /**
   * @member {number} [sourceLongitude]
   */
  sourceLongitude?: number;
  /**
   * @member {PointOfService[]} [stores]
   */
  stores?: PointOfService[];
}

/**
 * @interface
 * An interface representing StoreFinderStockSearchPage.
 */
export interface StoreFinderStockSearchPage {
  /**
   * @member {number} [boundEastLongitude]
   */
  boundEastLongitude?: number;
  /**
   * @member {number} [boundNorthLatitude]
   */
  boundNorthLatitude?: number;
  /**
   * @member {number} [boundSouthLatitude]
   */
  boundSouthLatitude?: number;
  /**
   * @member {number} [boundWestLongitude]
   */
  boundWestLongitude?: number;
  /**
   * @member {string} [locationText]
   */
  locationText?: string;
  /**
   * @member {PaginationModel} [pagination]
   */
  pagination?: PaginationModel;
  /**
   * @member {Product} [product]
   */
  product?: Product;
  /**
   * @member {SortModel[]} [sorts]
   */
  sorts?: SortModel[];
  /**
   * @member {number} [sourceLatitude]
   */
  sourceLatitude?: number;
  /**
   * @member {number} [sourceLongitude]
   */
  sourceLongitude?: number;
  /**
   * @member {PointOfServiceStock[]} [stores]
   */
  stores?: PointOfServiceStock[];
}

/**
 * @interface
 * An interface representing Suggestion.
 */
export interface Suggestion {
  /**
   * @member {string} [value]
   */
  value?: string;
}

/**
 * @interface
 * An interface representing SuggestionList.
 */
export interface SuggestionList {
  /**
   * @member {Suggestion[]} [suggestions]
   */
  suggestions?: Suggestion[];
}

/**
 * @interface
 * An interface representing Title.
 */
export interface Title {
  /**
   * @member {string} [code]
   */
  code?: string;
  /**
   * @member {string} [name]
   */
  name?: string;
}

/**
 * @interface
 * An interface representing TitleList.
 */
export interface TitleList {
  /**
   * @member {Title[]} [titles]
   */
  titles?: Title[];
}

/**
 * @interface
 * An interface representing UserGroup.
 */
export interface UserGroup {
  /**
   * @member {Principal[]} [members]
   */
  members?: Principal[];
  /**
   * @member {number} [membersCount]
   */
  membersCount?: number;
  /**
   * @member {string} [name]
   */
  name?: string;
  /**
   * @member {UserGroup[]} [subGroups]
   */
  subGroups?: UserGroup[];
  /**
   * @member {string} [uid]
   */
  uid?: string;
}

/**
 * @interface
 * An interface representing UserGroupList.
 */
export interface UserGroupList {
  /**
   * @member {number} [currentPage]
   */
  currentPage?: number;
  /**
   * @member {number} [numberOfPages]
   */
  numberOfPages?: number;
  /**
   * @member {number} [pageSize]
   */
  pageSize?: number;
  /**
   * @member {number} [totalNumber]
   */
  totalNumber?: number;
  /**
   * @member {UserGroup[]} [userGroups]
   */
  userGroups?: UserGroup[];
}

/**
 * @interface
 * An interface representing UserSignUp.
 */
export interface UserSignUp {
  /**
   * @member {string} [firstName]
   */
  firstName?: string;
  /**
   * @member {string} [lastName]
   */
  lastName?: string;
  /**
   * @member {string} [password]
   */
  password?: string;
  /**
   * @member {string} [titleCode]
   */
  titleCode?: string;
  /**
   * @member {string} [uid]
   */
  uid?: string;
}

/**
 * @interface
 * An interface representing VoucherList.
 */
export interface VoucherList {
  /**
   * @member {Voucher[]} [vouchers]
   */
  vouchers?: Voucher[];
}

/**
 * Defines values for PriceType.
 * Possible values include: 'BUY', 'FROM'
 * @readonly
 * @enum {string}
 */
export type PriceType = 'BUY' | 'FROM';

/**
 * Defines values for ImageType.
 * Possible values include: 'PRIMARY', 'GALLERY'
 * @readonly
 * @enum {string}
 */
export type ImageType = 'PRIMARY' | 'GALLERY';

/**
 * Defines values for PageType.
 * Possible values include: 'ContentPage', 'ProductPage', 'CategoryPage', 'CatalogPage'
 * @readonly
 * @enum {string}
 */
export type PageType = 'ContentPage' | 'ProductPage' | 'CategoryPage' | 'CatalogPage';
