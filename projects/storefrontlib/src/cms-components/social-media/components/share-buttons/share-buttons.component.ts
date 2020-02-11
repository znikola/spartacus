import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Inject,
  Optional,
  PLATFORM_ID,
} from '@angular/core';
import { DOCUMENT, isPlatformServer } from '@angular/common';
import { ICON_TYPE } from '../../../misc/icon/index';
import { ShareLinksService } from '../../share-links.service';
import { ShareLink } from '../../share-link.model';
import { CurrentProductService } from '../../../product/current-product.service';
import {
  Product,
  SemanticPathService,
  SERVER_REQUEST_ORIGIN,
} from '@spartacus/core';
import { Observable } from 'rxjs';
import { filter, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';

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

  @Optional()
  @Inject(SERVER_REQUEST_ORIGIN)
  protected serverRequestOrigin?: string;

  constructor(
    @Inject(DOCUMENT) document,
    @Inject(PLATFORM_ID) protected platformId,
    protected shareLinksService: ShareLinksService,
    protected currentProductService: CurrentProductService,
    private router: Router,
    private semanticPath: SemanticPathService
  ) {
    this.document = document;
  }

  ngOnInit() {
    this.product$.subscribe();
  }
  private getShareLinks(product: Product): Observable<ShareLink[]> {
    const productUrlParam = this.semanticPath.transform({
      cxRoute: 'product',
      params: product,
    });

    const serializedProductUrl = this.router.serializeUrl(
      this.router.createUrlTree(productUrlParam)
    );

    let origin;
    if (isPlatformServer(this.platformId)) {
      origin = this.serverRequestOrigin;
    } else {
      origin = this.document.location.origin;
    }

    const productUrl = origin + '/' + serializedProductUrl;

    return this.shareLinksService.getShareLinks(productUrl, product.summary);
  }
}
