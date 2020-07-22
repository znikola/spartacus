import { OrderApproval } from '../../../model/order-approval.model';
import { LoaderAction } from '../../../state/utils/loader/loader.action';
import { OrderApprovalActions } from '../actions/index';

export const orderApprovalInitialState = {};
export const orderApprovalsInitialState = undefined;

export function orderApprovalsEntitiesReducer(
  state: OrderApproval = orderApprovalInitialState,
  action: LoaderAction
): OrderApproval {
  switch (action.type) {
    case OrderApprovalActions.LOAD_ORDER_APPROVAL_SUCCESS:
      return action.payload;
    case OrderApprovalActions.MAKE_DECISION_SUCCESS:
      return state;
    case OrderApprovalActions.CLEAR_ORDER_APPROVAL_LIST:
      console.log('hello world', action.type);
      return {};
  }
  return state;
}

export function orderApprovalsListReducer(
  state = orderApprovalsInitialState,
  action: LoaderAction
): any {
  switch (action.type) {
    case OrderApprovalActions.LOAD_ORDER_APPROVALS_SUCCESS:
      return action.payload.page;
  }
  return state;
}
