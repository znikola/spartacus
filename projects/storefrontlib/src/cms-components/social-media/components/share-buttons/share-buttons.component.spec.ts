import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Product } from '@spartacus/core';
import { Observable, of } from 'rxjs';
import { CurrentProductService } from '../../../product/current-product.service';
import { ShareButtonsComponent } from './share-buttons.component';
import { ShareLinksService } from '../../services/share-links-service/share-links.service';
import { ICON_TYPE } from '../../../misc';
import { Component, Input } from '@angular/core';

const mockProduct: Product = {
  name: 'mockProduct',
  summary: 'summary of mock product',
};

class MockCurrentProductService {
  getProduct(): Observable<Product> {
    return of(mockProduct);
  }
}
const iconTypes = ICON_TYPE;

const mockShareLinks = [
  { url: 'facebook.com', icon: iconTypes.FACEBOOK },
  { url: 'twitter.com', icon: iconTypes.TWITTER },
];

class MockShareLinksService {
  getShareLinks(): Observable<any> {
    return of(mockShareLinks);
  }
  add() {}
}

@Component({
  selector: 'cx-icon',
  template: '',
})
class MockCxIconComponent {
  @Input() type: ICON_TYPE;
}

describe('ShareButtonsComponent', () => {
  let shareButtonsComponent: ShareButtonsComponent;
  let fixture: ComponentFixture<ShareButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShareButtonsComponent, MockCxIconComponent],
      providers: [
        {
          provide: CurrentProductService,
          useClass: MockCurrentProductService,
        },
        {
          provide: ShareLinksService,
          useClass: MockShareLinksService,
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareButtonsComponent);
    shareButtonsComponent = fixture.componentInstance;
  });

  it('should create', () => {
    expect(shareButtonsComponent).toBeTruthy();
  });

  it('should get product', () => {
    let result: Product;
    shareButtonsComponent.product$.subscribe(product => (result = product));
    expect(result).toEqual(mockProduct);
  });

  it('get share links for share buttons', () => {
    expect(shareButtonsComponent.shareButtons$).toBeTruthy();
    shareButtonsComponent.shareButtons$.subscribe(result => {
      expect(result).toEqual(mockShareLinks);
    });
  });
});
