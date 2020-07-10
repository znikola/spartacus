import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Product } from '@spartacus/core';

@Component({
  selector: 'cx-variant-generic-selector',
  templateUrl: './variant-generic-selector.component.html',
  styleUrls: ['./variant-generic-selector.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VariantGenericSelectorComponent implements OnInit {

  selectedIndex = 0;
  productMatrix = null;
  constructor() { }

  @Input()
  product: Product;

  ngOnInit() {
    let si = 0;
    let productMatrix = null;
    for (let i = 0; i < this.product.categories.length; i++) {
      const c = this.product.categories[i];
      if (i === 0) {
        productMatrix = this.product.variantMatrix;
      } else {
        productMatrix = productMatrix[si].elements;
      }
      console.log(productMatrix[0].parentVariantCategory.name);

      for (let k = 0; k < productMatrix.length; k++) {
        const cat = productMatrix[k];
        console.log(cat);
        if (cat.variantOption.code === this.product.code) {
          console.log('^^selected');
          si = i;
        }
      }
    }
  }

  getVariantMatrix(index: number) {
    if (index === 0) {
      // console.log(this.product.variantMatrix);
      this.productMatrix = this.product.variantMatrix;
      return this.productMatrix;
    } else {
      if (index === 2) {
        return this.productMatrix[this.selectedIndex].elements[this.selectedIndex].elements;
      }
      // if (!this.productMatrix) {
        // this.productMatrix = this.product.variantMatrix[this.selectedIndex].elements;
        // }
      // console.log(this.productMatrix[this.selectedIndex]);
      return this.productMatrix[this.selectedIndex].elements;
    }
  }

  isSelected(c, i) {
   const selected = this.product.code === c.variantOption.code ? true : false;
   if (selected) {
     this.selectedIndex = i;
   }
  //  console.log(selected, this.productMatrix);
   return selected;
  }
}
