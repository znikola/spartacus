import {
  ConfigInitializer,
  CONFIG_INITIALIZER,
} from '../../../config/config-initializer/config-initializer';
import { FeatureConfigService } from '../../../features-config/services/feature-config.service';
import { BASE_SITE_CONTEXT_ID } from '../../providers/context-ids';
import { SiteContextConfig } from '../site-context-config';
import { SiteContextConfigLoaderService } from './site-context-config-loader.service';

/**
 * Initializes the site context config
 */
export function initSiteContextConfig(
  configLoader: SiteContextConfigLoaderService,
  config: SiteContextConfig,
  featureConfigService: FeatureConfigService
): ConfigInitializer | null {
  // TODO(#11515): in 4.0 drop the feature level guard
  if (!featureConfigService.isLevel('3.2')) {
    return null;
  }

  /**
   * Load config for `context` from backend only when there is no static config for `context.baseSite`
   */
  if (!config.context || !config.context[BASE_SITE_CONTEXT_ID]) {
    return {
      scopes: ['context'],
      configFactory: () => configLoader.loadConfig().toPromise(),
    };
  }
  return null;
}

export const siteContextConfigInitializer = {
  provide: CONFIG_INITIALIZER,
  useFactory: initSiteContextConfig,
  deps: [
    SiteContextConfigLoaderService,
    SiteContextConfig,
    FeatureConfigService,
  ],
  multi: true,
};
