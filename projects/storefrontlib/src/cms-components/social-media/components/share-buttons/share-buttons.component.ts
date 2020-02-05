import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Inject,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ICON_TYPE } from '../../../misc/icon/index';
import { ShareLinksService } from '../../share-links.service';

@Component({
  selector: 'cx-share-buttons',
  templateUrl: './share-buttons.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShareButtonsComponent implements OnInit {
  productID: string;

  iconTypes = ICON_TYPE;
  readonly document: Document;
  productUrl: string;
  text = ' ';
  shareButtons;

  constructor(
    @Inject(DOCUMENT) document,
    protected shareLinksService: ShareLinksService
  ) {
    this.document = document;
  }

  ngOnInit() {
    this.productUrl = this.document.location.origin + '/p/' + this.productID;

    //Injection token is still open point
    this.shareButtons = this.shareLinksService.getShareLinks(
      this.productUrl,
      this.text
    );
  }
}
