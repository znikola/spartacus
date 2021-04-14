import { Injectable } from '@angular/core';
import { facadeFactory } from '@spartacus/core';
import { Observable } from 'rxjs';
import { LAYOUT_STYLING_CORE_FEATURE } from '../feature-name';

export function layoutStylingFacadeFactory() {
  return facadeFactory({
    facade: LayoutStylingFacade,
    feature: LAYOUT_STYLING_CORE_FEATURE,
    methods: ['load'],
  });
}

@Injectable({
  providedIn: 'root',
  useFactory: layoutStylingFacadeFactory,
})
export abstract class LayoutStylingFacade {
  abstract load(type: string): Observable<unknown>;
}
