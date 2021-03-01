import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedCartDetailsItemsComponent } from './saved-cart-details-items.component';

describe('SavedCartDetailsItemsComponent', () => {
  let component: SavedCartDetailsItemsComponent;
  let fixture: ComponentFixture<SavedCartDetailsItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedCartDetailsItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedCartDetailsItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
