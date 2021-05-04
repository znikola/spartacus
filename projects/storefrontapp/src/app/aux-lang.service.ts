import { Injectable } from '@angular/core';
import { LanguageService, SiteContext } from '@spartacus/core';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

// Aux lang is simulated by the second letter of the language
@Injectable({ providedIn: 'root' })
export class AuxLangService implements SiteContext<string> {
  constructor(protected langService: LanguageService) {}

  getActive(): Observable<string> {
    return this.langService.getActive().pipe(map((lang) => lang[1]));
  }

  setActive(auxLang: string): void {
    this.langService
      .getActive()
      .pipe(
        take(1),
        map((lang) => {
          if (!lang) {
            return `${auxLang}?`;
          }
          const country = lang[0];
          return `${country}${auxLang}`;
        }),
        tap((newLang) => {
          this.langService.setActive(newLang);
        })
      )
      .subscribe();
  }

  getAll(): Observable<string[]> {
    return this.langService
      .getAll()
      .pipe(
        map((languages) => languages.map((lang) => (lang.isocode as string)[1]))
      );
  }
}
