import { Environment } from './models/environment.model';

export const environment: Environment = {
  production: true,
  occBaseUrl:
    build.process.env.SPARTACUS_BASE_URL ??
    'https://spartacus-devci767.eastus.cloudapp.azure.com:9002',
  occApiPrefix: build.process.env.SPARTACUS_API_PREFIX ?? '/occ/v2/',
  cds: build.process.env.SPARTACUS_CDS,
  b2b: build.process.env.SPARTACUS_B2B,
  cdc: build.process.env.SPARTACUS_CDC,
  productConfig: build.process.env.SPARTACUS_PRODUCT_CONFIGURATOR ?? true,
};
