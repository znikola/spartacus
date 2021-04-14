import { NgModule } from '@angular/core';
import { StylingConnectorService } from './connectors/styling-connector.service';
import { facadeProviders } from './facade/facade-providers';

@NgModule({
  providers: [StylingConnectorService, ...facadeProviders],
})
export class LayoutCoreModule {}
