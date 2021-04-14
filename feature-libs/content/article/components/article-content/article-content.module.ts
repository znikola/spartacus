import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CmsConfig, provideDefaultConfig } from '@spartacus/core';
import { ArticleContentComponent } from './article-content.component';

@NgModule({
  imports: [CommonModule],
  providers: [
    provideDefaultConfig(<CmsConfig>{
      cmsComponents: {
        ARTICLE_DETAILS: {
          component: ArticleContentComponent,
        },
      },
    }),
  ],
  declarations: [ArticleContentComponent],
})
export class ArticleContentModule {}
