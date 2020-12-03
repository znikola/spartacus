import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CheckoutStepService } from '../checkout/index';

@Component({
  selector: 'cx-checkout-product-service',
  template: `<div>
    CheckoutProductServiceComponent rendered
    <button (click)="back()">BACK</button>
    <button (click)="next()">NEXT</button>
  </div>`,
})
export class CheckoutProductServiceComponent {
  constructor(
    protected checkoutStepService: CheckoutStepService,
    protected activatedRoute: ActivatedRoute
  ) {}

  next(): void {
    this.checkoutStepService.next(this.activatedRoute);
  }

  back(): void {
    this.checkoutStepService.back(this.activatedRoute);
  }
}
