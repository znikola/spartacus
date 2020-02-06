export class CxEventToken {}
export const cxEvent = new CxEventToken(); // an unique token to be replaced with a real value of an event, when it occurs

/**
 * Replaces the `cxEvent` placeholder token with given `$event` value in the array of arguments.
 * Then passes the resolved arguments to the given callback.
 */
export function resolveCxEventToken(
  callback: Function,
  args: any[],
  $event: any
): any {
  const resolvedArgs = args.map(x => (x === cxEvent ? $event : x));
  callback(...resolvedArgs);
}
