export class StateEvent<T> {
  state: T;

  constructor(state?: T) {
    this.state = state;
  }
}
