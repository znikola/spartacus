import {
  storeFinderTranslationChunksConfig,
  storeFinderTranslations,
} from '@spartacus/misc/storefinder/assets';
import { StoreFinderRootModule } from '@spartacus/misc/storefinder/root';
import {
  B2cStorefrontModule,
  ProductServiceModule,
} from '@spartacus/storefront';
import { FeatureEnvironment } from '../models/feature.model';

export const b2cFeature: FeatureEnvironment = {
  imports: [
    B2cStorefrontModule.withConfig({
      context: {
        urlParameters: ['baseSite', 'language', 'currency'],
        baseSite: [
          'electronics-spa',
          'electronics',
          'apparel-de',
          'apparel-uk',
          'apparel-uk-spa',
        ],
      },
      cart: {
        selectiveCart: {
          enabled: true,
        },
      },

      featureModules: {
        storeFinder: {
          module: () =>
            import('@spartacus/misc/storefinder').then(
              (m) => m.StoreFinderModule
            ),
        },
      },
      i18n: {
        resources: storeFinderTranslations,
        chunks: storeFinderTranslationChunksConfig,
      },
    }),
    StoreFinderRootModule,
    ProductServiceModule,
  ],
};
