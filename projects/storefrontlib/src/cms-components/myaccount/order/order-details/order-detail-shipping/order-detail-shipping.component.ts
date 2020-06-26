import { Component, OnInit } from '@angular/core';
import {
  Address,
  DeliveryMode,
  Order,
  PaymentDetails,
  TranslationService,
} from '@spartacus/core';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Card } from '../../../../../shared/components/card/card.component';
import { OrderDetailsService } from '../order-details.service';

@Component({
  selector: 'cx-order-details-shipping',
  templateUrl: './order-detail-shipping.component.html',
})
export class OrderDetailShippingComponent implements OnInit {
  constructor(
    private orderDetailsService: OrderDetailsService,
    private translation: TranslationService
  ) {}

  order$: Observable<Order>;

  ngOnInit() {
    this.order$ = this.orderDetailsService.getOrderDetails();
  }

  /**
   * @deprecated since 2.1.  Functionality moved to shared component OrderShippingComponent.
   */
  getAddressCardContent(address: Address): Observable<Card> {
    return combineLatest([
      this.translation.translate('addressCard.shipTo'),
    ]).pipe(
      map(([textTitle]) => {
        return {
          title: textTitle,
          textBold: `${address.firstName} ${address.lastName}`,
          text: [
            address.line1,
            address.line2,
            `${address.town}, ${address.country.isocode}, ${address.postalCode}`,
            address.phone,
          ],
        };
      })
    );
  }

  /**
   * @deprecated since 2.1.  Functionality moved to shared component OrderShippingComponent.
   */
  getBillingAddressCardContent(billingAddress: Address): Observable<Card> {
    return combineLatest([
      this.translation.translate('addressCard.billTo'),
    ]).pipe(
      map(([textTitle]) => {
        return {
          title: textTitle,
          textBold: `${billingAddress.firstName} ${billingAddress.lastName}`,
          text: [
            billingAddress.line1,
            billingAddress.line2,
            `${billingAddress.town}, ${billingAddress.country.isocode}, ${billingAddress.postalCode}`,
            billingAddress.phone,
          ],
        };
      })
    );
  }

  /**
   * @deprecated since 2.1.  Functionality moved to shared component OrderShippingComponent.
   */
  getPaymentCardContent(payment: PaymentDetails): Observable<Card> {
    return combineLatest([
      this.translation.translate('paymentForm.payment'),
      this.translation.translate('paymentCard.expires', {
        month: payment.expiryMonth,
        year: payment.expiryYear,
      }),
    ]).pipe(
      map(([textTitle, textExpires]) => {
        return {
          title: textTitle,
          textBold: payment.accountHolderName,
          text: [payment.cardType.name, payment.cardNumber, textExpires],
        };
      })
    );
  }

  /**
   * @deprecated since 2.1.  Functionality moved to shared component OrderShippingComponent.
   */
  getAccountPaymentCardContent(order: Order): Observable<Card> {
    return combineLatest([
      this.translation.translate('paymentForm.payment'),
      this.translation.translate('orderDetails.payByAccount'),
      this.translation.translate('orderDetails.purchaseOrderId'),
      this.translation.translate('orderDetails.costCenter'),
      this.translation.translate('orderDetails.unit'),
    ]).pipe(
      map(
        ([
          textTitle,
          textPayByAccount,
          textPurchaseOrderId,
          textCostCenter,
          textUnit,
        ]) => {
          return {
            title: textTitle,
            textBold: textPayByAccount,
            text: [
              `${textPurchaseOrderId}: ${order.purchaseOrderNumber}`,
              `${textCostCenter}: ${order.costCenter.name}`,
              `${textUnit}: ${order.costCenter.unit.name}`,
            ],
          };
        }
      )
    );
  }

  /**
   * @deprecated since 2.1.  Functionality moved to shared component OrderShippingComponent.
   */
  getShippingMethodCardContent(shipping: DeliveryMode): Observable<Card> {
    return combineLatest([
      this.translation.translate('checkoutShipping.shippingMethod'),
    ]).pipe(
      map(([textTitle]) => {
        return {
          title: textTitle,
          textBold: shipping.name,
          text: [shipping.description],
        };
      })
    );
  }
}
