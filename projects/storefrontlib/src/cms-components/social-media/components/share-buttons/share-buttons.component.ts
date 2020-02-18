import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ICON_TYPE } from '../../../misc/icon/index';
import { ShareLinksService } from '../../services/share-links-service/share-links.service';
import { ShareLink } from '../../share-link.model';
import { CurrentProductService } from '../../../product/current-product.service';
import { Product } from '@spartacus/core';
import { Observable } from 'rxjs';
import { filter, distinctUntilChanged, switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'cx-share-buttons',
  templateUrl: './share-buttons.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShareButtonsComponent {
  product$: Observable<Product> = this.currentProductService.getProduct();

  iconTypes = ICON_TYPE;
  shareButtons$: Observable<ShareLink[]> = this.product$.pipe(
    filter(p => !!p),
    map(p => p.summary),
    distinctUntilChanged(),
    switchMap(productSummary => this.getShareLinks(productSummary))
  );

  constructor(
    protected shareLinksService: ShareLinksService,
    protected currentProductService: CurrentProductService
  ) {}

  private getShareLinks(productSummary: string): Observable<ShareLink[]> {
    return this.shareLinksService.getShareLinks(productSummary);
  }
}
