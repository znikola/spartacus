import { ElementRef, ViewContainerRef } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { I18nTestingModule } from '@spartacus/core';
import {
  LaunchDialogService,
  LAUNCH_CALLER,
  ModalOptions,
  ModalRef,
  ModalService,
} from '@spartacus/storefront';
import { of } from 'rxjs';
import { AnonymousConsentOpenDialogComponent } from './anonymous-consent-open-dialog.component';

class MockModalService {
  open(_content: any, _options?: ModalOptions): ModalRef | undefined {
    return undefined;
  }
}

class MockLaunchDialogService implements Partial<LaunchDialogService> {
  openDialog(
    _caller: LAUNCH_CALLER,
    _openElement?: ElementRef,
    _vcr?: ViewContainerRef
  ) {
    return of();
  }
}

describe('AnonymousConsentOpenDialogComponent', () => {
  let component: AnonymousConsentOpenDialogComponent;
  let fixture: ComponentFixture<AnonymousConsentOpenDialogComponent>;
  let launchDialogService: LaunchDialogService;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [I18nTestingModule],
        declarations: [AnonymousConsentOpenDialogComponent],
        providers: [
          {
            provide: ModalService,
            useClass: MockModalService,
          },
          {
            provide: LaunchDialogService,
            useClass: MockLaunchDialogService,
          },
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AnonymousConsentOpenDialogComponent);
    component = fixture.componentInstance;
    launchDialogService = TestBed.inject(LaunchDialogService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('openDialog', () => {
    it('should call modalService.open', () => {
      spyOn(launchDialogService, 'openDialog');
      component.openDialog();

      expect(launchDialogService.openDialog).toHaveBeenCalledWith(
        LAUNCH_CALLER.ANONYMOUS_CONSENT,
        component.openElement,
        component['vcr']
      );
    });
  });
});
