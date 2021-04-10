import { Injectable } from '@angular/core';
import { CmsComponent, Converter } from '@spartacus/core';

@Injectable({ providedIn: 'root' })
export class UpscaleCmsComponentNormalizer
  implements Converter<unknown, CmsComponent> {
  convert(source: any, target: CmsComponent = {}): CmsComponent {
    // console.log('convert from', source);

    target = source as CmsComponent;
    target.uid = source.id;
    // console.log('convert to', target);
    return target;
  }
}
