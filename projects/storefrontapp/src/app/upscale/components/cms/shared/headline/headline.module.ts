import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeadingDirective } from './heading.directive';
import { HeadlineComponent } from './headline.component';
@NgModule({
  imports: [CommonModule],
  declarations: [HeadlineComponent, HeadingDirective],
  exports: [HeadlineComponent, HeadingDirective],
})
export class HeadlineModule {}
