import { Injectable } from '@angular/core';
import { ICON_TYPE } from '../../../misc/icon/index';
import { AbstractSocialNetworkService } from './abstract-social-network.service';

@Injectable({
  providedIn: 'root',
})
export abstract class PinterestSocialNetworkService extends AbstractSocialNetworkService {
  getUrlToShare(urlToShare: string, textToShare?: string): string {
    return (
      'https://pinterest.com/pin/create/button/?url=' +
      urlToShare +
      'media=&amp;description=' +
      textToShare
    );
  }

  getIcon(): ICON_TYPE {
    return this.iconTypes.PINTEREST;
  }
}
