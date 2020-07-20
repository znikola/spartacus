import { Component, OnInit } from '@angular/core';
import {
  B2BSearchConfig,
  CxDatePipe,
  EntitiesModel,
  OrderApproval,
  OrderApprovalService,
  RoutingService,
  TranslationService,
} from '@spartacus/core';
import { Observable } from 'rxjs';
import { filter, map, switchMap, tap } from 'rxjs/operators';
import { AbstractListingComponent } from '../../abstract-component/abstract-listing.component';

@Component({
  selector: 'cx-order-approval-list',
  templateUrl: './order-approval-list.component.html',
})
export class OrderApprovalListComponent extends AbstractListingComponent
  implements OnInit {
  constructor(
    protected routingService: RoutingService,
    protected orderApprovalService: OrderApprovalService,
    protected translation: TranslationService,
    protected cxDate: CxDatePipe
  ) {
    super(routingService);
  }

  ngOnInit(): void {
    this.data$ = <Observable<any>>this.queryParams$.pipe(
      tap((queryParams: B2BSearchConfig): void =>
        this.orderApprovalService.loadOrderApprovals(queryParams)
      ),
      switchMap((queryParams: B2BSearchConfig) =>
        this.orderApprovalService.getList(queryParams).pipe(
          filter(Boolean),
          map((orderApprovalList: EntitiesModel<OrderApproval>) => {
            return {
              sorts: orderApprovalList.sorts,
              pagination: orderApprovalList.pagination,
              values: orderApprovalList.values.map(
                (orderApproval: OrderApproval) => {
                  let status;
                  this.translation
                    .translate(
                      `orderDetails.statusDisplay_${orderApproval.order.statusDisplay}`
                    )
                    .subscribe((order_status) => {
                      status = order_status;
                    });

                  return {
                    approvalCode: orderApproval.code,
                    POCode: orderApproval.order.purchaseOrderNumber,
                    placedBy: `${orderApproval.order.orgCustomer.name} ${orderApproval.order.orgCustomer.orgUnit.name}`,
                    date: this.cxDate.transform(orderApproval.order.created),
                    status,
                    total: orderApproval.order.totalPrice.formattedValue,
                  };
                }
              ),
            };
          })
        )
      )
    );
  }
}
