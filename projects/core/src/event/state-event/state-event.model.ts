import { BaseEvent } from '../event-type';

export class StateEvent<T> extends BaseEvent {
  state: T;
}
