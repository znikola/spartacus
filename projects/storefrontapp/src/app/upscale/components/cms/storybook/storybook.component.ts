import { ChangeDetectionStrategy, Component } from '@angular/core';
import { StorybookService } from './storybook.service';

@Component({
  selector: 'upscale-storybook',
  templateUrl: 'storybook.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [StorybookService],
})
export class StorybookComponent {
  public storybookItems$ = this.storybookService.getStorybookItems();

  constructor(protected storybookService: StorybookService) {}

  getContent(id: string) {
    return this.storybookService.getContent(id);
  }
}
