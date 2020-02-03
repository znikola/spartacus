import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Inject,
  Input,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ICON_TYPE } from '../../misc/icon/index';

@Component({
  selector: 'cx-product-share-buttons',
  templateUrl: './product-share-buttons.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductShareButtonsComponent implements OnInit {
  @Input() productID;

  iconTypes = ICON_TYPE;
  readonly document: Document;
  productUrl: string;
  text = ' ';
  shareButtons;

  constructor(@Inject(DOCUMENT) document) {
    this.document = document;
  }

  ngOnInit() {
    this.productUrl =
      this.document.location.origin + '/product/' + this.productID;

      this.shareButtons = [{
        url: 'https://facebook.com/sharer/sharer.php?u='+this.productUrl,
        icon: this.iconTypes.FACEBOOK
      },{
        url: 'https://twitter.com/intent/tweet/?text='+this.text+'&url='+this.productUrl,
        icon: this.iconTypes.TWITTER
      },{
        url: 'mailto:?subject='+this.text+'&body='+this.productUrl,
        icon: this.iconTypes.EMAIL
      }];
  }
}
