import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeadlineComponent } from './headline.component';
@NgModule({
  imports: [CommonModule],
  declarations: [HeadlineComponent],
  exports: [HeadlineComponent],
})
export class HeadlineModule {}
