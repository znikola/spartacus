import { BaseEvent } from '../event-type';

export class StateEvent<T> extends BaseEvent {
  state: T;

  constructor(payload?: { state: T }) {
    super();
    this.state = payload?.state;
  }
}
