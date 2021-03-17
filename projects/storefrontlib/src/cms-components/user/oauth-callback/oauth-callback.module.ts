import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  PageLayoutComponent,
  PageLayoutModule,
} from '../../../cms-structure/page/index';
import { OAuthCallbackGuard } from './oauth-callback.guard';

@NgModule({
  imports: [
    PageLayoutModule,
    RouterModule.forChild([
      {
        path: null,
        canActivate: [OAuthCallbackGuard],
        component: PageLayoutComponent,
        data: { cxRoute: 'oAuthCallback' },
      },
    ]),
  ],
})
export class OAuthCallbackModule {}
