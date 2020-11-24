import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Budget } from '@spartacus/organization/administration/core';
import { Observable } from 'rxjs';
import { map, shareReplay, startWith, switchMap } from 'rxjs/operators';
import { ItemService } from '../../shared/item.service';
import { BudgetItemService } from '../services/budget-item.service';
import { EntityPathService } from '../../../core/utils/entity-path.service';

@Component({
  selector: 'cx-org-budget-details',
  templateUrl: './budget-details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ItemService,
      useExisting: BudgetItemService,
    },
  ],
  host: { class: 'content-wrapper' },
})
export class BudgetDetailsComponent implements OnInit {
  model$: Observable<Budget>;
  editMode$: Observable<boolean>;

  ngOnInit() {
    this.model$ = this.itemService.key$.pipe(
      switchMap((code) => this.itemService.load(code)),
      shareReplay({ bufferSize: 1, refCount: true }),
      startWith({})
    );

    this.editMode$ = this.model$.pipe(
      map((model) =>
        this.entityPathService.isActive({
          cxRoute: 'budgetEdit',
          params: { code: model.code },
        })
      )
    );
  }

  constructor(
    protected itemService: ItemService<Budget>,
    private entityPathService: EntityPathService
  ) {}
}
