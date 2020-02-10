import { Injectable, InjectionToken, Inject } from '@angular/core';
import { ICON_TYPE } from '../misc/icon/index';
import { ShareLink } from './share-link.model';
import { Observable } from 'rxjs';

export const SOCIAL_NETWORKS = new InjectionToken<string>('socialNetworks');

@Injectable({
  providedIn: 'root',
})
export class ShareLinksService {
  iconTypes = ICON_TYPE;

  constructor(@Inject(SOCIAL_NETWORKS) public networks: String) {}

  getShareLinks(url: string, text: string): Observable<ShareLink[]> {
    const links = [
      {
        url: 'https://facebook.com/sharer/sharer.php?u=' + url,
        icon: this.iconTypes.FACEBOOK,
      },
      {
        url: 'https://twitter.com/intent/tweet/?text=' + text + '&url=' + url,
        icon: this.iconTypes.TWITTER,
      },
      {
        url: 'mailto:?subject=' + text + '&body=' + url,
        icon: this.iconTypes.EMAIL,
      },
    ];
    const allLinks = Array<ShareLink>();
    for (const entry of links) {
      allLinks.push(new ShareLink(entry.url, entry.icon));
    }

    // create observable
    const simpleObservable = new Observable<ShareLink[]>(observer => {
      // observable execution
      observer.next(allLinks);
    });

    return simpleObservable;
  }
}
