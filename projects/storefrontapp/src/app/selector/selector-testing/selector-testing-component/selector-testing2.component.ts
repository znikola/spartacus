import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SelectorTestingComponent } from './selector-testing.component';

@Component({
  selector: 'cx-selector-testing2',
  templateUrl: './selector-testing2.component.html',
  styles: [
    `
      :host {
        font-family: monospace;
        display: block;
        border-left: 5px solid blanchedalmond;
        padding-left: 10px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectorTesting2Component extends SelectorTestingComponent {}
