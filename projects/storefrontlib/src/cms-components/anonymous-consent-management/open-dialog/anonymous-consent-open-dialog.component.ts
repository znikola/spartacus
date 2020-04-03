import { Component, ViewContainerRef } from '@angular/core';
import { LaunchDialogService, LAUNCH_CALLER } from '../../../layout/index';
import { ModalService } from '../../../shared/components/modal/modal.service';

@Component({
  selector: 'cx-anonymous-consent-open-dialog',
  templateUrl: './anonymous-consent-open-dialog.component.html',
})
export class AnonymousConsentOpenDialogComponent {
  constructor(
    protected modalService: ModalService,
    protected launchDialogService: LaunchDialogService,
    protected vcr: ViewContainerRef
  ) {}

  openDialog(): void {
    // this.modalService.open(AnonymousConsentDialogComponent, {
    //   centered: true,
    //   size: 'lg',
    // });
    this.launchDialogService.launch(LAUNCH_CALLER.ANONYMOUS_CONSENT, this.vcr);
  }
}
