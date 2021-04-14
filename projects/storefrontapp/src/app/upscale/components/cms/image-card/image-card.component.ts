import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Media } from '@spartacus/storefront';
@Component({
  selector: 'cx-image-card',
  templateUrl: './image-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageCardComponent {
  constructor() {}

  @Input() image: Media;
  @Input() headline: string;
  @Input() subHeadline: string;
}
