import { Component } from '@angular/core';

@Component({
  selector: 'cx-zoom',
  templateUrl: './app-zoom.component.html',
  styleUrls: ['./app-zoom.component.css'],
})
export class AppZoomComponent {
  name = 'Angular';
  style: string;
  img = 'https://picsum.photos/300/200?random=1';
}
