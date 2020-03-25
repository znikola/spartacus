import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppZoomComponent } from './app-zoom.component';
import { ZoomComponent } from './zoom.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppZoomComponent, ZoomComponent],
  bootstrap: [AppZoomComponent],
})
export class AppZoomModule {}
