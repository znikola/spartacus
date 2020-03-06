export class ClickEvent {
  ClickData: any;
  constructor(data: ClickEvent) {
    Object.assign(this, data);
  }
}

export class MouseDownEvent {
  MouseDownData: any;
  constructor(data: MouseDownEvent) {
    Object.assign(this, data);
  }
}

export class MouseUpEvent {
  MouseUpData: any;
  constructor(data: MouseUpEvent) {
    Object.assign(this, data);
  }
}

export class MouseHoverEvent {
  MouseHoverData: any;
  constructor(data: MouseHoverEvent) {
    Object.assign(this, data);
  }
}
