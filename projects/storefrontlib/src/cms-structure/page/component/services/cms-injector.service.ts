import { Injectable, Injector } from '@angular/core';
import { CmsComponent, CmsService } from '@spartacus/core';
import { map, startWith } from 'rxjs/operators';
import { CmsComponentsService } from '../../../services/cms-components.service';
import { CmsComponentData } from '../../model/cms-component-data';

/**
 * Used to prepare injector for CMS components.
 *
 * Injector will take into account configured providers and provides CmsComponentData
 * for specified component's uid
 */
@Injectable({
  providedIn: 'root',
})
export class CmsInjectorService {
  constructor(
    protected cmsComponentsService: CmsComponentsService,
    protected injector: Injector
  ) {}

  private getCmsData<T extends CmsComponent>(
    uid: string,
    parentInjector?: Injector,
    type?: string
  ): CmsComponentData<T> {
    const ghostData = this.cmsComponentsService.getGhost(type);
    return {
      uid: uid,
      data$: (parentInjector ?? this.injector)
        .get(CmsService)
        .getComponentData<T>(uid)
        .pipe(
          startWith(ghostData),
          map((data) => ({
            ...ghostData,
            ...data,
          }))
        ),
    };
  }

  public getInjector(
    type: string,
    uid: string,
    parentInjector?: Injector
  ): Injector {
    const configProviders =
      this.cmsComponentsService.getMapping(type)?.providers ?? [];

    return Injector.create({
      providers: [
        {
          provide: CmsComponentData,
          useValue: this.getCmsData(uid, undefined, type),
        },
        ...configProviders,
      ],
      parent: parentInjector ?? this.injector,
    });
  }
}
