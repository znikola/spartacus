import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CmsConfig, provideDefaultConfig } from '@spartacus/core';
import { BrowseComponent } from './browse.component';

@NgModule({
  imports: [CommonModule],
  providers: [
    provideDefaultConfig(<CmsConfig>{
      cmsComponents: {
        BROWSE: {
          component: BrowseComponent,
        },
      },
    }),
  ],
  declarations: [BrowseComponent],
})
export class BrowseModule {}
