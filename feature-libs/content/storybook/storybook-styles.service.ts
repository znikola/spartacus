import { Injectable } from '@angular/core';
import { BaseStylingService } from '../../layout/core/styling/base-styling.service';

@Injectable({ providedIn: 'root' })
export class StoryBookStylesService extends BaseStylingService {
  protected get componentType(): string {
    return 'STORYBOOK';
  }
}
