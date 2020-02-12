import { Injectable } from '@angular/core';
import { ICON_TYPE } from '../../../misc/icon/index';
import { AbstractSocialNetworkService } from './abstract-social-network.service';

@Injectable({
  providedIn: 'root',
})
export abstract class FacebookSocialNetworkService extends AbstractSocialNetworkService {
  getUrlToShare(urlToShare: string): string {
    return 'https://facebook.com/sharer/sharer.php?u=' + urlToShare;
  }

  getIcon(): ICON_TYPE {
    return this.iconTypes.FACEBOOK;
  }
}
