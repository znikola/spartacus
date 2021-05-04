import { Injectable } from '@angular/core';
import { LanguageService, SiteContext } from '@spartacus/core';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

// Country is simulated by the first letter of the language
@Injectable({ providedIn: 'root' })
export class CountryService implements SiteContext<string> {
  constructor(protected langService: LanguageService) {}

  getActive(): Observable<string> {
    return this.langService.getActive().pipe(map((lang) => lang[0]));
  }

  setActive(country: string): void {
    this.langService
      .getActive()
      .pipe(
        take(1),
        map((lang) => {
          if (!lang) {
            return `${country}?`;
          }
          const auxLang = lang[1];
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
        map((languages) => languages.map((lang) => (lang.isocode as string)[0]))
      );
  }
}
