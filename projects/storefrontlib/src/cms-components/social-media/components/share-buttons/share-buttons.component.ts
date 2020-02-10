import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Inject,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ICON_TYPE } from '../../../misc/icon/index';
import { ShareLinksService } from '../../share-links.service';
import { ShareLink } from '../../share-link.model';
import { CurrentProductService } from '../../../product/current-product.service';
import { Product } from '@spartacus/core';
import { Observable } from 'rxjs';
import { filter, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'cx-share-buttons',
  templateUrl: './share-buttons.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShareButtonsComponent implements OnInit {
  product$: Observable<Product> = this.currentProductService.getProduct();

  iconTypes = ICON_TYPE;
  readonly document: Document;
  shareButtons$: Observable<ShareLink[]> = this.product$.pipe(
    filter(p => !!p),
    distinctUntilChanged(),
    switchMap(productObject => this.getShareLinks(productObject))
  );

  constructor(
    @Inject(DOCUMENT) document,
    protected shareLinksService: ShareLinksService,
    protected currentProductService: CurrentProductService
  ) {
    this.document = document;
  }

  ngOnInit() {
    this.product$.subscribe();
  }
  private getShareLinks(product: Product): Observable<ShareLink[]> {
    const productUrl = this.document.location.origin + '/p/' + product.code;

    return this.shareLinksService.getShareLinks(productUrl, product.summary);
  }
}
