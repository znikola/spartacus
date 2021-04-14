import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CmsConfig, provideDefaultConfig, UrlModule } from '@spartacus/core';
import { ImageComponent } from './image.component';

@NgModule({
  imports: [CommonModule, RouterModule, UrlModule],
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
