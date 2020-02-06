import { Component } from '@angular/core';
import { TestService } from './test-service';

@Component({
  selector: 'cx-test-root',
  template: `
    <h1>ROOT</h1>
    <button (click)="parentVisible = !parentVisible">Toggle</button>
    <button (click)="hello()">HELLO</button>
    <button (click)="report()">Report CD</button>
    <hr />
    <ng-container *ngIf="parentVisible">
      <router-outlet></router-outlet>
    </ng-container>
  `,
})
export class TestRootComponent {
  constructor(public service: TestService) {}

  parentVisible = false;

  hello() {
    performance.mark('spikeSubject');
    this.service.spikeSubject$$.next('hello');
  }

  report() {
    window['f'](window['mark_cd']);
    window['f'](window['mark_ngDoCheck']);
  }
}
