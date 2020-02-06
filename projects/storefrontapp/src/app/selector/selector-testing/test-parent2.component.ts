import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TestParentComponent } from './test-parent.component';

@Component({
  selector: 'cx-test-parent2',
  templateUrl: './test-parent2.component.html',
  styles: [':host { padding: 10px; }'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestParent2Component extends TestParentComponent {}
