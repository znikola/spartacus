import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedLinkComponent } from './detailed-link.component';

describe('DetailedLinkComponent', () => {
  let component: DetailedLinkComponent;
  let fixture: ComponentFixture<DetailedLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailedLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
