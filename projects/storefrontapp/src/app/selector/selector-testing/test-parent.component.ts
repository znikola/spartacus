import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { TestParameters } from './parameters-test';
import { getRandom, range } from './utils';

@Component({
  selector: 'cx-test-parent',
  templateUrl: './test-parent.component.html',
  styles: [':host { padding: 10px; }'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestParentComponent {
  // PARAMETERS: ================================
  depth = TestParameters.depth;
  copiesNum = TestParameters.copiesNum;
  // END PARAMETERS: ============================

  constructor(public cdr: ChangeDetectorRef) {
    window['TestStatic_cdr'] = cdr;
  }
  sum = 0;

  copiesArr = range(this.copiesNum);

  zero() {
    this.sum = 0;
  }
  increment = () => {
    this.sum = this.sum + 1;
  };

  log() {
    console.log(this.sum);
  }

  getParentSomeInput() {
    return getRandom();
  }
}
