import { Injectable } from '@angular/core';
import { ICON_TYPE } from '../misc/icon/index';

@Injectable({
  providedIn: 'root',
})
export class ShareLinksService {
  iconTypes = ICON_TYPE;

  getShareLinks(url: string, text: string): { url: string; icon: ICON_TYPE }[] {
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
    console.log(links.length);
    return links;
  }
}
