import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CmsConfig, provideDefaultConfig } from '@spartacus/core';
import { PageComponentModule } from '@spartacus/storefront';
import { ImageComponent } from './image.component';

@NgModule({
  imports: [CommonModule, PageComponentModule],
  providers: [
    provideDefaultConfig(<CmsConfig>{
      cmsComponents: {
        IMAGE: {
          component: ImageComponent,
        },
      },
    }),
  ],
  declarations: [ImageComponent],
})
export class ImageModule {}
