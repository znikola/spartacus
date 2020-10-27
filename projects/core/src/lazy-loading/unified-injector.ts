import {
  AbstractType,
  Injectable,
  InjectFlags,
  InjectionToken,
  Injector,
  Type,
} from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map, scan, startWith } from 'rxjs/operators';
import { LazyModulesService } from './lazy-modules.service';

const NOT_FOUND_SYMBOL: any = {};

/**
 * UnifiedInjector provides a way to get instances of tokens not only once, from the root injector,
 * but also from lazy loaded module injectors that can be initialized over time.
 */
@Injectable({
  providedIn: 'root',
})
export class UnifiedInjector {
  /**
   * Gather all the injectors, with the root injector as a first one
   *
   */
  readonly injectors$: Observable<Injector> = this.lazyModules.modules$.pipe(
    map((moduleRef) => moduleRef.injector),
    startWith(this.rootInjector)
  );

  constructor(
    protected rootInjector: Injector,
    protected lazyModules: LazyModulesService
  ) {}

  /**
   * Gen instances for specified tokens.
   *
   * When notFoundValue is provided, it will consistently emit once per injector,
   * even if injector doesn't contain instances for specified token.
   * Otherwise, emissions will only involve cases, where new instances will be found.
   *
   * @param token
   * @param notFoundValue
   */
  get<T>(
    token: Type<T> | InjectionToken<T> | AbstractType<T>,
    notFoundValue?: T
  ): Observable<T> {
    return this.injectors$.pipe(
      map((injector, index) =>
        injector.get<T>(
          token,
          notFoundValue ?? NOT_FOUND_SYMBOL,
          // we want to get only Self instances from all injectors except the
          // first one, which is a root injector
          index ? InjectFlags.Self : undefined
        )
      ),
      filter((instance) => instance !== NOT_FOUND_SYMBOL)
    );
  }

  /**
   * Get multi provided instances for a specified token
   *
   * @param token
   */
  getMulti<T, K extends GetMultiParams<T>>(
    token: K
  ): Observable<GetMultiReturnType<T, K>> {
    return this.get(token as any, []).pipe(
      filter((instances) => {
        if (!Array.isArray(instances)) {
          throw new Error(
            `Multi-providers mixed with single providers for ${token.toString()}!`
          );
        }
        return instances.length > 0;
      }),
      scan((acc, services) => [...acc, ...services], [])
    ) as any;
  }
}

/**
 * Possible params in getMulti function.
 */
type GetMultiParams<T> = Type<T> | InjectionToken<T> | AbstractType<T>;

/**
 * Return type of getMulti function. This type is not 100% correct, but works nicely in common use cases.
 */
type GetMultiReturnType<T, K> = K extends Type<infer Res>
  ? Res[]
  : K extends InjectionToken<infer Res>
  ? Res extends Array<any>
    ? Res
    : Res[]
  : K extends AbstractType<infer Res>
  ? Res[]
  : T;
