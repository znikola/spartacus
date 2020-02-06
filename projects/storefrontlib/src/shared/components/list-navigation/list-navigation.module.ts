import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { CmsConfig, ConfigModule } from '@spartacus/core';
import { SelectorModule } from '../../../selector/selector.module';
import { PaginationComponent } from './pagination/pagination.component';
import { SortingComponent } from './sorting/sorting.component';

@NgModule({
  imports: [
    CommonModule,
    NgSelectModule,
    FormsModule,
    ConfigModule.withConfig(<CmsConfig>{
      cmsComponents: {
        'cx-pagination': {
          component: PaginationComponent,
        },
        'cx-sorting': {
          component: SortingComponent,
        },
      },
    }),
    SelectorModule,
  ],
  declarations: [PaginationComponent, SortingComponent],
  exports: [PaginationComponent, SortingComponent],
  entryComponents: [PaginationComponent, SortingComponent],
})
export class ListNavigationModule {}
