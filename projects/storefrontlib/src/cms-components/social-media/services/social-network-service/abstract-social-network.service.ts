import { Injectable } from '@angular/core';
import { ICON_TYPE } from '../../../misc/icon/index';

@Injectable({
  providedIn: 'root',
})
export abstract class AbstractSocialNetworkService {
  protected iconTypes = ICON_TYPE;

  /**
   * Abstract method to return social network share url
   *
   * @param urlToShare
   * @param textToShare
   */
  abstract getUrlToShare(urlToShare: string, textToShare?: string): string;

  /**
   * Abstract method to social network specific icon
   */
  abstract getIcon(): ICON_TYPE;
}
