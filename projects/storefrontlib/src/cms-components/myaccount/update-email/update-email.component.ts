import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { UpdateEmailService } from './update-email.service';

@Component({
  selector: 'cx-update-email',
  templateUrl: './update-email.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdateEmailComponent implements OnDestroy {
  constructor(protected service: UpdateEmailService) {}

  form = this.service.form;

  isUpdating$ = this.service.isUpdating$;

  save = () => this.service.save();

  ngOnDestroy() {
    // TODO: add an explanation why this is needed
    this.service.reset();
  }
}
