import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedCartDetailsOverviewComponent } from './saved-cart-details-overview.component';

describe('SavedCartDetailsOverviewComponent', () => {
  let component: SavedCartDetailsOverviewComponent;
  let fixture: ComponentFixture<SavedCartDetailsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedCartDetailsOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedCartDetailsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
