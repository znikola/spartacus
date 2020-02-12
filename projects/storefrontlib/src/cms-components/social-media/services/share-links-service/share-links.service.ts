import { Injectable } from '@angular/core';
import { ICON_TYPE } from '../../../misc/icon/index';
import { ShareLink } from '../../share-link.model';
import { Observable } from 'rxjs';
import { WindowRef } from '@spartacus/core';
import { AbstractSocialNetworkService } from '../social-network-service/abstract-social-network.service';

@Injectable({
  providedIn: 'root',
})
export class ShareLinksService {
  iconTypes = ICON_TYPE;

  constructor(
    private winRef: WindowRef,
    private socialNetworks: AbstractSocialNetworkService
  ) {}

  getShareLinks(text: string): Observable<ShareLink[]> {
    const url = this.winRef.document.location.href;
    const allLinks = Array<ShareLink>();

    if (Array.isArray(this.socialNetworks)) {
      for (const entry of this.socialNetworks) {
        allLinks.push(
          new ShareLink(entry.getUrlToShare(url, text), entry.getIcon())
        );
      }
    }
    // create observable
    const simpleObservable = new Observable<ShareLink[]>(observer => {
      // observable execution
      observer.next(allLinks);
    });

    return simpleObservable;
  }
}
