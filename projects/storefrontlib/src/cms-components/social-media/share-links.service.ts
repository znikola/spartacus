import { Injectable, InjectionToken, Inject } from '@angular/core';
import { ICON_TYPE } from '../misc/icon/index';
import { ShareLink } from './share-link.model';
import { Observable } from 'rxjs';
import { WindowRef } from '@spartacus/core';

export const SOCIAL_NETWORKS = new InjectionToken<string>('socialNetworks');

@Injectable({
  providedIn: 'root',
})
export class ShareLinksService {
  iconTypes = ICON_TYPE;

  constructor(
    @Inject(SOCIAL_NETWORKS) public networks: String[],
    private winRef: WindowRef
  ) {}
  //private AstractClass: Type;

  getShareLinks(text: string): Observable<ShareLink[]> {
    const url = this.winRef.document.location.href;
    const links = [
      {
        name: 'FACEBOOK',
        url: 'https://facebook.com/sharer/sharer.php?u=' + url,
        icon: this.iconTypes.FACEBOOK,
      },
      {
        name: 'TWITTER',
        url: 'https://twitter.com/intent/tweet/?text=' + text + '&url=' + url,
        icon: this.iconTypes.TWITTER,
      },
      {
        name: 'EMAIL',
        url: 'mailto:?subject=' + text + '&body=' + url,
        icon: this.iconTypes.EMAIL,
      },
    ];
    const allLinks = Array<ShareLink>();

    for (const entry of links) {
      if (
        this.networks
          .map(a => a.toUpperCase())
          .includes(entry.name.toUpperCase())
      ) {
        allLinks.push(new ShareLink(entry.url, entry.icon));
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
