import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProductService } from '@spartacus/core';
import { CmsComponentData } from '@spartacus/storefront';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { NextSellComponentModel } from '../../cms.model';
import { NextSellService } from './next-sell.service';
@Component({
  selector: 'upscale-next-sell',
  templateUrl: './next-sell.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NextSellComponent {
  products$: Observable<Observable<string>[]> = this.component.data$.pipe(
    switchMap(() => this.nextSellService.load())
  );

  constructor(
    protected component: CmsComponentData<NextSellComponentModel>,
    protected nextSellService: NextSellService,
    protected productService: ProductService
  ) {}

  getProduct(id: string): Observable<any> {
    return this.productService.get(id);
  }
}
