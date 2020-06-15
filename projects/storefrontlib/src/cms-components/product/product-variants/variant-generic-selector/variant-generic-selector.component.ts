import { Component, OnInit, Input } from '@angular/core';
import { Product } from '@spartacus/core';

@Component({
  selector: 'cx-variant-generic-selector',
  templateUrl: './variant-generic-selector.component.html',
  styleUrls: ['./variant-generic-selector.component.css']
})
export class VariantGenericSelectorComponent implements OnInit {

  constructor() { }

  @Input()
  product: Product;

  ngOnInit() {
  }

}
