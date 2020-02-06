import { Component, Input } from '@angular/core';
import { ComponentOutlet } from '../../../selector/component-outlet';
import { ICON_TYPE } from './icon.model';

@Component({
  selector: 'cx-icon-outlet',
  templateUrl: '../../../selector/component-outlet.html',
})
export class IconOutletComponent extends ComponentOutlet {
  @Input()
  type: ICON_TYPE;
}
