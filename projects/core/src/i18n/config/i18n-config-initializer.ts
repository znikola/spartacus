import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ConfigInitializer } from '../../config/config-initializer/config-initializer';
import { ConfigInitializerService } from '../../config/config-initializer/config-initializer.service';
import { SiteContextConfig } from '../../site-context/config/site-context-config';
import { I18nConfig } from './i18n-config';

@Injectable({ providedIn: 'root' })
export class I18nConfigInitializer implements ConfigInitializer {
  constructor(protected configInitService: ConfigInitializerService) {}

  readonly scopes = ['i18n.fallbackLang'];
  readonly configFactory = () => this.resolveConfig().toPromise();

  /**
   * Emits the `I18nConfig` with a `fallbackLang` basing on the default language in the `SiteContextConfig`.
   * If `fallbackLang` was already configured statically, the empty object is emitted.
   */
  protected resolveConfig(): Observable<I18nConfig> {
    return this.configInitService.getStable('context.language').pipe(
      map(
        (config: SiteContextConfig & I18nConfig): I18nConfig =>
          typeof config?.i18n?.fallbackLang === 'undefined'
            ? {
                i18n: {
                  // the first item in the array `context.language` is the default language
                  fallbackLang: config?.context?.language?.[0],
                },
              }
            : {}
      )
    );
  }
}
