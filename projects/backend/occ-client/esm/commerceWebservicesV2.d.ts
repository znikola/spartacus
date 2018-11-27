import * as msRest from "@azure/ms-rest-js";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import { CommerceWebservicesV2Context } from "./commerceWebservicesV2Context";
declare class CommerceWebservicesV2 extends CommerceWebservicesV2Context {
    /**
     * Initializes a new instance of the CommerceWebservicesV2 class.
     * @param [options] The parameter options
     */
    constructor(options?: Models.CommerceWebservicesV2Options);
    /**
     * Returns details of a specific base store based on its identifier. The response contains detailed
     * base store information.
     * @summary Get a base store.
     * @param baseStoreUid Base store name
     * @param baseSiteId Base site identifier
     * @param [options] The optional parameters
     * @returns Promise<Models.GetBaseStoreResponse>
     */
    getBaseStore(baseStoreUid: string, baseSiteId: string, options?: Models.CommerceWebservicesV2GetBaseStoreOptionalParams): Promise<Models.GetBaseStoreResponse>;
    /**
     * @param baseStoreUid Base store name
     * @param baseSiteId Base site identifier
     * @param callback The callback
     */
    getBaseStore(baseStoreUid: string, baseSiteId: string, callback: msRest.ServiceCallback<Models.BaseStore>): void;
    /**
     * @param baseStoreUid Base store name
     * @param baseSiteId Base site identifier
     * @param options The optional parameters
     * @param callback The callback
     */
    getBaseStore(baseStoreUid: string, baseSiteId: string, options: Models.CommerceWebservicesV2GetBaseStoreOptionalParams, callback: msRest.ServiceCallback<Models.BaseStore>): void;
    /**
     * Lists supported payment card types.
     * @summary Get a list of supported payment card types.
     * @param baseSiteId Base site identifier
     * @param [options] The optional parameters
     * @returns Promise<Models.GetCardTypesResponse>
     */
    getCardTypes(baseSiteId: string, options?: Models.CommerceWebservicesV2GetCardTypesOptionalParams): Promise<Models.GetCardTypesResponse>;
    /**
     * @param baseSiteId Base site identifier
     * @param callback The callback
     */
    getCardTypes(baseSiteId: string, callback: msRest.ServiceCallback<Models.CardTypeList>): void;
    /**
     * @param baseSiteId Base site identifier
     * @param options The optional parameters
     * @param callback The callback
     */
    getCardTypes(baseSiteId: string, options: Models.CommerceWebservicesV2GetCardTypesOptionalParams, callback: msRest.ServiceCallback<Models.CardTypeList>): void;
    /**
     * Returns all catalogs with versions defined for the base store.
     * @summary Get a list of catalogs
     * @param baseSiteId Base site identifier
     * @param [options] The optional parameters
     * @returns Promise<Models.GetCatalogsResponse>
     */
    getCatalogs(baseSiteId: string, options?: Models.CommerceWebservicesV2GetCatalogsOptionalParams): Promise<Models.GetCatalogsResponse>;
    /**
     * @param baseSiteId Base site identifier
     * @param callback The callback
     */
    getCatalogs(baseSiteId: string, callback: msRest.ServiceCallback<Models.CatalogList>): void;
    /**
     * @param baseSiteId Base site identifier
     * @param options The optional parameters
     * @param callback The callback
     */
    getCatalogs(baseSiteId: string, options: Models.CommerceWebservicesV2GetCatalogsOptionalParams, callback: msRest.ServiceCallback<Models.CatalogList>): void;
    /**
     * Returns information about a catalog based on its ID, along with the versions defined for the
     * current base store.
     * @summary Get a catalog
     * @param catalogId Catalog identifier
     * @param baseSiteId Base site identifier
     * @param [options] The optional parameters
     * @returns Promise<Models.GetCatalogResponse>
     */
    getCatalog(catalogId: string, baseSiteId: string, options?: Models.CommerceWebservicesV2GetCatalogOptionalParams): Promise<Models.GetCatalogResponse>;
    /**
     * @param catalogId Catalog identifier
     * @param baseSiteId Base site identifier
     * @param callback The callback
     */
    getCatalog(catalogId: string, baseSiteId: string, callback: msRest.ServiceCallback<Models.Catalog>): void;
    /**
     * @param catalogId Catalog identifier
     * @param baseSiteId Base site identifier
     * @param options The optional parameters
     * @param callback The callback
     */
    getCatalog(catalogId: string, baseSiteId: string, options: Models.CommerceWebservicesV2GetCatalogOptionalParams, callback: msRest.ServiceCallback<Models.Catalog>): void;
    /**
     * Returns information about the catalog version that exists for the current base store.
     * @summary Get information about catalog version
     * @param catalogId Catalog identifier
     * @param catalogVersionId Catalog version identifier
     * @param baseSiteId Base site identifier
     * @param [options] The optional parameters
     * @returns Promise<Models.GetCatalogVersionResponse>
     */
    getCatalogVersion(catalogId: string, catalogVersionId: string, baseSiteId: string, options?: Models.CommerceWebservicesV2GetCatalogVersionOptionalParams): Promise<Models.GetCatalogVersionResponse>;
    /**
     * @param catalogId Catalog identifier
     * @param catalogVersionId Catalog version identifier
     * @param baseSiteId Base site identifier
     * @param callback The callback
     */
    getCatalogVersion(catalogId: string, catalogVersionId: string, baseSiteId: string, callback: msRest.ServiceCallback<Models.CatalogVersion>): void;
    /**
     * @param catalogId Catalog identifier
     * @param catalogVersionId Catalog version identifier
     * @param baseSiteId Base site identifier
     * @param options The optional parameters
     * @param callback The callback
     */
    getCatalogVersion(catalogId: string, catalogVersionId: string, baseSiteId: string, options: Models.CommerceWebservicesV2GetCatalogVersionOptionalParams, callback: msRest.ServiceCallback<Models.CatalogVersion>): void;
    /**
     * Returns information about a specified category that exists in a catalog version available for
     * the current base store.
     * @summary Get information about catagory in a catalog version
     * @param catalogId Catalog identifier
     * @param catalogVersionId Catalog version identifier
     * @param categoryId Category identifier
     * @param baseSiteId Base site identifier
     * @param [options] The optional parameters
     * @returns Promise<Models.GetCategoriesResponse>
     */
    getCategories(catalogId: string, catalogVersionId: string, categoryId: string, baseSiteId: string, options?: Models.CommerceWebservicesV2GetCategoriesOptionalParams): Promise<Models.GetCategoriesResponse>;
    /**
     * @param catalogId Catalog identifier
     * @param catalogVersionId Catalog version identifier
     * @param categoryId Category identifier
     * @param baseSiteId Base site identifier
     * @param callback The callback
     */
    getCategories(catalogId: string, catalogVersionId: string, categoryId: string, baseSiteId: string, callback: msRest.ServiceCallback<Models.CategoryHierarchy>): void;
    /**
     * @param catalogId Catalog identifier
     * @param catalogVersionId Catalog version identifier
     * @param categoryId Category identifier
     * @param baseSiteId Base site identifier
     * @param options The optional parameters
     * @param callback The callback
     */
    getCategories(catalogId: string, catalogVersionId: string, categoryId: string, baseSiteId: string, options: Models.CommerceWebservicesV2GetCategoriesOptionalParams, callback: msRest.ServiceCallback<Models.CategoryHierarchy>): void;
    /**
     * Given a list of component identifiers in body, return cms component data.
     * @summary Get components' data by id given in body
     * @param componentIdList List of Component identifiers
     * @param baseSiteId Base site identifier
     * @param [options] The optional parameters
     * @returns Promise<Models.GetComponentByIdListUsingPOSTResponse>
     */
    getComponentByIdListUsingPOST(componentIdList: Models.ComponentIDList, baseSiteId: string, options?: Models.CommerceWebservicesV2GetComponentByIdListUsingPOSTOptionalParams): Promise<Models.GetComponentByIdListUsingPOSTResponse>;
    /**
     * @param componentIdList List of Component identifiers
     * @param baseSiteId Base site identifier
     * @param callback The callback
     */
    getComponentByIdListUsingPOST(componentIdList: Models.ComponentIDList, baseSiteId: string, callback: msRest.ServiceCallback<Models.ListAdaptedComponents>): void;
    /**
     * @param componentIdList List of Component identifiers
     * @param baseSiteId Base site identifier
     * @param options The optional parameters
     * @param callback The callback
     */
    getComponentByIdListUsingPOST(componentIdList: Models.ComponentIDList, baseSiteId: string, options: Models.CommerceWebservicesV2GetComponentByIdListUsingPOSTOptionalParams, callback: msRest.ServiceCallback<Models.ListAdaptedComponents>): void;
    /**
     * Given a component identifier, return cms component data.
     * @summary Get component data
     * @param componentId Component identifier
     * @param baseSiteId Base site identifier
     * @param [options] The optional parameters
     * @returns Promise<Models.GetComponentByIdUsingGETResponse>
     */
    getComponentByIdUsingGET(componentId: string, baseSiteId: string, options?: Models.CommerceWebservicesV2GetComponentByIdUsingGETOptionalParams): Promise<Models.GetComponentByIdUsingGETResponse>;
    /**
     * @param componentId Component identifier
     * @param baseSiteId Base site identifier
     * @param callback The callback
     */
    getComponentByIdUsingGET(componentId: string, baseSiteId: string, callback: msRest.ServiceCallback<any>): void;
    /**
     * @param componentId Component identifier
     * @param baseSiteId Base site identifier
     * @param options The optional parameters
     * @param callback The callback
     */
    getComponentByIdUsingGET(componentId: string, baseSiteId: string, options: Models.CommerceWebservicesV2GetComponentByIdUsingGETOptionalParams, callback: msRest.ServiceCallback<any>): void;
    /**
     * Given a page identifier, return the page data with a list of cms content slots, each of which
     * contains a list of cms component data.
     * @summary Get page data with list of cms content slots
     * @param baseSiteId Base site identifier
     * @param [options] The optional parameters
     * @returns Promise<Models.GetPageDataUsingGETResponse>
     */
    getPageDataUsingGET(baseSiteId: string, options?: Models.CommerceWebservicesV2GetPageDataUsingGETOptionalParams): Promise<Models.GetPageDataUsingGETResponse>;
    /**
     * @param baseSiteId Base site identifier
     * @param callback The callback
     */
    getPageDataUsingGET(baseSiteId: string, callback: msRest.ServiceCallback<Models.CMSPage>): void;
    /**
     * @param baseSiteId Base site identifier
     * @param options The optional parameters
     * @param callback The callback
     */
    getPageDataUsingGET(baseSiteId: string, options: Models.CommerceWebservicesV2GetPageDataUsingGETOptionalParams, callback: msRest.ServiceCallback<Models.CMSPage>): void;
    /**
     * If the value of type equals to shipping, then return shipping countries. If the value of type
     * equals to billing, then return billing countries. If the value of type is not given, return all
     * countries. The list is sorted alphabetically.
     * @summary Get a list of countries.
     * @param baseSiteId Base site identifier
     * @param [options] The optional parameters
     * @returns Promise<Models.GetCountriesResponse>
     */
    getCountries(baseSiteId: string, options?: Models.CommerceWebservicesV2GetCountriesOptionalParams): Promise<Models.GetCountriesResponse>;
    /**
     * @param baseSiteId Base site identifier
     * @param callback The callback
     */
    getCountries(baseSiteId: string, callback: msRest.ServiceCallback<Models.CountryList>): void;
    /**
     * @param baseSiteId Base site identifier
     * @param options The optional parameters
     * @param callback The callback
     */
    getCountries(baseSiteId: string, options: Models.CommerceWebservicesV2GetCountriesOptionalParams, callback: msRest.ServiceCallback<Models.CountryList>): void;
    /**
     * Lists all regions.
     * @summary Fetch the list of regions for the provided country.
     * @param countyIsoCode An ISO code for a country
     * @param baseSiteId Base site identifier
     * @param [options] The optional parameters
     * @returns Promise<Models.GetCountryRegionsResponse>
     */
    getCountryRegions(countyIsoCode: string, baseSiteId: string, options?: Models.CommerceWebservicesV2GetCountryRegionsOptionalParams): Promise<Models.GetCountryRegionsResponse>;
    /**
     * @param countyIsoCode An ISO code for a country
     * @param baseSiteId Base site identifier
     * @param callback The callback
     */
    getCountryRegions(countyIsoCode: string, baseSiteId: string, callback: msRest.ServiceCallback<Models.RegionList>): void;
    /**
     * @param countyIsoCode An ISO code for a country
     * @param baseSiteId Base site identifier
     * @param options The optional parameters
     * @param callback The callback
     */
    getCountryRegions(countyIsoCode: string, baseSiteId: string, options: Models.CommerceWebservicesV2GetCountryRegionsOptionalParams, callback: msRest.ServiceCallback<Models.RegionList>): void;
    /**
     * Lists all available currencies (all usable currencies for the current store). If the list of
     * currencies for a base store is empty, a list of all currencies available in the system is
     * returned.
     * @summary Get a list of available currencies.
     * @param baseSiteId Base site identifier
     * @param [options] The optional parameters
     * @returns Promise<Models.GetCurrenciesResponse>
     */
    getCurrencies(baseSiteId: string, options?: Models.CommerceWebservicesV2GetCurrenciesOptionalParams): Promise<Models.GetCurrenciesResponse>;
    /**
     * @param baseSiteId Base site identifier
     * @param callback The callback
     */
    getCurrencies(baseSiteId: string, callback: msRest.ServiceCallback<Models.CurrencyList>): void;
    /**
     * @param baseSiteId Base site identifier
     * @param options The optional parameters
     * @param callback The callback
     */
    getCurrencies(baseSiteId: string, options: Models.CommerceWebservicesV2GetCurrenciesOptionalParams, callback: msRest.ServiceCallback<Models.CurrencyList>): void;
    /**
     * Returns all customer groups that are direct subgroups of a customergroup.
     *
     * To try out the methods of the Customer Groups controller, you must authorize a user who belongs
     * to the “customermanagergroup”.
     * @summary Get all subgroups of a customergroup.
     * @param baseSiteId Base site identifier
     * @param [options] The optional parameters
     * @returns Promise<Models.GetCustomerGroupsResponse>
     */
    getCustomerGroups(baseSiteId: string, options?: Models.CommerceWebservicesV2GetCustomerGroupsOptionalParams): Promise<Models.GetCustomerGroupsResponse>;
    /**
     * @param baseSiteId Base site identifier
     * @param callback The callback
     */
    getCustomerGroups(baseSiteId: string, callback: msRest.ServiceCallback<Models.UserGroupList>): void;
    /**
     * @param baseSiteId Base site identifier
     * @param options The optional parameters
     * @param callback The callback
     */
    getCustomerGroups(baseSiteId: string, options: Models.CommerceWebservicesV2GetCustomerGroupsOptionalParams, callback: msRest.ServiceCallback<Models.UserGroupList>): void;
    /**
     * Creates a new customer group that is a direct subgroup of a customergroup.
     *
     * To try out the methods of the Customer Groups controller, you must authorize a user who belongs
     * to the “customermanagergroup”.
     * @summary Creates a new customer group.
     * @param userGroup User group object with id and name.
     * @param baseSiteId Base site identifier
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    createCustomerGroup(userGroup: Models.UserGroup, baseSiteId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param userGroup User group object with id and name.
     * @param baseSiteId Base site identifier
     * @param callback The callback
     */
    createCustomerGroup(userGroup: Models.UserGroup, baseSiteId: string, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param userGroup User group object with id and name.
     * @param baseSiteId Base site identifier
     * @param options The optional parameters
     * @param callback The callback
     */
    createCustomerGroup(userGroup: Models.UserGroup, baseSiteId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Returns a customer group with a specific groupId.
     *
     * To try out the methods of the Customer Groups controller, you must authorize a user who belongs
     * to the “customermanagergroup”.
     * @summary Get a specific customer group.
     * @param groupId Group identifier.
     * @param baseSiteId Base site identifier
     * @param [options] The optional parameters
     * @returns Promise<Models.GetCustomerGroupResponse>
     */
    getCustomerGroup(groupId: string, baseSiteId: string, options?: Models.CommerceWebservicesV2GetCustomerGroupOptionalParams): Promise<Models.GetCustomerGroupResponse>;
    /**
     * @param groupId Group identifier.
     * @param baseSiteId Base site identifier
     * @param callback The callback
     */
    getCustomerGroup(groupId: string, baseSiteId: string, callback: msRest.ServiceCallback<Models.UserGroup>): void;
    /**
     * @param groupId Group identifier.
     * @param baseSiteId Base site identifier
     * @param options The optional parameters
     * @param callback The callback
     */
    getCustomerGroup(groupId: string, baseSiteId: string, options: Models.CommerceWebservicesV2GetCustomerGroupOptionalParams, callback: msRest.ServiceCallback<Models.UserGroup>): void;
    /**
     * Sets members for a user group. The list of existing members is overwritten with a new one.
     *
     * To try out the methods of the Customer Groups controller, you must authorize a user who belongs
     * to the “customermanagergroup”.
     * @summary Sets members for a user group.
     * @param groupId Group identifier.
     * @param members List of users to set for customer group.
     * @param baseSiteId Base site identifier
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    replaceUsersForCustomerGroup(groupId: string, members: Models.MemberList, baseSiteId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param groupId Group identifier.
     * @param members List of users to set for customer group.
     * @param baseSiteId Base site identifier
     * @param callback The callback
     */
    replaceUsersForCustomerGroup(groupId: string, members: Models.MemberList, baseSiteId: string, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param groupId Group identifier.
     * @param members List of users to set for customer group.
     * @param baseSiteId Base site identifier
     * @param options The optional parameters
     * @param callback The callback
     */
    replaceUsersForCustomerGroup(groupId: string, members: Models.MemberList, baseSiteId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Assigns user(s) to a customer group.
     *
     * To try out the methods of the Customer Groups controller, you must authorize a user who belongs
     * to the “customermanagergroup”.
     * @summary Assigns user(s) to a customer group.
     * @param groupId Group identifier.
     * @param members List of users to assign to customer group.
     * @param baseSiteId Base site identifier
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    updateCustomerGroupWithUsers(groupId: string, members: Models.MemberList, baseSiteId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param groupId Group identifier.
     * @param members List of users to assign to customer group.
     * @param baseSiteId Base site identifier
     * @param callback The callback
     */
    updateCustomerGroupWithUsers(groupId: string, members: Models.MemberList, baseSiteId: string, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param groupId Group identifier.
     * @param members List of users to assign to customer group.
     * @param baseSiteId Base site identifier
     * @param options The optional parameters
     * @param callback The callback
     */
    updateCustomerGroupWithUsers(groupId: string, members: Models.MemberList, baseSiteId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Deletes user from a customer group.
     *
     * To try out the methods of the Customer Groups controller, you must authorize a user who belongs
     * to the “customermanagergroup”.
     * @summary Deletes a user from a customer group.
     * @param groupId Group identifier.
     * @param userId User identifier.
     * @param baseSiteId Base site identifier
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    removeUsersFromCustomerGroup(groupId: string, userId: string, baseSiteId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param groupId Group identifier.
     * @param userId User identifier.
     * @param baseSiteId Base site identifier
     * @param callback The callback
     */
    removeUsersFromCustomerGroup(groupId: string, userId: string, baseSiteId: string, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param groupId Group identifier.
     * @param userId User identifier.
     * @param baseSiteId Base site identifier
     * @param options The optional parameters
     * @param callback The callback
     */
    removeUsersFromCustomerGroup(groupId: string, userId: string, baseSiteId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Lists all supported delivery countries for the current store. The list is sorted alphabetically.
     * @summary Get a list of shipping countries.
     * @param baseSiteId Base site identifier
     * @param [options] The optional parameters
     * @deprecated This operation is deprecated. Please do not use it any longer.
     * @returns Promise<Models.GetDeliveryCountriesResponse>
     */
    getDeliveryCountries(baseSiteId: string, options?: Models.CommerceWebservicesV2GetDeliveryCountriesOptionalParams): Promise<Models.GetDeliveryCountriesResponse>;
    /**
     * @param baseSiteId Base site identifier
     * @param callback The callback
     * @deprecated This operation is deprecated. Please do not use it any longer.
     */
    getDeliveryCountries(baseSiteId: string, callback: msRest.ServiceCallback<Models.CountryList>): void;
    /**
     * @param baseSiteId Base site identifier
     * @param options The optional parameters
     * @param callback The callback
     * @deprecated This operation is deprecated. Please do not use it any longer.
     */
    getDeliveryCountries(baseSiteId: string, options: Models.CommerceWebservicesV2GetDeliveryCountriesOptionalParams, callback: msRest.ServiceCallback<Models.CountryList>): void;
    /**
     * Used for product export. Depending on the timestamp parameter, it can return all products or
     * only products modified after the given time.
     * @summary Get a list of product exports.
     * @param baseSiteId Base site identifier
     * @param [options] The optional parameters
     * @returns Promise<Models.GetExportedProductsResponse>
     */
    getExportedProducts(baseSiteId: string, options?: Models.CommerceWebservicesV2GetExportedProductsOptionalParams): Promise<Models.GetExportedProductsResponse>;
    /**
     * @param baseSiteId Base site identifier
     * @param callback The callback
     */
    getExportedProducts(baseSiteId: string, callback: msRest.ServiceCallback<Models.ProductList>): void;
    /**
     * @param baseSiteId Base site identifier
     * @param options The optional parameters
     * @param callback The callback
     */
    getExportedProducts(baseSiteId: string, options: Models.CommerceWebservicesV2GetExportedProductsOptionalParams, callback: msRest.ServiceCallback<Models.ProductList>): void;
    /**
     * Returns the orders that have changed status. Returns only the elements from the current baseSite
     * that have been updated after the provided timestamp.
     * @summary Get a list of orders with status updates.
     * @param timestamp Only items newer than the given parameter are retrieved. This parameter should
     * be in ISO-8601 format (for example, 2018-01-09T16:28:45+0000).
     * @param baseSiteId Base site identifier
     * @param [options] The optional parameters
     * @returns Promise<Models.GetOrderStatusFeedResponse>
     */
    getOrderStatusFeed(timestamp: string, baseSiteId: string, options?: Models.CommerceWebservicesV2GetOrderStatusFeedOptionalParams): Promise<Models.GetOrderStatusFeedResponse>;
    /**
     * @param timestamp Only items newer than the given parameter are retrieved. This parameter should
     * be in ISO-8601 format (for example, 2018-01-09T16:28:45+0000).
     * @param baseSiteId Base site identifier
     * @param callback The callback
     */
    getOrderStatusFeed(timestamp: string, baseSiteId: string, callback: msRest.ServiceCallback<Models.OrderStatusUpdateElementList>): void;
    /**
     * @param timestamp Only items newer than the given parameter are retrieved. This parameter should
     * be in ISO-8601 format (for example, 2018-01-09T16:28:45+0000).
     * @param baseSiteId Base site identifier
     * @param options The optional parameters
     * @param callback The callback
     */
    getOrderStatusFeed(timestamp: string, baseSiteId: string, options: Models.CommerceWebservicesV2GetOrderStatusFeedOptionalParams, callback: msRest.ServiceCallback<Models.OrderStatusUpdateElementList>): void;
    /**
     * Generates a token to restore a customer's forgotten password.
     * @summary Generates a token to restore a customer's forgotten password.
     * @param userId Customer's user id. Customer user id is case insensitive.
     * @param baseSiteId Base site identifier
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    doRestorePassword(userId: string, baseSiteId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param userId Customer's user id. Customer user id is case insensitive.
     * @param baseSiteId Base site identifier
     * @param callback The callback
     */
    doRestorePassword(userId: string, baseSiteId: string, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param userId Customer's user id. Customer user id is case insensitive.
     * @param baseSiteId Base site identifier
     * @param options The optional parameters
     * @param callback The callback
     */
    doRestorePassword(userId: string, baseSiteId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Verifies the decision of the merchant.
     *
     * Note, the “Try it out” button is not enabled for this method (always returns an error) because
     * the Merchant Callback Controller handles parameters differently, depending on which payment
     * provider is used. For more information about this controller, please refer to the
     * “acceleratorwebservicesaddon AddOn” documentation on help.hybris.com.
     * @summary Verify the decision of the Merchant
     * @param baseSiteId Base site identifier
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    doHandleMerchantCallback(baseSiteId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param baseSiteId Base site identifier
     * @param callback The callback
     */
    doHandleMerchantCallback(baseSiteId: string, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param baseSiteId Base site identifier
     * @param options The optional parameters
     * @param callback The callback
     */
    doHandleMerchantCallback(baseSiteId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Verifies the decision of the merchant for a specified cart, and stores information of the
     * PaymentSubscriptionResult for the cart.
     *
     * Note, the “Try it out” button is not enabled for this method (always returns an error) because
     * the Merchant Callback Controller handles parameters differently, depending on which payment
     * provider is used. For more information about this controller, please refer to the
     * “acceleratorwebservicesaddon AddOn” documentation on help.hybris.com.
     * @summary Verify the decision of the Merchant for a cart
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param baseSiteId Base site identifier
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    doHandleCartMerchantCallback(userId: string, cartId: string, baseSiteId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param baseSiteId Base site identifier
     * @param callback The callback
     */
    doHandleCartMerchantCallback(userId: string, cartId: string, baseSiteId: string, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param baseSiteId Base site identifier
     * @param options The optional parameters
     * @param callback The callback
     */
    doHandleCartMerchantCallback(userId: string, cartId: string, baseSiteId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Lists all available languages (all languages used for a particular store). If the list of
     * languages for a base store is empty, a list of all languages available in the system will be
     * returned.
     * @summary Get a list of available languages.
     * @param baseSiteId Base site identifier
     * @param [options] The optional parameters
     * @returns Promise<Models.GetLanguagesResponse>
     */
    getLanguages(baseSiteId: string, options?: Models.CommerceWebservicesV2GetLanguagesOptionalParams): Promise<Models.GetLanguagesResponse>;
    /**
     * @param baseSiteId Base site identifier
     * @param callback The callback
     */
    getLanguages(baseSiteId: string, callback: msRest.ServiceCallback<Models.LanguageList>): void;
    /**
     * @param baseSiteId Base site identifier
     * @param options The optional parameters
     * @param callback The callback
     */
    getLanguages(baseSiteId: string, options: Models.CommerceWebservicesV2GetLanguagesOptionalParams, callback: msRest.ServiceCallback<Models.LanguageList>): void;
    /**
     * Returns details of a specific order based on the order GUID (Globally Unique Identifier) or the
     * order CODE. The response contains detailed order information.
     * @summary Get a order.
     * @param code Order GUID (Globally Unique Identifier) or order CODE
     * @param baseSiteId Base site identifier
     * @param [options] The optional parameters
     * @returns Promise<Models.GetOrderResponse>
     */
    getOrder(code: string, baseSiteId: string, options?: Models.CommerceWebservicesV2GetOrderOptionalParams): Promise<Models.GetOrderResponse>;
    /**
     * @param code Order GUID (Globally Unique Identifier) or order CODE
     * @param baseSiteId Base site identifier
     * @param callback The callback
     */
    getOrder(code: string, baseSiteId: string, callback: msRest.ServiceCallback<Models.Order>): void;
    /**
     * @param code Order GUID (Globally Unique Identifier) or order CODE
     * @param baseSiteId Base site identifier
     * @param options The optional parameters
     * @param callback The callback
     */
    getOrder(code: string, baseSiteId: string, options: Models.CommerceWebservicesV2GetOrderOptionalParams, callback: msRest.ServiceCallback<Models.Order>): void;
    /**
     * Returns products added to the express update feed. Returns only elements updated after the
     * provided timestamp. The queue is cleared using a defined cronjob.
     * @summary Get products added to the express update feed.
     * @param timestamp Only items newer than the given parameter are retrieved from the queue. This
     * parameter should be in ISO-8601 format.
     * @param baseSiteId Base site identifier
     * @param [options] The optional parameters
     * @returns Promise<Models.GetExpressUpdateProductsResponse>
     */
    getExpressUpdateProducts(timestamp: string, baseSiteId: string, options?: Models.CommerceWebservicesV2GetExpressUpdateProductsOptionalParams): Promise<Models.GetExpressUpdateProductsResponse>;
    /**
     * @param timestamp Only items newer than the given parameter are retrieved from the queue. This
     * parameter should be in ISO-8601 format.
     * @param baseSiteId Base site identifier
     * @param callback The callback
     */
    getExpressUpdateProducts(timestamp: string, baseSiteId: string, callback: msRest.ServiceCallback<Models.ProductExpressUpdateElementList>): void;
    /**
     * @param timestamp Only items newer than the given parameter are retrieved from the queue. This
     * parameter should be in ISO-8601 format.
     * @param baseSiteId Base site identifier
     * @param options The optional parameters
     * @param callback The callback
     */
    getExpressUpdateProducts(timestamp: string, baseSiteId: string, options: Models.CommerceWebservicesV2GetExpressUpdateProductsOptionalParams, callback: msRest.ServiceCallback<Models.ProductExpressUpdateElementList>): void;
    /**
     * Returns a list of products and additional data, such as available facets, available sorting, and
     * pagination options. It can also include spelling suggestions. To make spelling suggestions work,
     * you need to make sure that "enableSpellCheck" on the SearchQuery is set to "true" (by default,
     * it should already be set to "true"). You also need to have indexed properties configured to be
     * used for spellchecking.
     * @summary Get a list of products and additional data
     * @param baseSiteId Base site identifier
     * @param [options] The optional parameters
     * @returns Promise<Models.GetProductsResponse>
     */
    getProducts(baseSiteId: string, options?: Models.CommerceWebservicesV2GetProductsOptionalParams): Promise<Models.GetProductsResponse>;
    /**
     * @param baseSiteId Base site identifier
     * @param callback The callback
     */
    getProducts(baseSiteId: string, callback: msRest.ServiceCallback<Models.ProductSearchPage>): void;
    /**
     * @param baseSiteId Base site identifier
     * @param options The optional parameters
     * @param callback The callback
     */
    getProducts(baseSiteId: string, options: Models.CommerceWebservicesV2GetProductsOptionalParams, callback: msRest.ServiceCallback<Models.ProductSearchPage>): void;
    /**
     * In the response header, the "x-total-count" indicates the total number of products satisfying a
     * query.
     * @summary Get a header with total number of products.
     * @param baseSiteId Base site identifier
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    countProducts(baseSiteId: string, options?: Models.CommerceWebservicesV2CountProductsOptionalParams): Promise<msRest.RestResponse>;
    /**
     * @param baseSiteId Base site identifier
     * @param callback The callback
     */
    countProducts(baseSiteId: string, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param baseSiteId Base site identifier
     * @param options The optional parameters
     * @param callback The callback
     */
    countProducts(baseSiteId: string, options: Models.CommerceWebservicesV2CountProductsOptionalParams, callback: msRest.ServiceCallback<void>): void;
    /**
     * Returns a list of all available suggestions related to a given term and limits the results to a
     * specific value of the max parameter.
     * @summary Get a list of available suggestions
     * @param term Specified term
     * @param max Specifies the limit of results.
     * @param baseSiteId Base site identifier
     * @param [options] The optional parameters
     * @returns Promise<Models.GetSuggestionsResponse>
     */
    getSuggestions(term: string, max: number, baseSiteId: string, options?: Models.CommerceWebservicesV2GetSuggestionsOptionalParams): Promise<Models.GetSuggestionsResponse>;
    /**
     * @param term Specified term
     * @param max Specifies the limit of results.
     * @param baseSiteId Base site identifier
     * @param callback The callback
     */
    getSuggestions(term: string, max: number, baseSiteId: string, callback: msRest.ServiceCallback<Models.SuggestionList>): void;
    /**
     * @param term Specified term
     * @param max Specifies the limit of results.
     * @param baseSiteId Base site identifier
     * @param options The optional parameters
     * @param callback The callback
     */
    getSuggestions(term: string, max: number, baseSiteId: string, options: Models.CommerceWebservicesV2GetSuggestionsOptionalParams, callback: msRest.ServiceCallback<Models.SuggestionList>): void;
    /**
     * Returns details of a single product according to a product code.
     * @summary Get product details.
     * @param productCode Product identifier
     * @param baseSiteId Base site identifier
     * @param [options] The optional parameters
     * @returns Promise<Models.GetProductResponse>
     */
    getProduct(productCode: string, baseSiteId: string, options?: Models.CommerceWebservicesV2GetProductOptionalParams): Promise<Models.GetProductResponse>;
    /**
     * @param productCode Product identifier
     * @param baseSiteId Base site identifier
     * @param callback The callback
     */
    getProduct(productCode: string, baseSiteId: string, callback: msRest.ServiceCallback<Models.Product>): void;
    /**
     * @param productCode Product identifier
     * @param baseSiteId Base site identifier
     * @param options The optional parameters
     * @param callback The callback
     */
    getProduct(productCode: string, baseSiteId: string, options: Models.CommerceWebservicesV2GetProductOptionalParams, callback: msRest.ServiceCallback<Models.Product>): void;
    /**
     * Returns references for a product with a given product code. Reference type specifies which
     * references to return.
     * @summary Get a product reference
     * @param productCode Product identifier
     * @param referenceType Reference type according to enum ProductReferenceTypeEnum
     * @param baseSiteId Base site identifier
     * @param [options] The optional parameters
     * @returns Promise<Models.GetProductReferencesResponse>
     */
    getProductReferences(productCode: string, referenceType: string, baseSiteId: string, options?: Models.CommerceWebservicesV2GetProductReferencesOptionalParams): Promise<Models.GetProductReferencesResponse>;
    /**
     * @param productCode Product identifier
     * @param referenceType Reference type according to enum ProductReferenceTypeEnum
     * @param baseSiteId Base site identifier
     * @param callback The callback
     */
    getProductReferences(productCode: string, referenceType: string, baseSiteId: string, callback: msRest.ServiceCallback<Models.ProductReferenceList>): void;
    /**
     * @param productCode Product identifier
     * @param referenceType Reference type according to enum ProductReferenceTypeEnum
     * @param baseSiteId Base site identifier
     * @param options The optional parameters
     * @param callback The callback
     */
    getProductReferences(productCode: string, referenceType: string, baseSiteId: string, options: Models.CommerceWebservicesV2GetProductReferencesOptionalParams, callback: msRest.ServiceCallback<Models.ProductReferenceList>): void;
    /**
     * Returns the reviews for a product with a given product code.
     * @summary Get reviews for a product
     * @param productCode Product identifier
     * @param baseSiteId Base site identifier
     * @param [options] The optional parameters
     * @returns Promise<Models.GetProductReviewsResponse>
     */
    getProductReviews(productCode: string, baseSiteId: string, options?: Models.CommerceWebservicesV2GetProductReviewsOptionalParams): Promise<Models.GetProductReviewsResponse>;
    /**
     * @param productCode Product identifier
     * @param baseSiteId Base site identifier
     * @param callback The callback
     */
    getProductReviews(productCode: string, baseSiteId: string, callback: msRest.ServiceCallback<Models.ReviewList>): void;
    /**
     * @param productCode Product identifier
     * @param baseSiteId Base site identifier
     * @param options The optional parameters
     * @param callback The callback
     */
    getProductReviews(productCode: string, baseSiteId: string, options: Models.CommerceWebservicesV2GetProductReviewsOptionalParams, callback: msRest.ServiceCallback<Models.ReviewList>): void;
    /**
     * Creates a new customer review as an anonymous user.
     * @summary Creates a new customer review as an anonymous user.
     * @param productCode Product identifier
     * @param review Object contains review details like : rating, alias, headline, comment
     * @param baseSiteId Base site identifier
     * @param [options] The optional parameters
     * @returns Promise<Models.CreateProductReviewResponse>
     */
    createProductReview(productCode: string, review: Models.Review, baseSiteId: string, options?: Models.CommerceWebservicesV2CreateProductReviewOptionalParams): Promise<Models.CreateProductReviewResponse>;
    /**
     * @param productCode Product identifier
     * @param review Object contains review details like : rating, alias, headline, comment
     * @param baseSiteId Base site identifier
     * @param callback The callback
     */
    createProductReview(productCode: string, review: Models.Review, baseSiteId: string, callback: msRest.ServiceCallback<Models.Review>): void;
    /**
     * @param productCode Product identifier
     * @param review Object contains review details like : rating, alias, headline, comment
     * @param baseSiteId Base site identifier
     * @param options The optional parameters
     * @param callback The callback
     */
    createProductReview(productCode: string, review: Models.Review, baseSiteId: string, options: Models.CommerceWebservicesV2CreateProductReviewOptionalParams, callback: msRest.ServiceCallback<Models.Review>): void;
    /**
     * Returns a product's stock levels sorted by distance from the specified location, which is
     * provided using the free-text "location" parameter, or by using the longitude and latitude
     * parameters. The following two sets of parameters are available: location (required), currentPage
     * (optional), pageSize (optional); or longitude (required), latitude (required), currentPage
     * (optional), pageSize(optional).
     * @summary Get a product's stock level.
     * @param productCode Product identifier
     * @param baseSiteId Base site identifier
     * @param [options] The optional parameters
     * @returns Promise<Models.GetLocationProductStockResponse>
     */
    getLocationProductStock(productCode: string, baseSiteId: string, options?: Models.CommerceWebservicesV2GetLocationProductStockOptionalParams): Promise<Models.GetLocationProductStockResponse>;
    /**
     * @param productCode Product identifier
     * @param baseSiteId Base site identifier
     * @param callback The callback
     */
    getLocationProductStock(productCode: string, baseSiteId: string, callback: msRest.ServiceCallback<Models.StoreFinderStockSearchPage>): void;
    /**
     * @param productCode Product identifier
     * @param baseSiteId Base site identifier
     * @param options The optional parameters
     * @param callback The callback
     */
    getLocationProductStock(productCode: string, baseSiteId: string, options: Models.CommerceWebservicesV2GetLocationProductStockOptionalParams, callback: msRest.ServiceCallback<Models.StoreFinderStockSearchPage>): void;
    /**
     * In the response header, the "x-total-count" indicates the total number of a product's stock
     * levels. The following two sets of parameters are available: location (required); or longitude
     * (required), and latitude (required).
     * @summary Get header with a total number of product's stock levels.
     * @param productCode Product identifier
     * @param baseSiteId Base site identifier
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    countProductStockByLocation(productCode: string, baseSiteId: string, options?: Models.CommerceWebservicesV2CountProductStockByLocationOptionalParams): Promise<msRest.RestResponse>;
    /**
     * @param productCode Product identifier
     * @param baseSiteId Base site identifier
     * @param callback The callback
     */
    countProductStockByLocation(productCode: string, baseSiteId: string, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param productCode Product identifier
     * @param baseSiteId Base site identifier
     * @param options The optional parameters
     * @param callback The callback
     */
    countProductStockByLocation(productCode: string, baseSiteId: string, options: Models.CommerceWebservicesV2CountProductStockByLocationOptionalParams, callback: msRest.ServiceCallback<void>): void;
    /**
     * Returns a product's stock level for a particular store (in other words, for a particular point
     * of sale).
     * @summary Get a product's stock level for a store
     * @param baseSiteId Base site identifier
     * @param productCode Product identifier
     * @param storeName Store identifier
     * @param [options] The optional parameters
     * @returns Promise<Models.GetStoreProductStockResponse>
     */
    getStoreProductStock(baseSiteId: string, productCode: string, storeName: string, options?: Models.CommerceWebservicesV2GetStoreProductStockOptionalParams): Promise<Models.GetStoreProductStockResponse>;
    /**
     * @param baseSiteId Base site identifier
     * @param productCode Product identifier
     * @param storeName Store identifier
     * @param callback The callback
     */
    getStoreProductStock(baseSiteId: string, productCode: string, storeName: string, callback: msRest.ServiceCallback<Models.Stock>): void;
    /**
     * @param baseSiteId Base site identifier
     * @param productCode Product identifier
     * @param storeName Store identifier
     * @param options The optional parameters
     * @param callback The callback
     */
    getStoreProductStock(baseSiteId: string, productCode: string, storeName: string, options: Models.CommerceWebservicesV2GetStoreProductStockOptionalParams, callback: msRest.ServiceCallback<Models.Stock>): void;
    /**
     * Returns promotions defined for a current base site. Requests pertaining to promotions have been
     * developed for the previous version of promotions and vouchers and therefore some of them are
     * currently not compatible with the new promotion engine.
     * @summary Get a list of promotions.
     * @param type Defines what type of promotions should be returned. Values supported for that
     * parameter are: <ul><li>all: All available promotions are returned</li><li>product: Only product
     * promotions are returned</li><li>order: Only order promotions are returned</li></ul>. Possible
     * values include: 'all', 'product', 'order'
     * @param baseSiteId Base site identifier
     * @param [options] The optional parameters
     * @returns Promise<Models.GetPromotionsResponse>
     */
    getPromotions(type: Models.Type1, baseSiteId: string, options?: Models.CommerceWebservicesV2GetPromotionsOptionalParams): Promise<Models.GetPromotionsResponse>;
    /**
     * @param type Defines what type of promotions should be returned. Values supported for that
     * parameter are: <ul><li>all: All available promotions are returned</li><li>product: Only product
     * promotions are returned</li><li>order: Only order promotions are returned</li></ul>. Possible
     * values include: 'all', 'product', 'order'
     * @param baseSiteId Base site identifier
     * @param callback The callback
     */
    getPromotions(type: Models.Type1, baseSiteId: string, callback: msRest.ServiceCallback<Models.PromotionList>): void;
    /**
     * @param type Defines what type of promotions should be returned. Values supported for that
     * parameter are: <ul><li>all: All available promotions are returned</li><li>product: Only product
     * promotions are returned</li><li>order: Only order promotions are returned</li></ul>. Possible
     * values include: 'all', 'product', 'order'
     * @param baseSiteId Base site identifier
     * @param options The optional parameters
     * @param callback The callback
     */
    getPromotions(type: Models.Type1, baseSiteId: string, options: Models.CommerceWebservicesV2GetPromotionsOptionalParams, callback: msRest.ServiceCallback<Models.PromotionList>): void;
    /**
     * Returns details of a single promotion specified by a promotion code. Requests pertaining to
     * promotions have been developed for the previous version of promotions and vouchers and therefore
     * some of them are currently not compatible with the new promotion engine.
     * @summary Get a promotion based on code
     * @param code Promotion identifier (code)
     * @param baseSiteId Base site identifier
     * @param [options] The optional parameters
     * @returns Promise<Models.GetPromotionResponse>
     */
    getPromotion(code: string, baseSiteId: string, options?: Models.CommerceWebservicesV2GetPromotionOptionalParams): Promise<Models.GetPromotionResponse>;
    /**
     * @param code Promotion identifier (code)
     * @param baseSiteId Base site identifier
     * @param callback The callback
     */
    getPromotion(code: string, baseSiteId: string, callback: msRest.ServiceCallback<Models.Promotion>): void;
    /**
     * @param code Promotion identifier (code)
     * @param baseSiteId Base site identifier
     * @param options The optional parameters
     * @param callback The callback
     */
    getPromotion(code: string, baseSiteId: string, options: Models.CommerceWebservicesV2GetPromotionOptionalParams, callback: msRest.ServiceCallback<Models.Promotion>): void;
    /**
     * Lists all store locations that are near the location specified in a query or based on latitude
     * and longitude.
     * @summary Get a list of store locations
     * @param baseSiteId Base site identifier
     * @param [options] The optional parameters
     * @returns Promise<Models.GetStoreLocationsResponse>
     */
    getStoreLocations(baseSiteId: string, options?: Models.CommerceWebservicesV2GetStoreLocationsOptionalParams): Promise<Models.GetStoreLocationsResponse>;
    /**
     * @param baseSiteId Base site identifier
     * @param callback The callback
     */
    getStoreLocations(baseSiteId: string, callback: msRest.ServiceCallback<Models.StoreFinderSearchPage>): void;
    /**
     * @param baseSiteId Base site identifier
     * @param options The optional parameters
     * @param callback The callback
     */
    getStoreLocations(baseSiteId: string, options: Models.CommerceWebservicesV2GetStoreLocationsOptionalParams, callback: msRest.ServiceCallback<Models.StoreFinderSearchPage>): void;
    /**
     * In the response header, the "x-total-count" indicates the number of all store locations that are
     * near the location specified in a query, or based on latitude and longitude.
     * @summary Get a header with the number of store locations.
     * @param baseSiteId Base site identifier
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    countStoreLocations(baseSiteId: string, options?: Models.CommerceWebservicesV2CountStoreLocationsOptionalParams): Promise<msRest.RestResponse>;
    /**
     * @param baseSiteId Base site identifier
     * @param callback The callback
     */
    countStoreLocations(baseSiteId: string, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param baseSiteId Base site identifier
     * @param options The optional parameters
     * @param callback The callback
     */
    countStoreLocations(baseSiteId: string, options: Models.CommerceWebservicesV2CountStoreLocationsOptionalParams, callback: msRest.ServiceCallback<void>): void;
    /**
     * Returns store location based on its unique name.
     * @summary Get a store location.
     * @param storeId Store identifier (currently store name)
     * @param baseSiteId Base site identifier
     * @param [options] The optional parameters
     * @returns Promise<Models.GetStoreLocationResponse>
     */
    getStoreLocation(storeId: string, baseSiteId: string, options?: Models.CommerceWebservicesV2GetStoreLocationOptionalParams): Promise<Models.GetStoreLocationResponse>;
    /**
     * @param storeId Store identifier (currently store name)
     * @param baseSiteId Base site identifier
     * @param callback The callback
     */
    getStoreLocation(storeId: string, baseSiteId: string, callback: msRest.ServiceCallback<Models.PointOfService>): void;
    /**
     * @param storeId Store identifier (currently store name)
     * @param baseSiteId Base site identifier
     * @param options The optional parameters
     * @param callback The callback
     */
    getStoreLocation(storeId: string, baseSiteId: string, options: Models.CommerceWebservicesV2GetStoreLocationOptionalParams, callback: msRest.ServiceCallback<Models.PointOfService>): void;
    /**
     * Lists all localized titles.
     * @summary Get a list of all localized titles.
     * @param baseSiteId Base site identifier
     * @param [options] The optional parameters
     * @returns Promise<Models.GetTitlesResponse>
     */
    getTitles(baseSiteId: string, options?: Models.CommerceWebservicesV2GetTitlesOptionalParams): Promise<Models.GetTitlesResponse>;
    /**
     * @param baseSiteId Base site identifier
     * @param callback The callback
     */
    getTitles(baseSiteId: string, callback: msRest.ServiceCallback<Models.TitleList>): void;
    /**
     * @param baseSiteId Base site identifier
     * @param options The optional parameters
     * @param callback The callback
     */
    getTitles(baseSiteId: string, options: Models.CommerceWebservicesV2GetTitlesOptionalParams, callback: msRest.ServiceCallback<Models.TitleList>): void;
    /**
     * Registers a customer. There are two options for registering a customer. The first option
     * requires the following parameters: login, password, firstName, lastName, titleCode. The second
     * option converts a guest to a customer. In this case, the required parameters are: guid,
     * password.
     * @summary  Registers a customer
     * @param user User's object.
     * @param baseSiteId Base site identifier
     * @param [options] The optional parameters
     * @returns Promise<Models.CreateUserResponse>
     */
    createUser(user: Models.UserSignUp, baseSiteId: string, options?: Models.CommerceWebservicesV2CreateUserOptionalParams): Promise<Models.CreateUserResponse>;
    /**
     * @param user User's object.
     * @param baseSiteId Base site identifier
     * @param callback The callback
     */
    createUser(user: Models.UserSignUp, baseSiteId: string, callback: msRest.ServiceCallback<Models.User>): void;
    /**
     * @param user User's object.
     * @param baseSiteId Base site identifier
     * @param options The optional parameters
     * @param callback The callback
     */
    createUser(user: Models.UserSignUp, baseSiteId: string, options: Models.CommerceWebservicesV2CreateUserOptionalParams, callback: msRest.ServiceCallback<Models.User>): void;
    /**
     * Returns customer profile.
     * @summary Get customer profile
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param [options] The optional parameters
     * @returns Promise<Models.GetUserResponse>
     */
    getUser(baseSiteId: string, userId: string, options?: Models.CommerceWebservicesV2GetUserOptionalParams): Promise<Models.GetUserResponse>;
    /**
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param callback The callback
     */
    getUser(baseSiteId: string, userId: string, callback: msRest.ServiceCallback<Models.User>): void;
    /**
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param options The optional parameters
     * @param callback The callback
     */
    getUser(baseSiteId: string, userId: string, options: Models.CommerceWebservicesV2GetUserOptionalParams, callback: msRest.ServiceCallback<Models.User>): void;
    /**
     * Updates customer profile. Attributes not provided in the request body will be defined again (set
     * to null or default).
     * @summary Updates customer profile
     * @param user User's object
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    replaceUser(user: Models.User, baseSiteId: string, userId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param user User's object
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param callback The callback
     */
    replaceUser(user: Models.User, baseSiteId: string, userId: string, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param user User's object
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param options The optional parameters
     * @param callback The callback
     */
    replaceUser(user: Models.User, baseSiteId: string, userId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Removes customer profile.
     * @summary Delete customer profile.
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    removeUser(baseSiteId: string, userId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param callback The callback
     */
    removeUser(baseSiteId: string, userId: string, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param options The optional parameters
     * @param callback The callback
     */
    removeUser(baseSiteId: string, userId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Updates customer profile. Only attributes provided in the request body will be changed.
     * @summary Updates customer profile
     * @param user User's object.
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    updateUser(user: Models.User, baseSiteId: string, userId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param user User's object.
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param callback The callback
     */
    updateUser(user: Models.User, baseSiteId: string, userId: string, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param user User's object.
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param options The optional parameters
     * @param callback The callback
     */
    updateUser(user: Models.User, baseSiteId: string, userId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Returns customer's addresses.
     * @summary Get customer's addresses
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param [options] The optional parameters
     * @returns Promise<Models.GetAddressesResponse>
     */
    getAddresses(baseSiteId: string, userId: string, options?: Models.CommerceWebservicesV2GetAddressesOptionalParams): Promise<Models.GetAddressesResponse>;
    /**
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param callback The callback
     */
    getAddresses(baseSiteId: string, userId: string, callback: msRest.ServiceCallback<Models.AddressList>): void;
    /**
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param options The optional parameters
     * @param callback The callback
     */
    getAddresses(baseSiteId: string, userId: string, options: Models.CommerceWebservicesV2GetAddressesOptionalParams, callback: msRest.ServiceCallback<Models.AddressList>): void;
    /**
     * Creates a new address.
     * @summary Creates a new address.
     * @param address Address object.
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param [options] The optional parameters
     * @returns Promise<Models.CreateAddressResponse>
     */
    createAddress(address: Models.Address, baseSiteId: string, userId: string, options?: Models.CommerceWebservicesV2CreateAddressOptionalParams): Promise<Models.CreateAddressResponse>;
    /**
     * @param address Address object.
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param callback The callback
     */
    createAddress(address: Models.Address, baseSiteId: string, userId: string, callback: msRest.ServiceCallback<Models.Address>): void;
    /**
     * @param address Address object.
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param options The optional parameters
     * @param callback The callback
     */
    createAddress(address: Models.Address, baseSiteId: string, userId: string, options: Models.CommerceWebservicesV2CreateAddressOptionalParams, callback: msRest.ServiceCallback<Models.Address>): void;
    /**
     * Verifies address.
     * @summary Verifies address.
     * @param address Address object.
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param [options] The optional parameters
     * @returns Promise<Models.ValidateAddressResponse>
     */
    validateAddress(address: Models.Address, baseSiteId: string, userId: string, options?: Models.CommerceWebservicesV2ValidateAddressOptionalParams): Promise<Models.ValidateAddressResponse>;
    /**
     * @param address Address object.
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param callback The callback
     */
    validateAddress(address: Models.Address, baseSiteId: string, userId: string, callback: msRest.ServiceCallback<Models.AddressValidation>): void;
    /**
     * @param address Address object.
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param options The optional parameters
     * @param callback The callback
     */
    validateAddress(address: Models.Address, baseSiteId: string, userId: string, options: Models.CommerceWebservicesV2ValidateAddressOptionalParams, callback: msRest.ServiceCallback<Models.AddressValidation>): void;
    /**
     * Returns detailed information about address with a given id.
     * @summary Get info about address
     * @param addressId Address identifier.
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param [options] The optional parameters
     * @returns Promise<Models.GetAddressResponse>
     */
    getAddress(addressId: string, baseSiteId: string, userId: string, options?: Models.CommerceWebservicesV2GetAddressOptionalParams): Promise<Models.GetAddressResponse>;
    /**
     * @param addressId Address identifier.
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param callback The callback
     */
    getAddress(addressId: string, baseSiteId: string, userId: string, callback: msRest.ServiceCallback<Models.Address>): void;
    /**
     * @param addressId Address identifier.
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param options The optional parameters
     * @param callback The callback
     */
    getAddress(addressId: string, baseSiteId: string, userId: string, options: Models.CommerceWebservicesV2GetAddressOptionalParams, callback: msRest.ServiceCallback<Models.Address>): void;
    /**
     * Updates the address. Attributes not provided in the request will be defined again (set to null
     * or default).
     * @summary Updates the address
     * @param addressId Address identifier.
     * @param address Address object.
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    replaceAddress(addressId: string, address: Models.Address, baseSiteId: string, userId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param addressId Address identifier.
     * @param address Address object.
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param callback The callback
     */
    replaceAddress(addressId: string, address: Models.Address, baseSiteId: string, userId: string, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param addressId Address identifier.
     * @param address Address object.
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param options The optional parameters
     * @param callback The callback
     */
    replaceAddress(addressId: string, address: Models.Address, baseSiteId: string, userId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Removes customer's address.
     * @summary Delete customer's address.
     * @param addressId Address identifier.
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    removeAddress(addressId: string, baseSiteId: string, userId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param addressId Address identifier.
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param callback The callback
     */
    removeAddress(addressId: string, baseSiteId: string, userId: string, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param addressId Address identifier.
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param options The optional parameters
     * @param callback The callback
     */
    removeAddress(addressId: string, baseSiteId: string, userId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Updates the address. Only attributes provided in the request body will be changed.
     * @summary Updates the address
     * @param addressId Address identifier.
     * @param address Address object
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    updateAddress(addressId: string, address: Models.Address, baseSiteId: string, userId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param addressId Address identifier.
     * @param address Address object
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param callback The callback
     */
    updateAddress(addressId: string, address: Models.Address, baseSiteId: string, userId: string, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param addressId Address identifier.
     * @param address Address object
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param options The optional parameters
     * @param callback The callback
     */
    updateAddress(addressId: string, address: Models.Address, baseSiteId: string, userId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Lists all customer carts.
     * @summary Get all customer carts.
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param [options] The optional parameters
     * @returns Promise<Models.GetCartsResponse>
     */
    getCarts(baseSiteId: string, userId: string, options?: Models.CommerceWebservicesV2GetCartsOptionalParams): Promise<Models.GetCartsResponse>;
    /**
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param callback The callback
     */
    getCarts(baseSiteId: string, userId: string, callback: msRest.ServiceCallback<Models.CartList>): void;
    /**
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param options The optional parameters
     * @param callback The callback
     */
    getCarts(baseSiteId: string, userId: string, options: Models.CommerceWebservicesV2GetCartsOptionalParams, callback: msRest.ServiceCallback<Models.CartList>): void;
    /**
     * Creates a new cart or restores an anonymous cart as a user's cart (if an old Cart Id is given in
     * the request).
     * @summary Creates or restore a cart for a user.
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param [options] The optional parameters
     * @returns Promise<Models.CreateCartResponse>
     */
    createCart(baseSiteId: string, userId: string, options?: Models.CommerceWebservicesV2CreateCartOptionalParams): Promise<Models.CreateCartResponse>;
    /**
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param callback The callback
     */
    createCart(baseSiteId: string, userId: string, callback: msRest.ServiceCallback<Models.Cart>): void;
    /**
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param options The optional parameters
     * @param callback The callback
     */
    createCart(baseSiteId: string, userId: string, options: Models.CommerceWebservicesV2CreateCartOptionalParams, callback: msRest.ServiceCallback<Models.Cart>): void;
    /**
     * Returns the cart with a given identifier.
     * @summary Get a cart with a given identifier.
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param [options] The optional parameters
     * @returns Promise<Models.GetCartResponse>
     */
    getCart(baseSiteId: string, userId: string, cartId: string, options?: Models.CommerceWebservicesV2GetCartOptionalParams): Promise<Models.GetCartResponse>;
    /**
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param callback The callback
     */
    getCart(baseSiteId: string, userId: string, cartId: string, callback: msRest.ServiceCallback<Models.Cart>): void;
    /**
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param options The optional parameters
     * @param callback The callback
     */
    getCart(baseSiteId: string, userId: string, cartId: string, options: Models.CommerceWebservicesV2GetCartOptionalParams, callback: msRest.ServiceCallback<Models.Cart>): void;
    /**
     * Deletes a cart with a given cart id.
     * @summary Deletes a cart with a given cart id.
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    removeCart(baseSiteId: string, userId: string, cartId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param callback The callback
     */
    removeCart(baseSiteId: string, userId: string, cartId: string, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param options The optional parameters
     * @param callback The callback
     */
    removeCart(baseSiteId: string, userId: string, cartId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Creates an address and assigns it to the cart as the delivery address.
     * @summary Creates a delivery address for the cart.
     * @param address Request body parameter that contains details such as the customer's first name
     * (firstName), the customer's last name (lastName), the customer's title (titleCode), the country
     * (country.isocode), the first part of the address (line1), the second part of the address
     * (line2), the town (town), the postal code (postalCode), and the region (region.isocode).
     *
     * The DTO is in XML or .json format.
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param [options] The optional parameters
     * @returns Promise<Models.CreateCartDeliveryAddressResponse>
     */
    createCartDeliveryAddress(address: Models.Address, baseSiteId: string, userId: string, cartId: string, options?: Models.CommerceWebservicesV2CreateCartDeliveryAddressOptionalParams): Promise<Models.CreateCartDeliveryAddressResponse>;
    /**
     * @param address Request body parameter that contains details such as the customer's first name
     * (firstName), the customer's last name (lastName), the customer's title (titleCode), the country
     * (country.isocode), the first part of the address (line1), the second part of the address
     * (line2), the town (town), the postal code (postalCode), and the region (region.isocode).
     *
     * The DTO is in XML or .json format.
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param callback The callback
     */
    createCartDeliveryAddress(address: Models.Address, baseSiteId: string, userId: string, cartId: string, callback: msRest.ServiceCallback<Models.Address>): void;
    /**
     * @param address Request body parameter that contains details such as the customer's first name
     * (firstName), the customer's last name (lastName), the customer's title (titleCode), the country
     * (country.isocode), the first part of the address (line1), the second part of the address
     * (line2), the town (town), the postal code (postalCode), and the region (region.isocode).
     *
     * The DTO is in XML or .json format.
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param options The optional parameters
     * @param callback The callback
     */
    createCartDeliveryAddress(address: Models.Address, baseSiteId: string, userId: string, cartId: string, options: Models.CommerceWebservicesV2CreateCartDeliveryAddressOptionalParams, callback: msRest.ServiceCallback<Models.Address>): void;
    /**
     * Sets a delivery address for the cart. The address country must be placed among the delivery
     * countries of the current base store.
     * @summary Sets a delivery address for the cart.
     * @param addressId Address identifier
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    replaceCartDeliveryAddress(addressId: string, baseSiteId: string, userId: string, cartId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param addressId Address identifier
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param callback The callback
     */
    replaceCartDeliveryAddress(addressId: string, baseSiteId: string, userId: string, cartId: string, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param addressId Address identifier
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param options The optional parameters
     * @param callback The callback
     */
    replaceCartDeliveryAddress(addressId: string, baseSiteId: string, userId: string, cartId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Deletes the delivery address from the cart.
     * @summary Deletes the delivery address from the cart.
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    removeCartDeliveryAddress(baseSiteId: string, userId: string, cartId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param callback The callback
     */
    removeCartDeliveryAddress(baseSiteId: string, userId: string, cartId: string, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param options The optional parameters
     * @param callback The callback
     */
    removeCartDeliveryAddress(baseSiteId: string, userId: string, cartId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Explicitly clones a cart.
     * @summary Explicitly clones a cart.
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param [options] The optional parameters
     * @returns Promise<Models.DoCartCloneResponse>
     */
    doCartClone(cartId: string, baseSiteId: string, userId: string, options?: Models.CommerceWebservicesV2DoCartCloneOptionalParams): Promise<Models.DoCartCloneResponse>;
    /**
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param callback The callback
     */
    doCartClone(cartId: string, baseSiteId: string, userId: string, callback: msRest.ServiceCallback<Models.SaveCartResult>): void;
    /**
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param options The optional parameters
     * @param callback The callback
     */
    doCartClone(cartId: string, baseSiteId: string, userId: string, options: Models.CommerceWebservicesV2DoCartCloneOptionalParams, callback: msRest.ServiceCallback<Models.SaveCartResult>): void;
    /**
     * Returns a list of stores that have all the pick-up items in stock.
     *
     * Note, if there are no stores that have all the pick up items in stock, or all items are already
     * set to the same pick up location, the response returns an empty list.
     * @summary Get consolidated pickup options.
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param [options] The optional parameters
     * @returns Promise<Models.GetConsolidatedPickupLocationsResponse>
     */
    getConsolidatedPickupLocations(baseSiteId: string, userId: string, cartId: string, options?: Models.CommerceWebservicesV2GetConsolidatedPickupLocationsOptionalParams): Promise<Models.GetConsolidatedPickupLocationsResponse>;
    /**
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param callback The callback
     */
    getConsolidatedPickupLocations(baseSiteId: string, userId: string, cartId: string, callback: msRest.ServiceCallback<Models.PointOfServiceList>): void;
    /**
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param options The optional parameters
     * @param callback The callback
     */
    getConsolidatedPickupLocations(baseSiteId: string, userId: string, cartId: string, options: Models.CommerceWebservicesV2GetConsolidatedPickupLocationsOptionalParams, callback: msRest.ServiceCallback<Models.PointOfServiceList>): void;
    /**
     * Specifies one store location where all items will be picked up.
     *
     * Note, if any of the items are not available at the specified location, these items are removed
     * from the cart.
     * @summary Handles the consolidating pickup locations.
     * @param storeName The name of the store where items will be picked up
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param [options] The optional parameters
     * @returns Promise<Models.CreateConsolidatedPickupLocationResponse>
     */
    createConsolidatedPickupLocation(storeName: string, baseSiteId: string, userId: string, cartId: string, options?: Models.CommerceWebservicesV2CreateConsolidatedPickupLocationOptionalParams): Promise<Models.CreateConsolidatedPickupLocationResponse>;
    /**
     * @param storeName The name of the store where items will be picked up
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param callback The callback
     */
    createConsolidatedPickupLocation(storeName: string, baseSiteId: string, userId: string, cartId: string, callback: msRest.ServiceCallback<Models.CartModificationList>): void;
    /**
     * @param storeName The name of the store where items will be picked up
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param options The optional parameters
     * @param callback The callback
     */
    createConsolidatedPickupLocation(storeName: string, baseSiteId: string, userId: string, cartId: string, options: Models.CommerceWebservicesV2CreateConsolidatedPickupLocationOptionalParams, callback: msRest.ServiceCallback<Models.CartModificationList>): void;
    /**
     * Returns the delivery mode selected for the cart.
     * @summary Get the delivery mode selected for the cart.
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param [options] The optional parameters
     * @returns Promise<Models.GetCartDeliveryModeResponse>
     */
    getCartDeliveryMode(baseSiteId: string, userId: string, cartId: string, options?: Models.CommerceWebservicesV2GetCartDeliveryModeOptionalParams): Promise<Models.GetCartDeliveryModeResponse>;
    /**
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param callback The callback
     */
    getCartDeliveryMode(baseSiteId: string, userId: string, cartId: string, callback: msRest.ServiceCallback<Models.DeliveryMode>): void;
    /**
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param options The optional parameters
     * @param callback The callback
     */
    getCartDeliveryMode(baseSiteId: string, userId: string, cartId: string, options: Models.CommerceWebservicesV2GetCartDeliveryModeOptionalParams, callback: msRest.ServiceCallback<Models.DeliveryMode>): void;
    /**
     * Sets the delivery mode with a given identifier for the cart.
     * @summary Sets the delivery mode for a cart.
     * @param deliveryModeId Delivery mode identifier (code)
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    replaceCartDeliveryMode(deliveryModeId: string, baseSiteId: string, userId: string, cartId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param deliveryModeId Delivery mode identifier (code)
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param callback The callback
     */
    replaceCartDeliveryMode(deliveryModeId: string, baseSiteId: string, userId: string, cartId: string, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param deliveryModeId Delivery mode identifier (code)
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param options The optional parameters
     * @param callback The callback
     */
    replaceCartDeliveryMode(deliveryModeId: string, baseSiteId: string, userId: string, cartId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Deletes the delivery mode from the cart.
     * @summary Deletes the delivery mode from the cart.
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    removeCartDeliveryMode(baseSiteId: string, userId: string, cartId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param callback The callback
     */
    removeCartDeliveryMode(baseSiteId: string, userId: string, cartId: string, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param options The optional parameters
     * @param callback The callback
     */
    removeCartDeliveryMode(baseSiteId: string, userId: string, cartId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Returns all delivery modes supported for the current base store and cart delivery address. A
     * delivery address must be set for the cart, otherwise an empty list will be returned.
     * @summary Get all delivery modes for the current store and delivery address.
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param [options] The optional parameters
     * @returns Promise<Models.GetCartDeliveryModesResponse>
     */
    getCartDeliveryModes(baseSiteId: string, userId: string, cartId: string, options?: Models.CommerceWebservicesV2GetCartDeliveryModesOptionalParams): Promise<Models.GetCartDeliveryModesResponse>;
    /**
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param callback The callback
     */
    getCartDeliveryModes(baseSiteId: string, userId: string, cartId: string, callback: msRest.ServiceCallback<Models.DeliveryModeList>): void;
    /**
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param options The optional parameters
     * @param callback The callback
     */
    getCartDeliveryModes(baseSiteId: string, userId: string, cartId: string, options: Models.CommerceWebservicesV2GetCartDeliveryModesOptionalParams, callback: msRest.ServiceCallback<Models.DeliveryModeList>): void;
    /**
     * Assigns an email to the cart. This step is required to make a guest checkout.
     * @summary Assigns an email to the cart.
     * @param email Email of the guest user. It will be used during the checkout process.
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    replaceCartGuestUser(email: string, baseSiteId: string, userId: string, cartId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param email Email of the guest user. It will be used during the checkout process.
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param callback The callback
     */
    replaceCartGuestUser(email: string, baseSiteId: string, userId: string, cartId: string, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param email Email of the guest user. It will be used during the checkout process.
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param options The optional parameters
     * @param callback The callback
     */
    replaceCartGuestUser(email: string, baseSiteId: string, userId: string, cartId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Returns cart entries.
     * @summary Get cart entries.
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param [options] The optional parameters
     * @returns Promise<Models.GetCartEntriesResponse>
     */
    getCartEntries(baseSiteId: string, userId: string, cartId: string, options?: Models.CommerceWebservicesV2GetCartEntriesOptionalParams): Promise<Models.GetCartEntriesResponse>;
    /**
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param callback The callback
     */
    getCartEntries(baseSiteId: string, userId: string, cartId: string, callback: msRest.ServiceCallback<Models.OrderEntryList>): void;
    /**
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param options The optional parameters
     * @param callback The callback
     */
    getCartEntries(baseSiteId: string, userId: string, cartId: string, options: Models.CommerceWebservicesV2GetCartEntriesOptionalParams, callback: msRest.ServiceCallback<Models.OrderEntryList>): void;
    /**
     * Adds a product to the cart.
     * @summary Adds a product to the cart.
     * @param entry Request body parameter that contains details such as the product code
     * (product.code), the quantity of product (quantity), and the pickup store name
     * (deliveryPointOfService.name).
     *
     * The DTO is in XML or .json format.
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param baseSiteId Base site identifier
     * @param [options] The optional parameters
     * @returns Promise<Models.CreateCartEntryResponse>
     */
    createCartEntry(entry: Models.OrderEntry, userId: string, cartId: string, baseSiteId: string, options?: Models.CommerceWebservicesV2CreateCartEntryOptionalParams): Promise<Models.CreateCartEntryResponse>;
    /**
     * @param entry Request body parameter that contains details such as the product code
     * (product.code), the quantity of product (quantity), and the pickup store name
     * (deliveryPointOfService.name).
     *
     * The DTO is in XML or .json format.
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param baseSiteId Base site identifier
     * @param callback The callback
     */
    createCartEntry(entry: Models.OrderEntry, userId: string, cartId: string, baseSiteId: string, callback: msRest.ServiceCallback<Models.CartModification>): void;
    /**
     * @param entry Request body parameter that contains details such as the product code
     * (product.code), the quantity of product (quantity), and the pickup store name
     * (deliveryPointOfService.name).
     *
     * The DTO is in XML or .json format.
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param baseSiteId Base site identifier
     * @param options The optional parameters
     * @param callback The callback
     */
    createCartEntry(entry: Models.OrderEntry, userId: string, cartId: string, baseSiteId: string, options: Models.CommerceWebservicesV2CreateCartEntryOptionalParams, callback: msRest.ServiceCallback<Models.CartModification>): void;
    /**
     * Returns the details of the cart entries.
     * @summary Get the details of the cart entries.
     * @param entryNumber The entry number. Each entry in a cart has an entry number. Cart entries are
     * numbered in ascending order, starting with zero (0).
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param [options] The optional parameters
     * @returns Promise<Models.GetCartEntryResponse>
     */
    getCartEntry(entryNumber: number, baseSiteId: string, userId: string, cartId: string, options?: Models.CommerceWebservicesV2GetCartEntryOptionalParams): Promise<Models.GetCartEntryResponse>;
    /**
     * @param entryNumber The entry number. Each entry in a cart has an entry number. Cart entries are
     * numbered in ascending order, starting with zero (0).
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param callback The callback
     */
    getCartEntry(entryNumber: number, baseSiteId: string, userId: string, cartId: string, callback: msRest.ServiceCallback<Models.OrderEntry>): void;
    /**
     * @param entryNumber The entry number. Each entry in a cart has an entry number. Cart entries are
     * numbered in ascending order, starting with zero (0).
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param options The optional parameters
     * @param callback The callback
     */
    getCartEntry(entryNumber: number, baseSiteId: string, userId: string, cartId: string, options: Models.CommerceWebservicesV2GetCartEntryOptionalParams, callback: msRest.ServiceCallback<Models.OrderEntry>): void;
    /**
     * Updates the quantity of a single cart entry and the details of the store where the cart entry
     * will be picked up. Attributes not provided in request will be defined again (set to null or
     * default)
     * @summary Set quantity and store details of a cart entry.
     * @param entryNumber The entry number. Each entry in a cart has an entry number. Cart entries are
     * numbered in ascending order, starting with zero (0).
     * @param entry Request body parameter that contains details such as the quantity of product
     * (quantity), and the pickup store name (deliveryPointOfService.name)
     *
     * The DTO is in XML or .json format.
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param baseSiteId Base site identifier
     * @param [options] The optional parameters
     * @returns Promise<Models.ReplaceCartEntryResponse>
     */
    replaceCartEntry(entryNumber: number, entry: Models.OrderEntry, userId: string, cartId: string, baseSiteId: string, options?: Models.CommerceWebservicesV2ReplaceCartEntryOptionalParams): Promise<Models.ReplaceCartEntryResponse>;
    /**
     * @param entryNumber The entry number. Each entry in a cart has an entry number. Cart entries are
     * numbered in ascending order, starting with zero (0).
     * @param entry Request body parameter that contains details such as the quantity of product
     * (quantity), and the pickup store name (deliveryPointOfService.name)
     *
     * The DTO is in XML or .json format.
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param baseSiteId Base site identifier
     * @param callback The callback
     */
    replaceCartEntry(entryNumber: number, entry: Models.OrderEntry, userId: string, cartId: string, baseSiteId: string, callback: msRest.ServiceCallback<Models.CartModification>): void;
    /**
     * @param entryNumber The entry number. Each entry in a cart has an entry number. Cart entries are
     * numbered in ascending order, starting with zero (0).
     * @param entry Request body parameter that contains details such as the quantity of product
     * (quantity), and the pickup store name (deliveryPointOfService.name)
     *
     * The DTO is in XML or .json format.
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param baseSiteId Base site identifier
     * @param options The optional parameters
     * @param callback The callback
     */
    replaceCartEntry(entryNumber: number, entry: Models.OrderEntry, userId: string, cartId: string, baseSiteId: string, options: Models.CommerceWebservicesV2ReplaceCartEntryOptionalParams, callback: msRest.ServiceCallback<Models.CartModification>): void;
    /**
     * Deletes cart entry.
     * @summary Deletes cart entry.
     * @param entryNumber The entry number. Each entry in a cart has an entry number. Cart entries are
     * numbered in ascending order, starting with zero (0).
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    removeCartEntry(entryNumber: number, baseSiteId: string, userId: string, cartId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param entryNumber The entry number. Each entry in a cart has an entry number. Cart entries are
     * numbered in ascending order, starting with zero (0).
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param callback The callback
     */
    removeCartEntry(entryNumber: number, baseSiteId: string, userId: string, cartId: string, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param entryNumber The entry number. Each entry in a cart has an entry number. Cart entries are
     * numbered in ascending order, starting with zero (0).
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param options The optional parameters
     * @param callback The callback
     */
    removeCartEntry(entryNumber: number, baseSiteId: string, userId: string, cartId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Updates the quantity of a single cart entry and the details of the store where the cart entry
     * will be picked up.
     * @summary Update quantity and store details of a cart entry.
     * @param entryNumber The entry number. Each entry in a cart has an entry number. Cart entries are
     * numbered in ascending order, starting with zero (0).
     * @param entry Request body parameter that contains details such as the quantity of product
     * (quantity), and the pickup store name (deliveryPointOfService.name)
     *
     * The DTO is in XML or .json format.
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param baseSiteId Base site identifier
     * @param [options] The optional parameters
     * @returns Promise<Models.UpdateCartEntryResponse>
     */
    updateCartEntry(entryNumber: number, entry: Models.OrderEntry, userId: string, cartId: string, baseSiteId: string, options?: Models.CommerceWebservicesV2UpdateCartEntryOptionalParams): Promise<Models.UpdateCartEntryResponse>;
    /**
     * @param entryNumber The entry number. Each entry in a cart has an entry number. Cart entries are
     * numbered in ascending order, starting with zero (0).
     * @param entry Request body parameter that contains details such as the quantity of product
     * (quantity), and the pickup store name (deliveryPointOfService.name)
     *
     * The DTO is in XML or .json format.
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param baseSiteId Base site identifier
     * @param callback The callback
     */
    updateCartEntry(entryNumber: number, entry: Models.OrderEntry, userId: string, cartId: string, baseSiteId: string, callback: msRest.ServiceCallback<Models.CartModification>): void;
    /**
     * @param entryNumber The entry number. Each entry in a cart has an entry number. Cart entries are
     * numbered in ascending order, starting with zero (0).
     * @param entry Request body parameter that contains details such as the quantity of product
     * (quantity), and the pickup store name (deliveryPointOfService.name)
     *
     * The DTO is in XML or .json format.
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param baseSiteId Base site identifier
     * @param options The optional parameters
     * @param callback The callback
     */
    updateCartEntry(entryNumber: number, entry: Models.OrderEntry, userId: string, cartId: string, baseSiteId: string, options: Models.CommerceWebservicesV2UpdateCartEntryOptionalParams, callback: msRest.ServiceCallback<Models.CartModification>): void;
    /**
     * Flags a cart for deletion (the cart doesn't have corresponding save cart attributes anymore).
     * The cart is not actually deleted from the database. But with the removal of the saved cart
     * attributes, this cart will be taken care of by the cart removal job just like any other cart.
     * @summary Flag a cart for deletion.
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param [options] The optional parameters
     * @returns Promise<Models.DoUpdateFlagForDeletionResponse>
     */
    doUpdateFlagForDeletion(cartId: string, baseSiteId: string, userId: string, options?: Models.CommerceWebservicesV2DoUpdateFlagForDeletionOptionalParams): Promise<Models.DoUpdateFlagForDeletionResponse>;
    /**
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param callback The callback
     */
    doUpdateFlagForDeletion(cartId: string, baseSiteId: string, userId: string, callback: msRest.ServiceCallback<Models.SaveCartResult>): void;
    /**
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param options The optional parameters
     * @param callback The callback
     */
    doUpdateFlagForDeletion(cartId: string, baseSiteId: string, userId: string, options: Models.CommerceWebservicesV2DoUpdateFlagForDeletionOptionalParams, callback: msRest.ServiceCallback<Models.SaveCartResult>): void;
    /**
     * Returns the necessary information for creating a subscription that contacts the payment provider
     * directly. This information contains the payment provider URL and a list of parameters that are
     * needed to create the subscription.
     * @summary Get information needed for create subscription
     * @param responseUrl The URL that the payment provider uses to return payment information.
     * Possible values for responseUrl include the following: “orderPage_cancelResponseURL”,
     * “orderPage_declineResponseURL”, and “orderPage_receiptResponseURL”.
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param [options] The optional parameters
     * @returns Promise<Models.GetSopPaymentRequestDetailsResponse>
     */
    getSopPaymentRequestDetails(responseUrl: string, baseSiteId: string, userId: string, cartId: string, options?: Models.CommerceWebservicesV2GetSopPaymentRequestDetailsOptionalParams): Promise<Models.GetSopPaymentRequestDetailsResponse>;
    /**
     * @param responseUrl The URL that the payment provider uses to return payment information.
     * Possible values for responseUrl include the following: “orderPage_cancelResponseURL”,
     * “orderPage_declineResponseURL”, and “orderPage_receiptResponseURL”.
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param callback The callback
     */
    getSopPaymentRequestDetails(responseUrl: string, baseSiteId: string, userId: string, cartId: string, callback: msRest.ServiceCallback<Models.PaymentRequest>): void;
    /**
     * @param responseUrl The URL that the payment provider uses to return payment information.
     * Possible values for responseUrl include the following: “orderPage_cancelResponseURL”,
     * “orderPage_declineResponseURL”, and “orderPage_receiptResponseURL”.
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param options The optional parameters
     * @param callback The callback
     */
    getSopPaymentRequestDetails(responseUrl: string, baseSiteId: string, userId: string, cartId: string, options: Models.CommerceWebservicesV2GetSopPaymentRequestDetailsOptionalParams, callback: msRest.ServiceCallback<Models.PaymentRequest>): void;
    /**
     * Returns information related to creating subscription request results. If there is no response
     * from the payment provider, a "202 Accepted" status is returned. If the subscription is created
     * successfully, the payment details are returned. Otherwise, an error response is returned.
     *
     * Note, the “Try it out” button is not enabled for this method (always returns an error) because
     * the Extended Carts Controller handles parameters differently, depending on which payment
     * provider is used. For more information about this controller, please refer to the
     * “acceleratorwebservicesaddon AddOn” documentation on help.hybris.com.
     * @summary Get information about create subscription request results
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param [options] The optional parameters
     * @returns Promise<Models.GetSopPaymentResponseResponse>
     */
    getSopPaymentResponse(baseSiteId: string, userId: string, cartId: string, options?: Models.CommerceWebservicesV2GetSopPaymentResponseOptionalParams): Promise<Models.GetSopPaymentResponseResponse>;
    /**
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param callback The callback
     */
    getSopPaymentResponse(baseSiteId: string, userId: string, cartId: string, callback: msRest.ServiceCallback<Models.PaymentDetails>): void;
    /**
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param options The optional parameters
     * @param callback The callback
     */
    getSopPaymentResponse(baseSiteId: string, userId: string, cartId: string, options: Models.CommerceWebservicesV2GetSopPaymentResponseOptionalParams, callback: msRest.ServiceCallback<Models.PaymentDetails>): void;
    /**
     * Handles the response from the payment provider and creates payment details.
     *
     * Note, the “Try it out” button is not enabled for this method (always returns an error) because
     * the Extended Carts Controller handles parameters differently, depending on which payment
     * provider is used. For more information about this controller, please refer to the
     * “acceleratorwebservicesaddon AddOn” documentation on help.hybris.com.
     * @summary Handles response from payment provider and create payment details
     * @param fields Response configuration. This is the list of fields that should be returned in the
     * response body. Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param [options] The optional parameters
     * @returns Promise<Models.DoHandleSopPaymentResponseResponse>
     */
    doHandleSopPaymentResponse(fields: Models.Fields71, baseSiteId: string, userId: string, cartId: string, options?: msRest.RequestOptionsBase): Promise<Models.DoHandleSopPaymentResponseResponse>;
    /**
     * @param fields Response configuration. This is the list of fields that should be returned in the
     * response body. Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param callback The callback
     */
    doHandleSopPaymentResponse(fields: Models.Fields71, baseSiteId: string, userId: string, cartId: string, callback: msRest.ServiceCallback<Models.PaymentDetails>): void;
    /**
     * @param fields Response configuration. This is the list of fields that should be returned in the
     * response body. Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param options The optional parameters
     * @param callback The callback
     */
    doHandleSopPaymentResponse(fields: Models.Fields71, baseSiteId: string, userId: string, cartId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PaymentDetails>): void;
    /**
     * Deletes the payment provider response related to the specified cart.
     * @summary Deletes payment provider response related to cart.
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    removeSopPaymentResponse(baseSiteId: string, userId: string, cartId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param callback The callback
     */
    removeSopPaymentResponse(baseSiteId: string, userId: string, cartId: string, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param options The optional parameters
     * @param callback The callback
     */
    removeSopPaymentResponse(baseSiteId: string, userId: string, cartId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Defines the details of a new credit card, and assigns this payment option to the cart.
     * @summary Defines and assigns details of a new credit card payment to the cart.
     * @param paymentDetails Request body parameter that contains details such as the name on the card
     * (accountHolderName), the card number (cardNumber), the card type (cardType.code), the month of
     * the expiry date (expiryMonth), the year of the expiry date (expiryYear), whether the payment
     * details should be saved (saved), whether the payment details should be set as default
     * (defaultPaymentInfo), and the billing address (billingAddress.firstName,
     * billingAddress.lastName, billingAddress.titleCode, billingAddress.country.isocode,
     * billingAddress.line1, billingAddress.line2, billingAddress.town, billingAddress.postalCode,
     * billingAddress.region.isocode)
     *
     * The DTO is in XML or .json format.
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param [options] The optional parameters
     * @returns Promise<Models.CreateCartPaymentDetailsResponse>
     */
    createCartPaymentDetails(paymentDetails: Models.PaymentDetails, baseSiteId: string, userId: string, cartId: string, options?: Models.CommerceWebservicesV2CreateCartPaymentDetailsOptionalParams): Promise<Models.CreateCartPaymentDetailsResponse>;
    /**
     * @param paymentDetails Request body parameter that contains details such as the name on the card
     * (accountHolderName), the card number (cardNumber), the card type (cardType.code), the month of
     * the expiry date (expiryMonth), the year of the expiry date (expiryYear), whether the payment
     * details should be saved (saved), whether the payment details should be set as default
     * (defaultPaymentInfo), and the billing address (billingAddress.firstName,
     * billingAddress.lastName, billingAddress.titleCode, billingAddress.country.isocode,
     * billingAddress.line1, billingAddress.line2, billingAddress.town, billingAddress.postalCode,
     * billingAddress.region.isocode)
     *
     * The DTO is in XML or .json format.
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param callback The callback
     */
    createCartPaymentDetails(paymentDetails: Models.PaymentDetails, baseSiteId: string, userId: string, cartId: string, callback: msRest.ServiceCallback<Models.PaymentDetails>): void;
    /**
     * @param paymentDetails Request body parameter that contains details such as the name on the card
     * (accountHolderName), the card number (cardNumber), the card type (cardType.code), the month of
     * the expiry date (expiryMonth), the year of the expiry date (expiryYear), whether the payment
     * details should be saved (saved), whether the payment details should be set as default
     * (defaultPaymentInfo), and the billing address (billingAddress.firstName,
     * billingAddress.lastName, billingAddress.titleCode, billingAddress.country.isocode,
     * billingAddress.line1, billingAddress.line2, billingAddress.town, billingAddress.postalCode,
     * billingAddress.region.isocode)
     *
     * The DTO is in XML or .json format.
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param options The optional parameters
     * @param callback The callback
     */
    createCartPaymentDetails(paymentDetails: Models.PaymentDetails, baseSiteId: string, userId: string, cartId: string, options: Models.CommerceWebservicesV2CreateCartPaymentDetailsOptionalParams, callback: msRest.ServiceCallback<Models.PaymentDetails>): void;
    /**
     * Sets credit card payment details for the cart.
     * @summary Sets credit card payment details for the cart.
     * @param paymentDetailsId Payment details identifier.
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    replaceCartPaymentDetails(paymentDetailsId: string, baseSiteId: string, userId: string, cartId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param paymentDetailsId Payment details identifier.
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param callback The callback
     */
    replaceCartPaymentDetails(paymentDetailsId: string, baseSiteId: string, userId: string, cartId: string, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param paymentDetailsId Payment details identifier.
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param options The optional parameters
     * @param callback The callback
     */
    replaceCartPaymentDetails(paymentDetailsId: string, baseSiteId: string, userId: string, cartId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Returns information about the promotions applied on the cart. Requests pertaining to promotions
     * have been developed for the previous version of promotions and vouchers, and as a result, some
     * of them are currently not compatible with the new promotions engine.
     * @summary Get information about promotions applied on cart.
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param [options] The optional parameters
     * @returns Promise<Models.GetCartPromotionsResponse>
     */
    getCartPromotions(baseSiteId: string, userId: string, cartId: string, options?: Models.CommerceWebservicesV2GetCartPromotionsOptionalParams): Promise<Models.GetCartPromotionsResponse>;
    /**
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param callback The callback
     */
    getCartPromotions(baseSiteId: string, userId: string, cartId: string, callback: msRest.ServiceCallback<Models.PromotionResultList>): void;
    /**
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param options The optional parameters
     * @param callback The callback
     */
    getCartPromotions(baseSiteId: string, userId: string, cartId: string, options: Models.CommerceWebservicesV2GetCartPromotionsOptionalParams, callback: msRest.ServiceCallback<Models.PromotionResultList>): void;
    /**
     * Enables a promotion for the order based on the promotionId defined for the cart. Requests
     * pertaining to promotions have been developed for the previous version of promotions and
     * vouchers, and as a result, some of them are currently not compatible with the new promotions
     * engine.
     * @summary Enables promotions based on the promotionsId of the cart.
     * @param promotionId Promotion identifier (code)
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    doApplyCartPromotion(promotionId: string, baseSiteId: string, userId: string, cartId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param promotionId Promotion identifier (code)
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param callback The callback
     */
    doApplyCartPromotion(promotionId: string, baseSiteId: string, userId: string, cartId: string, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param promotionId Promotion identifier (code)
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param options The optional parameters
     * @param callback The callback
     */
    doApplyCartPromotion(promotionId: string, baseSiteId: string, userId: string, cartId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Returns information about a promotion (with a specific promotionId), that has been applied on
     * the cart. Requests pertaining to promotions have been developed for the previous version of
     * promotions and vouchers, and as a result, some of them are currently not compatible with the new
     * promotions engine.
     * @summary Get information about promotion applied on cart.
     * @param promotionId Promotion identifier (code)
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param [options] The optional parameters
     * @returns Promise<Models.GetCartPromotionResponse>
     */
    getCartPromotion(promotionId: string, baseSiteId: string, userId: string, cartId: string, options?: Models.CommerceWebservicesV2GetCartPromotionOptionalParams): Promise<Models.GetCartPromotionResponse>;
    /**
     * @param promotionId Promotion identifier (code)
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param callback The callback
     */
    getCartPromotion(promotionId: string, baseSiteId: string, userId: string, cartId: string, callback: msRest.ServiceCallback<Models.PromotionResultList>): void;
    /**
     * @param promotionId Promotion identifier (code)
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param options The optional parameters
     * @param callback The callback
     */
    getCartPromotion(promotionId: string, baseSiteId: string, userId: string, cartId: string, options: Models.CommerceWebservicesV2GetCartPromotionOptionalParams, callback: msRest.ServiceCallback<Models.PromotionResultList>): void;
    /**
     * Disables the promotion for the order based on the promotionId defined for the cart. Requests
     * pertaining to promotions have been developed for the previous version of promotions and
     * vouchers, and as a result, some of them are currently not compatible with the new promotions
     * engine.
     * @summary Disables the promotion based on the promotionsId of the cart.
     * @param promotionId Promotion identifier (code)
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    removeCartPromotion(promotionId: string, baseSiteId: string, userId: string, cartId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param promotionId Promotion identifier (code)
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param callback The callback
     */
    removeCartPromotion(promotionId: string, baseSiteId: string, userId: string, cartId: string, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param promotionId Promotion identifier (code)
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param options The optional parameters
     * @param callback The callback
     */
    removeCartPromotion(promotionId: string, baseSiteId: string, userId: string, cartId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Restore a saved cart.
     * @summary Restore a saved cart.
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param [options] The optional parameters
     * @returns Promise<Models.DoUpdateSavedCartResponse>
     */
    doUpdateSavedCart(cartId: string, baseSiteId: string, userId: string, options?: Models.CommerceWebservicesV2DoUpdateSavedCartOptionalParams): Promise<Models.DoUpdateSavedCartResponse>;
    /**
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param callback The callback
     */
    doUpdateSavedCart(cartId: string, baseSiteId: string, userId: string, callback: msRest.ServiceCallback<Models.SaveCartResult>): void;
    /**
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param options The optional parameters
     * @param callback The callback
     */
    doUpdateSavedCart(cartId: string, baseSiteId: string, userId: string, options: Models.CommerceWebservicesV2DoUpdateSavedCartOptionalParams, callback: msRest.ServiceCallback<Models.SaveCartResult>): void;
    /**
     * Explicitly saves a cart.
     * @summary Explicitly saves a cart.
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param [options] The optional parameters
     * @returns Promise<Models.DoSaveCartResponse>
     */
    doSaveCart(cartId: string, baseSiteId: string, userId: string, options?: Models.CommerceWebservicesV2DoSaveCartOptionalParams): Promise<Models.DoSaveCartResponse>;
    /**
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param callback The callback
     */
    doSaveCart(cartId: string, baseSiteId: string, userId: string, callback: msRest.ServiceCallback<Models.SaveCartResult>): void;
    /**
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param options The optional parameters
     * @param callback The callback
     */
    doSaveCart(cartId: string, baseSiteId: string, userId: string, options: Models.CommerceWebservicesV2DoSaveCartOptionalParams, callback: msRest.ServiceCallback<Models.SaveCartResult>): void;
    /**
     * Returns a saved cart for an authenticated user. The cart is identified using the "cartId"
     * parameter.
     * @summary Get a saved cart.
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param [options] The optional parameters
     * @returns Promise<Models.GetSavedCartResponse>
     */
    getSavedCart(cartId: string, baseSiteId: string, userId: string, options?: Models.CommerceWebservicesV2GetSavedCartOptionalParams): Promise<Models.GetSavedCartResponse>;
    /**
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param callback The callback
     */
    getSavedCart(cartId: string, baseSiteId: string, userId: string, callback: msRest.ServiceCallback<Models.SaveCartResult>): void;
    /**
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param options The optional parameters
     * @param callback The callback
     */
    getSavedCart(cartId: string, baseSiteId: string, userId: string, options: Models.CommerceWebservicesV2GetSavedCartOptionalParams, callback: msRest.ServiceCallback<Models.SaveCartResult>): void;
    /**
     * Returns a list of vouchers applied to the cart.
     * @summary Get a list of vouchers applied to the cart.
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param [options] The optional parameters
     * @returns Promise<Models.GetCartVouchersResponse>
     */
    getCartVouchers(baseSiteId: string, userId: string, cartId: string, options?: Models.CommerceWebservicesV2GetCartVouchersOptionalParams): Promise<Models.GetCartVouchersResponse>;
    /**
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param callback The callback
     */
    getCartVouchers(baseSiteId: string, userId: string, cartId: string, callback: msRest.ServiceCallback<Models.VoucherList>): void;
    /**
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param options The optional parameters
     * @param callback The callback
     */
    getCartVouchers(baseSiteId: string, userId: string, cartId: string, options: Models.CommerceWebservicesV2GetCartVouchersOptionalParams, callback: msRest.ServiceCallback<Models.VoucherList>): void;
    /**
     * Applies a voucher based on the voucherId defined for the cart.
     * @summary Applies a voucher based on the voucherId defined for the cart.
     * @param voucherId Voucher identifier (code)
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    doApplyCartVoucher(voucherId: string, baseSiteId: string, userId: string, cartId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param voucherId Voucher identifier (code)
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param callback The callback
     */
    doApplyCartVoucher(voucherId: string, baseSiteId: string, userId: string, cartId: string, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param voucherId Voucher identifier (code)
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param options The optional parameters
     * @param callback The callback
     */
    doApplyCartVoucher(voucherId: string, baseSiteId: string, userId: string, cartId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Deletes a voucher based on the voucherId defined for the current cart.
     * @summary Deletes a voucher defined for the current cart.
     * @param voucherId Voucher identifier (code)
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    removeCartVoucher(voucherId: string, baseSiteId: string, userId: string, cartId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param voucherId Voucher identifier (code)
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param callback The callback
     */
    removeCartVoucher(voucherId: string, baseSiteId: string, userId: string, cartId: string, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param voucherId Voucher identifier (code)
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param cartId Cart identifier: cart code for logged in user, cart guid for anonymous user,
     * 'current' for the last modified cart
     * @param options The optional parameters
     * @param callback The callback
     */
    removeCartVoucher(voucherId: string, baseSiteId: string, userId: string, cartId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary A user can give consent.
     * @param consentTemplateId Consent template ID.
     * @param consentTemplateVersion Consent template version.
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param [options] The optional parameters
     * @returns Promise<Models.DoGiveConsentResponse>
     */
    doGiveConsent(consentTemplateId: string, consentTemplateVersion: number, baseSiteId: string, userId: string, options?: msRest.RequestOptionsBase): Promise<Models.DoGiveConsentResponse>;
    /**
     * @param consentTemplateId Consent template ID.
     * @param consentTemplateVersion Consent template version.
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param callback The callback
     */
    doGiveConsent(consentTemplateId: string, consentTemplateVersion: number, baseSiteId: string, userId: string, callback: msRest.ServiceCallback<Models.ConsentTemplate>): void;
    /**
     * @param consentTemplateId Consent template ID.
     * @param consentTemplateVersion Consent template version.
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param options The optional parameters
     * @param callback The callback
     */
    doGiveConsent(consentTemplateId: string, consentTemplateVersion: number, baseSiteId: string, userId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ConsentTemplate>): void;
    /**
     * If the user consent was given, the consent is withdrawn. If consent was already withdrawn then
     * returns consent already withdrawn error. If there is no such consent then returns not found. If
     * the current user is an anonymous user then returns access denied error.
     * @summary Withdraw the user consent for a given consent code.
     * @param consentCode consentCode
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    removeConsent(consentCode: string, baseSiteId: string, userId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param consentCode consentCode
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param callback The callback
     */
    removeConsent(consentCode: string, baseSiteId: string, userId: string, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param consentCode consentCode
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param options The optional parameters
     * @param callback The callback
     */
    removeConsent(consentCode: string, baseSiteId: string, userId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * If user has not given or withdrawn consent to any of the template, no given or withdraw date is
     * returned.
     * @summary Fetch the list of consents
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param [options] The optional parameters
     * @returns Promise<Models.GetConsentTemplatesResponse>
     */
    getConsentTemplates(baseSiteId: string, userId: string, options?: Models.CommerceWebservicesV2GetConsentTemplatesOptionalParams): Promise<Models.GetConsentTemplatesResponse>;
    /**
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param callback The callback
     */
    getConsentTemplates(baseSiteId: string, userId: string, callback: msRest.ServiceCallback<Models.ConsentTemplateList>): void;
    /**
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param options The optional parameters
     * @param callback The callback
     */
    getConsentTemplates(baseSiteId: string, userId: string, options: Models.CommerceWebservicesV2GetConsentTemplatesOptionalParams, callback: msRest.ServiceCallback<Models.ConsentTemplateList>): void;
    /**
     * If user has not given or withdrawn consent to the template, no given or withdraw date is
     * returned.
     * @summary Fetch the consent.
     * @param consentTemplateId Consent template id.
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param [options] The optional parameters
     * @returns Promise<Models.GetConsentTemplateResponse>
     */
    getConsentTemplate(consentTemplateId: string, baseSiteId: string, userId: string, options?: Models.CommerceWebservicesV2GetConsentTemplateOptionalParams): Promise<Models.GetConsentTemplateResponse>;
    /**
     * @param consentTemplateId Consent template id.
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param callback The callback
     */
    getConsentTemplate(consentTemplateId: string, baseSiteId: string, userId: string, callback: msRest.ServiceCallback<Models.ConsentTemplate>): void;
    /**
     * @param consentTemplateId Consent template id.
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param options The optional parameters
     * @param callback The callback
     */
    getConsentTemplate(consentTemplateId: string, baseSiteId: string, userId: string, options: Models.CommerceWebservicesV2GetConsentTemplateOptionalParams, callback: msRest.ServiceCallback<Models.ConsentTemplate>): void;
    /**
     * Returns all customer groups of a customer.
     * @summary Get all customer groups of a customer.
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param [options] The optional parameters
     * @returns Promise<Models.GetUserCustomerGroupsResponse>
     */
    getUserCustomerGroups(baseSiteId: string, userId: string, options?: Models.CommerceWebservicesV2GetUserCustomerGroupsOptionalParams): Promise<Models.GetUserCustomerGroupsResponse>;
    /**
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param callback The callback
     */
    getUserCustomerGroups(baseSiteId: string, userId: string, callback: msRest.ServiceCallback<Models.UserGroupList>): void;
    /**
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param options The optional parameters
     * @param callback The callback
     */
    getUserCustomerGroups(baseSiteId: string, userId: string, options: Models.CommerceWebservicesV2GetUserCustomerGroupsOptionalParams, callback: msRest.ServiceCallback<Models.UserGroupList>): void;
    /**
     * Changes a customer's login name. Requires the customer's current password.
     * @summary Changes customer's login name.
     * @param newLogin Customer's new login name. Customer login is case insensitive.
     * @param password Customer's current password.
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    replaceUserLogin(newLogin: string, password: string, baseSiteId: string, userId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param newLogin Customer's new login name. Customer login is case insensitive.
     * @param password Customer's current password.
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param callback The callback
     */
    replaceUserLogin(newLogin: string, password: string, baseSiteId: string, userId: string, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param newLogin Customer's new login name. Customer login is case insensitive.
     * @param password Customer's current password.
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param options The optional parameters
     * @param callback The callback
     */
    replaceUserLogin(newLogin: string, password: string, baseSiteId: string, userId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Returns order history data for all orders placed by a specified user for a specified base store.
     * The response can display the results across multiple pages, if required.
     * @summary Get order history for user.
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param [options] The optional parameters
     * @returns Promise<Models.GetUserOrderHistoryResponse>
     */
    getUserOrderHistory(baseSiteId: string, userId: string, options?: Models.CommerceWebservicesV2GetUserOrderHistoryOptionalParams): Promise<Models.GetUserOrderHistoryResponse>;
    /**
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param callback The callback
     */
    getUserOrderHistory(baseSiteId: string, userId: string, callback: msRest.ServiceCallback<Models.OrderHistoryList>): void;
    /**
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param options The optional parameters
     * @param callback The callback
     */
    getUserOrderHistory(baseSiteId: string, userId: string, options: Models.CommerceWebservicesV2GetUserOrderHistoryOptionalParams, callback: msRest.ServiceCallback<Models.OrderHistoryList>): void;
    /**
     * In the response header, the "x-total-count" indicates the total number of orders placed by a
     * specified user for a specified base store.
     * @summary Get total number of orders.
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    countUserOrders(baseSiteId: string, userId: string, options?: Models.CommerceWebservicesV2CountUserOrdersOptionalParams): Promise<msRest.RestResponse>;
    /**
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param callback The callback
     */
    countUserOrders(baseSiteId: string, userId: string, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param options The optional parameters
     * @param callback The callback
     */
    countUserOrders(baseSiteId: string, userId: string, options: Models.CommerceWebservicesV2CountUserOrdersOptionalParams, callback: msRest.ServiceCallback<void>): void;
    /**
     * Authorizes the cart and places the order. The response contains the new order data.
     * @summary Place a order.
     * @param cartId Cart code for logged in user, cart GUID for guest checkout
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param [options] The optional parameters
     * @returns Promise<Models.PlaceOrderResponse>
     */
    placeOrder(cartId: string, baseSiteId: string, userId: string, options?: Models.CommerceWebservicesV2PlaceOrderOptionalParams): Promise<Models.PlaceOrderResponse>;
    /**
     * @param cartId Cart code for logged in user, cart GUID for guest checkout
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param callback The callback
     */
    placeOrder(cartId: string, baseSiteId: string, userId: string, callback: msRest.ServiceCallback<Models.Order>): void;
    /**
     * @param cartId Cart code for logged in user, cart GUID for guest checkout
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param options The optional parameters
     * @param callback The callback
     */
    placeOrder(cartId: string, baseSiteId: string, userId: string, options: Models.CommerceWebservicesV2PlaceOrderOptionalParams, callback: msRest.ServiceCallback<Models.Order>): void;
    /**
     * Returns specific order details based on a specific order code. The response contains detailed
     * order information.
     * @summary Get a order.
     * @param code Order GUID (Globally Unique Identifier) or order CODE
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param [options] The optional parameters
     * @returns Promise<Models.GetUserOrdersResponse>
     */
    getUserOrders(code: string, baseSiteId: string, userId: string, options?: Models.CommerceWebservicesV2GetUserOrdersOptionalParams): Promise<Models.GetUserOrdersResponse>;
    /**
     * @param code Order GUID (Globally Unique Identifier) or order CODE
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param callback The callback
     */
    getUserOrders(code: string, baseSiteId: string, userId: string, callback: msRest.ServiceCallback<Models.Order>): void;
    /**
     * @param code Order GUID (Globally Unique Identifier) or order CODE
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param options The optional parameters
     * @param callback The callback
     */
    getUserOrders(code: string, baseSiteId: string, userId: string, options: Models.CommerceWebservicesV2GetUserOrdersOptionalParams, callback: msRest.ServiceCallback<Models.Order>): void;
    /**
     * Changes customer's password.
     * @summary Changes customer's password
     * @param newParameter New password.
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    replaceUserPassword(newParameter: string, baseSiteId: string, userId: string, options?: Models.CommerceWebservicesV2ReplaceUserPasswordOptionalParams): Promise<msRest.RestResponse>;
    /**
     * @param newParameter New password.
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param callback The callback
     */
    replaceUserPassword(newParameter: string, baseSiteId: string, userId: string, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param newParameter New password.
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param options The optional parameters
     * @param callback The callback
     */
    replaceUserPassword(newParameter: string, baseSiteId: string, userId: string, options: Models.CommerceWebservicesV2ReplaceUserPasswordOptionalParams, callback: msRest.ServiceCallback<void>): void;
    /**
     * Return customer's credit card payment details list.
     * @summary Get customer's credit card payment details list.
     * @param saved Type of payment details.
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param [options] The optional parameters
     * @returns Promise<Models.GetPaymentDetailsListResponse>
     */
    getPaymentDetailsList(saved: boolean, baseSiteId: string, userId: string, options?: Models.CommerceWebservicesV2GetPaymentDetailsListOptionalParams): Promise<Models.GetPaymentDetailsListResponse>;
    /**
     * @param saved Type of payment details.
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param callback The callback
     */
    getPaymentDetailsList(saved: boolean, baseSiteId: string, userId: string, callback: msRest.ServiceCallback<Models.PaymentDetailsList>): void;
    /**
     * @param saved Type of payment details.
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param options The optional parameters
     * @param callback The callback
     */
    getPaymentDetailsList(saved: boolean, baseSiteId: string, userId: string, options: Models.CommerceWebservicesV2GetPaymentDetailsListOptionalParams, callback: msRest.ServiceCallback<Models.PaymentDetailsList>): void;
    /**
     * Returns a customer's credit card payment details for the specified paymentDetailsId.
     * @summary Get customer's credit card payment details.
     * @param paymentDetailsId Payment details identifier.
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param [options] The optional parameters
     * @returns Promise<Models.GetPaymentDetailsResponse>
     */
    getPaymentDetails(paymentDetailsId: string, baseSiteId: string, userId: string, options?: Models.CommerceWebservicesV2GetPaymentDetailsOptionalParams): Promise<Models.GetPaymentDetailsResponse>;
    /**
     * @param paymentDetailsId Payment details identifier.
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param callback The callback
     */
    getPaymentDetails(paymentDetailsId: string, baseSiteId: string, userId: string, callback: msRest.ServiceCallback<Models.PaymentDetails>): void;
    /**
     * @param paymentDetailsId Payment details identifier.
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param options The optional parameters
     * @param callback The callback
     */
    getPaymentDetails(paymentDetailsId: string, baseSiteId: string, userId: string, options: Models.CommerceWebservicesV2GetPaymentDetailsOptionalParams, callback: msRest.ServiceCallback<Models.PaymentDetails>): void;
    /**
     * Updates existing customer's credit card payment info based on the payment info ID. Attributes
     * not given in request will be defined again (set to null or default).
     * @summary Updates existing customer's credit card payment info.
     * @param paymentDetailsId Payment details identifier.
     * @param paymentDetails Payment details object.
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    replacePaymentDetails(paymentDetailsId: string, paymentDetails: Models.PaymentDetails, baseSiteId: string, userId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param paymentDetailsId Payment details identifier.
     * @param paymentDetails Payment details object.
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param callback The callback
     */
    replacePaymentDetails(paymentDetailsId: string, paymentDetails: Models.PaymentDetails, baseSiteId: string, userId: string, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param paymentDetailsId Payment details identifier.
     * @param paymentDetails Payment details object.
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param options The optional parameters
     * @param callback The callback
     */
    replacePaymentDetails(paymentDetailsId: string, paymentDetails: Models.PaymentDetails, baseSiteId: string, userId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Deletes a customer's credit card payment details based on a specified paymentDetailsId.
     * @summary Deletes customer's credit card payment details.
     * @param paymentDetailsId Payment details identifier.
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    removePaymentDetails(paymentDetailsId: string, baseSiteId: string, userId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param paymentDetailsId Payment details identifier.
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param callback The callback
     */
    removePaymentDetails(paymentDetailsId: string, baseSiteId: string, userId: string, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param paymentDetailsId Payment details identifier.
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param options The optional parameters
     * @param callback The callback
     */
    removePaymentDetails(paymentDetailsId: string, baseSiteId: string, userId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Updates an existing customer's credit card payment details based on the specified
     * paymentDetailsId. Only those attributes provided in the request will be updated.
     * @summary Updates existing customer's credit card payment details.
     * @param paymentDetailsId Payment details identifier.
     * @param paymentDetails Payment details object
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    updatePaymentDetails(paymentDetailsId: string, paymentDetails: Models.PaymentDetails, baseSiteId: string, userId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param paymentDetailsId Payment details identifier.
     * @param paymentDetails Payment details object
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param callback The callback
     */
    updatePaymentDetails(paymentDetailsId: string, paymentDetails: Models.PaymentDetails, baseSiteId: string, userId: string, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param paymentDetailsId Payment details identifier.
     * @param paymentDetails Payment details object
     * @param baseSiteId Base site identifier
     * @param userId User identifier or one of the literals : 'current' for currently authenticated
     * user, 'anonymous' for anonymous user
     * @param options The optional parameters
     * @param callback The callback
     */
    updatePaymentDetails(paymentDetailsId: string, paymentDetails: Models.PaymentDetails, baseSiteId: string, userId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Returns details of a single voucher that is specified by its voucher identification code.
     * @summary Get a voucher based on code.
     * @param code Voucher identifier (code)
     * @param baseSiteId Base site identifier
     * @param [options] The optional parameters
     * @returns Promise<Models.GetVoucherResponse>
     */
    getVoucher(code: string, baseSiteId: string, options?: Models.CommerceWebservicesV2GetVoucherOptionalParams): Promise<Models.GetVoucherResponse>;
    /**
     * @param code Voucher identifier (code)
     * @param baseSiteId Base site identifier
     * @param callback The callback
     */
    getVoucher(code: string, baseSiteId: string, callback: msRest.ServiceCallback<Models.Voucher>): void;
    /**
     * @param code Voucher identifier (code)
     * @param baseSiteId Base site identifier
     * @param options The optional parameters
     * @param callback The callback
     */
    getVoucher(code: string, baseSiteId: string, options: Models.CommerceWebservicesV2GetVoucherOptionalParams, callback: msRest.ServiceCallback<Models.Voucher>): void;
}
export { CommerceWebservicesV2, CommerceWebservicesV2Context, Models as CommerceWebservicesV2Models, Mappers as CommerceWebservicesV2Mappers };
//# sourceMappingURL=commerceWebservicesV2.d.ts.map