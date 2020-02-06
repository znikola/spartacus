import { Pipe, PipeTransform } from '@angular/core';
import { resolveCxEventToken } from './cx-event-token';

/**
 * Returns a fresh function which calls the given callback with given arguments , but preserved the original `this` context.
 * The arguments which are `cxEvent` replacement token are replaced with the `$event` value coming from an output.
 *
 * Thanks to Angular Pipe memoization, creating fresh function happens only on the change of the callback or its arguments.
 */
@Pipe({
  name: 'cxArgs',
})
export class ArgsPipe implements PipeTransform {
  constructor() {}

  transform(callback: Function, ...args: any[]): Function {
    return $event => resolveCxEventToken(callback, args, $event);
  }
}
