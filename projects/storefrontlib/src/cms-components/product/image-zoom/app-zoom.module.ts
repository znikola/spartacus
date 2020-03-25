import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppZoomComponent } from './app-zoom.component';
import { ZoomComponent } from './zoom.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppZoomComponent, ZoomComponent],
  exports: [AppZoomComponent],
})
export class AppZoomModule {}
