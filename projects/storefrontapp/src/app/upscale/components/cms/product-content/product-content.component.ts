import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProductService } from '@spartacus/core';
import { CmsComponentData } from '@spartacus/storefront';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ProductContentComponentModel } from '../../cms.model';

@Component({
  selector: 'upscale-product-content',
  templateUrl: 'product-content.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductContentComponent {
  componentData$: Observable<ProductContentComponentModel> = this.component
    .data$;

  product$ = this.componentData$.pipe(
    switchMap((data) => this.productService.get(data.link.value))
  );

  constructor(
    protected component: CmsComponentData<ProductContentComponentModel>,
    protected productService: ProductService
  ) {}
}
