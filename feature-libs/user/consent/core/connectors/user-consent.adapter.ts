import { ConsentTemplate } from '@spartacus/user/consent/root';
import { Observable } from 'rxjs';

export abstract class UserConsentAdapter {
  abstract loadConsents(userId: string): Observable<ConsentTemplate[]>;

  abstract giveConsent(
    userId: string,
    consentTemplateId: string,
    consentTemplateVersion: number
  ): Observable<ConsentTemplate>;

  abstract withdrawConsent(userId: string, consentCode: string): Observable<{}>;
}
