import { Injectable } from '@angular/core';
import { LanguageService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class CustomLanguageService extends LanguageService {
  getActive(): Observable<string> {
    // prevent emitting incomplete lang (with the temporary question mark placeholder for country or auxLang part)
    // prevent emitting incorrect lang (where country and auxLang don't match)
    return super.getActive().pipe(
      filter((lang) =>
        // emit only if it's a valid language
        (this.config?.context?.['language'] || []).includes(lang)
      )
    );
  }
}
