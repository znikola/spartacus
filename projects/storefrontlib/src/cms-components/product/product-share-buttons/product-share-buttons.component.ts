import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ICON_TYPE } from '../../misc/icon/index';


@Component({
  selector: 'cx-product-share-buttons',
  templateUrl: './product-share-buttons.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductShareButtonsComponent {
  iconTypes = ICON_TYPE;
  productUrl = 'http://google.com';
  text ='Best Product. Check it out ';

}
