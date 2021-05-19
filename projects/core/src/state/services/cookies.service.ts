import { Injectable } from '@angular/core';
import { WindowRef } from '../../window/window-ref';

@Injectable({ providedIn: 'root' })
export class CookiesService {
  constructor(protected winRef: WindowRef) {}

  getValue(context: string, key: string): unknown | null {
    const contextKey = context + '-' + key;
    if (this.winRef.isBrowser() && this.winRef.document) {
      return (
        this.winRef.document.cookie
          .match('(^|;)\\s*' + contextKey + '\\s*=\\s*([^;]+)')
          ?.pop() || null
      );
    }
    return null;
  }

  writeValue(
    context: string,
    key: string,
    data: string,
    _expiration?: Date
  ): void {
    const contextKey = context + '-' + key;
    if (this.winRef.isBrowser() && this.winRef.document) {
      // TODO add expiration
      this.winRef.document.cookie = `${contextKey}=${data}; expires=Thu, 18 Dec 2021 12:00:00 UTC`;
    }
  }
}
