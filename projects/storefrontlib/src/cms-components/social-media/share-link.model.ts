import { ICON_TYPE } from '../misc/icon/index';

export class ShareLink {
  url: string;
  icon: ICON_TYPE;

  constructor(url: string, icon: ICON_TYPE) {
    this.url = url;
    this.icon = icon;
  }
}
