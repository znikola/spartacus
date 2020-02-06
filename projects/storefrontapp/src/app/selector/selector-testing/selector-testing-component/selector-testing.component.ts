import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { merge } from 'rxjs';
import { TestService } from '../test-service';
import { getRandom, range } from '../utils';

window['mark_cd'] = 'CD in SelectorTestingComponent';
window['mark_ngDoCheck'] = 'ngDoCheck in SelectorTestingComponent';
window['f'] = mark => {
  console.log(performance.getEntriesByName(mark).length, mark);
  performance.clearMarks(mark);
};

@Component({
  selector: 'cx-selector-testing',
  templateUrl: './selector-testing.component.html',
  styles: [
    `
      :host {
        font-family: monospace;
        display: block;
        border-left: 5px solid lightgreen;
        padding-left: 10px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectorTestingComponent implements OnChanges {
  constructor(public service: TestService, public cdr: ChangeDetectorRef) {
    window['SelectorTesting_cdr'] = cdr;
    window['last'] = this;
  }
  spike$ = new EventEmitter();

  @Input()
  depth: number;

  @Input()
  id: string;

  @Input()
  someInput: string;

  @Output()
  spike = merge(
    this.service.spikeSubject$
      .pipe
      //
      // filter(() => this.depth === 0) // only leafs
      // tslint:disable-next-line: triple-equals
      // filter(() => this.id == '0.0') // only specific one
      (),
    this.spike$ // or local spike
  );
  // pipe(tap(console.warn));

  range: number[];

  ngOnInit() {
    console.log('ngOnInit', this.id);
  }
  ngDoCheck() {
    performance.mark(window['mark_ngDoCheck']);
    console.log('ngDoCheck', this.id);
  }
  ngOnChanges() {
    console.log('ngOnChanges', this.id);
    this.range = range(this.depth); // depth is also a number of siblings
  }
  ngOnDestroy() {
    console.log('ngOnDestroy', this.id);
  }

  // tslint:disable-next-line: use-life-cycle-interface
  trackChangeDetection() {
    performance.mark(window['mark_cd']);
    return getRandom();
  }

  emitSpike = () => {
    this.spike$.emit();
  };

  getSomeInput() {
    return this.depth > 2 ? getRandom() : '';
  }
}
