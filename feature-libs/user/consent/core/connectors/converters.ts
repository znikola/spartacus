import { InjectionToken } from '@angular/core';
import { Converter } from '@spartacus/core';
import { ConsentTemplate } from '@spartacus/user/consent/root';

export const CONSENT_TEMPLATE_NORMALIZER = new InjectionToken<
  Converter<any, ConsentTemplate>
>('ConsentTemplateNormalizer');
