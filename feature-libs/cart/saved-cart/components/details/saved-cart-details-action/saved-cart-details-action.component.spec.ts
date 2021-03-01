import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedCartDetailsActionComponent } from './saved-cart-details-action.component';

describe('SavedCartDetailsActionComponent', () => {
  let component: SavedCartDetailsActionComponent;
  let fixture: ComponentFixture<SavedCartDetailsActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedCartDetailsActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedCartDetailsActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
