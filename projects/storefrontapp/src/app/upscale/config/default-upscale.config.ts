import { UpscaleConfig } from './upscale.config';

// https://prod-qa-checkout-pwa.cfapps.us10.hana.ondemand.com/
export const unknown = {
  baseUrl: 'https://qa-prod-approuter-caas2-sap.cfapps.us10.hana.ondemand.com',
  experienceId: 'e531ace1-867f-449a-a173-242a0e23f6fb',
};

export const gapUsMobileExpConfig = {
  baseUrl:
    'https://cxlive19a-approuter-caas2-sap.cfapps.us10.hana.ondemand.com',
  experienceId: '92fede25-f001-4245-baa3-481ddc4db91f',
};

export const oldNavyPwaExpConfig = {
  baseUrl:
    'https://cxlive19a-approuter-caas2-sap.cfapps.us10.hana.ondemand.com',
  experienceId: 'bf8e507c-239b-4e71-a512-2f3bf505b465',
};

export const defaultUpscaleConfig: UpscaleConfig = {
  upscale: gapUsMobileExpConfig,
};
