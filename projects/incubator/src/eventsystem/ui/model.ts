import { BaseEvent } from '@spartacus/core';

export class ClickEvent extends BaseEvent {
  ClickData?: any;
}
export class MouseDownEvent extends BaseEvent {
  MouseDownData?: any;
}
export class MouseUpEvent extends BaseEvent {
  MouseUpData?: any;
}
export class MouseHoverEvent extends BaseEvent {
  MouseHoverData?: any;
}
