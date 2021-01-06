import { InjectionToken } from '@angular/core';
import { Converter, Order, PointOfService } from '@spartacus/core';

export const ORDER_NORMALIZER = new InjectionToken<Converter<any, Order>>(
  'OrderNormalizer'
);

export const POINT_OF_SERVICE_NORMALIZER = new InjectionToken<
  Converter<any, PointOfService>
>('PointOfServiceNormalizer');
