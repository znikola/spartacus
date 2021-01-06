import { InjectionToken } from '@angular/core';
import { Converter, DeliveryMode } from '@spartacus/core';

export const DELIVERY_MODE_NORMALIZER = new InjectionToken<
  Converter<any, DeliveryMode>
>('DeliveryModeNormalizer');
