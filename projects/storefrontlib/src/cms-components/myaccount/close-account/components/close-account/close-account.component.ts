import {
  ChangeDetectionStrategy,
  Component,
  ComponentRef,
  ElementRef,
  OnDestroy,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { combineLatest, Observable, Subscription } from 'rxjs';
import { filter, take } from 'rxjs/operators';
import {
  LaunchDialogService,
  LAUNCH_CALLER,
} from '../../../../../layout/launch-dialog/index';
// import { ModalService } from '../../../../../shared/components/modal/index';
// import { CloseAccountModalComponent } from '../close-account-modal/close-account-modal.component';

@Component({
  selector: 'cx-close-account',
  templateUrl: './close-account.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CloseAccountComponent implements OnDestroy {
  protected subscription = new Subscription();

  @ViewChild('openElement') openModalElement: ElementRef;
  modal: any;

  constructor(
    // private modalService: ModalService,
    protected launchDialogService: LaunchDialogService,
    protected vcr: ViewContainerRef
  ) {}

  openModal(): void {
    // this.modal = this.modalService.open(CloseAccountModalComponent, {
    //   centered: true,
    // }).componentInstance;
    const component = this.launchDialogService.launch(
      LAUNCH_CALLER.CLOSE_ACCOUNT,
      this.vcr
    ) as Observable<ComponentRef<any>>;

    if (component) {
      this.subscription.add(
        combineLatest([component, this.launchDialogService.dialogClose])
          .pipe(
            filter(([, close]) => close !== null && close !== undefined),
            take(1)
          )
          .subscribe(([comp]) => {
            this.openModalElement?.nativeElement.focus();
            this.launchDialogService.clear(LAUNCH_CALLER.CLOSE_ACCOUNT);
            comp.destroy();
          })
      );
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
