import { Rule, Tree } from '@angular-devkit/schematics';
import {
  BUDGET_ROUTING_CONFIG,
  COST_CENTER_ROUTING_CONFIG,
  DEFAULT_BUDGET_ROUTING_CONFIG,
  DEFAULT_COST_CENTER_ROUTING_CONFIG,
  DEFAULT_PERMISSION_ROUTING_CONFIG,
  DEFAULT_UNITS_ROUTING_CONFIG,
  DEFAULT_USER_GROUP_ROUTING_CONFIG,
  DEFAULT_USER_ROUTING_CONFIG,
  EXPRESS_CHECKOUT_SERVICE,
  PERMISSION_ROUTING_CONFIG,
  SPARTACUS_CHECKOUT_COMPONENTS,
  SPARTACUS_ORGANIZATION_ADMINISTRATION_COMPONENTS,
  SPARTACUS_ORGANIZATION_ADMINISTRATION_ROOT,
  SPARTACUS_STOREFRONTLIB,
  UNITS_ROUTING_CONFIG,
  USER_GROUP_ROUTING_CONFIG,
  USER_ROUTING_CONFIG,
} from '../../../shared/constants';
import { RenamedSymbol } from '../../../shared/utils/file-utils';
import { migrateRenamedSymbols } from '../../mechanism/rename-symbol/rename-symbol';

export const RENAMED_SYMBOLS_DATA: RenamedSymbol[] = [
  // feature-libs/organization/administration/root/config/default-budget-routing.config.ts
  {
    previousNode: BUDGET_ROUTING_CONFIG,
    previousImportPath: SPARTACUS_ORGANIZATION_ADMINISTRATION_COMPONENTS,
    newNode: DEFAULT_BUDGET_ROUTING_CONFIG,
    newImportPath: SPARTACUS_ORGANIZATION_ADMINISTRATION_ROOT,
  },
  // feature-libs/organization/administration/root/config/default-cost-center-routing.config.ts
  {
    previousNode: COST_CENTER_ROUTING_CONFIG,
    previousImportPath: SPARTACUS_ORGANIZATION_ADMINISTRATION_COMPONENTS,
    newNode: DEFAULT_COST_CENTER_ROUTING_CONFIG,
    newImportPath: SPARTACUS_ORGANIZATION_ADMINISTRATION_ROOT,
  },
  // feature-libs/organization/administration/root/config/default-permission-routing.config.ts
  {
    previousNode: PERMISSION_ROUTING_CONFIG,
    previousImportPath: SPARTACUS_ORGANIZATION_ADMINISTRATION_COMPONENTS,
    newNode: DEFAULT_PERMISSION_ROUTING_CONFIG,
    newImportPath: SPARTACUS_ORGANIZATION_ADMINISTRATION_ROOT,
  },
  // feature-libs/organization/administration/root/config/default-units-routing.config.ts
  {
    previousNode: UNITS_ROUTING_CONFIG,
    previousImportPath: SPARTACUS_ORGANIZATION_ADMINISTRATION_COMPONENTS,
    newNode: DEFAULT_UNITS_ROUTING_CONFIG,
    newImportPath: SPARTACUS_ORGANIZATION_ADMINISTRATION_ROOT,
  },
  // feature-libs/organization/administration/root/config/default-user-group-routing.config.ts
  {
    previousNode: USER_GROUP_ROUTING_CONFIG,
    previousImportPath: SPARTACUS_ORGANIZATION_ADMINISTRATION_COMPONENTS,
    newNode: DEFAULT_USER_GROUP_ROUTING_CONFIG,
    newImportPath: SPARTACUS_ORGANIZATION_ADMINISTRATION_ROOT,
  },
  // feature-libs/organization/administration/root/config/default-user-routing.config.ts
  {
    previousNode: USER_ROUTING_CONFIG,
    previousImportPath: SPARTACUS_ORGANIZATION_ADMINISTRATION_COMPONENTS,
    newNode: DEFAULT_USER_ROUTING_CONFIG,
    newImportPath: SPARTACUS_ORGANIZATION_ADMINISTRATION_ROOT,
  },
  // projects/storefrontlib/src/cms-components/product/config/default-view-config.ts
  {
    previousNode: 'defaultScrollConfig',
    previousImportPath: '@spartacus/storefront',
    newNode: 'defaultViewConfig',
  },
  // feature-libs/checkout/components/services/express-checkout.service.ts
  {
    previousNode: EXPRESS_CHECKOUT_SERVICE,
    previousImportPath: SPARTACUS_STOREFRONTLIB,
    newImportPath: SPARTACUS_CHECKOUT_COMPONENTS,
  },
];

export function migrate(): Rule {
  return (tree: Tree) => {
    return migrateRenamedSymbols(tree, RENAMED_SYMBOLS_DATA);
  };
}
