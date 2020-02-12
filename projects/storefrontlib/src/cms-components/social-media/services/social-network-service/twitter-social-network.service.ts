import { Injectable } from '@angular/core';
import { ICON_TYPE } from '../../../misc/icon/index';
import { AbstractSocialNetworkService } from './abstract-social-network.service';

@Injectable({
  providedIn: 'root',
})
export abstract class TwitterSocialNetworkService extends AbstractSocialNetworkService {
  getUrlToShare(urlToShare: string, textToShare?: string): string {
    return (
      'https://twitter.com/intent/tweet/?text=' +
      textToShare +
      '&url=' +
      urlToShare
    );
  }

  getIcon(): ICON_TYPE {
    return this.iconTypes.TWITTER;
  }
}
