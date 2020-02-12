import { Injectable } from '@angular/core';
import { ICON_TYPE } from '../../../misc/icon/index';
import { AbstractSocialNetworkService } from './abstract-social-network.service';

@Injectable({
  providedIn: 'root',
})
export abstract class EMailSocialNetworkService extends AbstractSocialNetworkService {
  getUrlToShare(urlToShare: string, textToShare?: string): string {
    return 'mailto:?subject=' + textToShare + '&body=' + urlToShare;
  }

  getIcon(): ICON_TYPE {
    return this.iconTypes.EMAIL;
  }
}
