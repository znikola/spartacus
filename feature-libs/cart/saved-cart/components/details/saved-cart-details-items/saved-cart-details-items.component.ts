import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { OrderEntry, ActiveCartService, PromotionLocation, FeatureConfigService, SelectiveCartService} from '@spartacus/core';
import { filter} from 'rxjs/operators';
//import { Observable, of } from 'rxjs';
//import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'cx-saved-cart-details-items',
  templateUrl: './saved-cart-details-items.component.html'
})
export class SavedCartDetailsItemsComponent implements OnInit {

  // //mock fields
  // hasHeader: boolean = true;
  // options: any = {
  //   isSaveForLater: true
  // };
  // readonly = true;
  // promotionLocation = PromotionLocation.ActiveCart;

  readonly = false;
  hasHeader = true;
  options: any = {
    isSaveForLater: true,
    optionalBtn: null,
  };
  promotionLocation: PromotionLocation = PromotionLocation.ActiveCart;

  // form: FormGroup| undefined = this.featureConfigService?.isLevel('3.1')
  //   ? new FormGroup({})
  //   : undefined;

  //create button controls
  control: FormGroup = new FormGroup({
    quantity: new FormControl('4'),
  });

  //mock items for dev
  items: OrderEntry[]; 
  private itemsToAdd: Map<string, OrderEntry> = new Map()

  constructor(protected activeCartService: ActiveCartService, 
    protected selectiveCartService: SelectiveCartService, 
    protected featureConfigService?: FeatureConfigService) {}

  ngOnInit(): void {
    debugger;
    this.loadSavedCart();
  }

  /*

  getControl(item: OrderEntry): Observable<FormGroup> {
    
    return this.form.get(this.getControlName(item)).valueChanges.pipe(
      // eslint-disable-next-line import/no-deprecated
      startWith(null),
      map((value) => {
        if (value && this.selectiveCartService && this.options.isSaveForLater) {
          this.selectiveCartService.updateEntry(
            value.entryNumber,
            value.quantity
          );
        } else if (value) {
          this.activeCartService.updateEntry(value.entryNumber, value.quantity);
        }
      }),
      map(() => <FormGroup>this.form.get(this.getControlName(item)))
    );
    
    //return this.getControlV2(item);
  }
  */

  /*
  getControlV2(item: OrderEntry): Observable<FormGroup>{
    return of(<FormGroup>this.control.get(this.getControlName(item)))
  }

  protected getControlName(item: OrderEntry): string {
    return item.entryNumber.toString();
  }
*/

  selectToActiveCart(item: OrderEntry){
    const id: any = item.product?.code;

    if(this.itemsToAdd.has(id)){
      this.itemsToAdd.delete(id);
      alert("Removed");
    }else{
      this.itemsToAdd.set(id, item);
      alert("Added");
    }

    const items = Array.from(this.itemsToAdd.values());
    console.log({items});
  }

  addToActiveCart(){
    const items: OrderEntry[] = Array.from(this.itemsToAdd.values());
    console.log({items});
    alert("All Items to move");
  }

  loadSavedCart(){
    this.activeCartService
      .getEntries()
      .pipe(filter((entries) => entries.length > 0)).subscribe(
        (entries) => this.items = entries
      );
  }
}
