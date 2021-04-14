import { Provider } from '@angular/core';
import { LayoutStylingFacade } from '@spartacus/layout/root';
import { LayoutStylingService } from './layout-styling.service';

export const facadeProviders: Provider[] = [
  LayoutStylingService,
  {
    provide: LayoutStylingFacade,
    useExisting: LayoutStylingService,
  },
];
