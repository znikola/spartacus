import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { ContentService } from '../../content.service';
@Component({
  selector: 'upscale-aspect-ratio-image',
  templateUrl: './aspect-ratio-image.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AspectRatioImageComponent implements OnInit {
  @Input() content;

  constructor(protected contentService: ContentService) {}

  ngOnInit() {}
}
