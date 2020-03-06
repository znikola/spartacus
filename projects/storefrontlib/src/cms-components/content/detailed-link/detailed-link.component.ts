import { Component, OnInit } from '@angular/core';
import { CmsDetailedLinkComponent } from '@spartacus/core';
import { CmsComponentData } from '../../../cms-structure/page/model/cms-component-data';

@Component({
  selector: 'cx-detailed-link',
  templateUrl: './detailed-link.component.html',
  styleUrls: ['./detailed-link.component.css'],
})
export class DetailedLinkComponent implements OnInit {
  constructor(public component: CmsComponentData<CmsDetailedLinkComponent>) {}
  ngOnInit(): void {}
}
