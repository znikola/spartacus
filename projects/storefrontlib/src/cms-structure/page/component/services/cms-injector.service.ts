import { Injectable, Injector } from '@angular/core';
import { CmsComponent, CmsService } from '@spartacus/core';
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
    type: string,
    parentInjector?: Injector
  ): CmsComponentData<T> {
    return {
      uid: uid,
      data$: (parentInjector ?? this.injector)
        .get(CmsService)
        .getComponentData<T>(uid),
      configuration: this.cmsComponentsService.getComponentConfiguration(type),
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
          useValue: this.getCmsData(uid, type),
        },
        ...configProviders,
      ],
      parent: parentInjector ?? this.injector,
    });
  }
}
