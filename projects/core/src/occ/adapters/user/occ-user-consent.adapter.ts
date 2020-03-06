import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ConsentTemplate } from '../../../model/consent.model';
import { CONSENT_TEMPLATE_NORMALIZER } from '../../../user/connectors/consent/converters';
import { UserConsentAdapter } from '../../../user/connectors/consent/user-consent.adapter';
import { ConverterService } from '../../../util/converter.service';
import { Occ } from '../../occ-models/occ.models';
import { OccEndpointsService } from '../../services/occ-endpoints.service';

@Injectable()
export class OccUserConsentAdapter implements UserConsentAdapter {
  constructor(
    protected http: HttpClient,
    protected occEndpoints: OccEndpointsService,
    protected converter: ConverterService
  ) {}

  loadConsents(userId: string): Observable<ConsentTemplate[]> {
    const url = this.occEndpoints.getUrl('consentTemplates', { userId });
    const headers = new HttpHeaders({
      'Cache-Control':
        'no-cache, no-store, must-revalidate, private, max-stale=0, max-age=0, post-check=0, pre-check=0, proxy-revalidate, s-maxage=0 ',
      Vary: '*',
      Pragma: 'no-cache',
      Expires: '0',
    });
    return this.http
      .get<Occ.ConsentTemplateList>(url, { headers })
      .pipe(
        tap(x => console.log('in adapter', x)),
        catchError((error: any) => throwError(error)),
        map(consentList => consentList.consentTemplates),
        this.converter.pipeableMany(CONSENT_TEMPLATE_NORMALIZER)
      );
  }

  giveConsent(
    userId: string,
    consentTemplateId: string,
    consentTemplateVersion: number
  ): Observable<ConsentTemplate> {
    const url = this.occEndpoints.getUrl('consents', { userId });
    const httpParams = new HttpParams()
      .set('consentTemplateId', consentTemplateId)
      .set('consentTemplateVersion', consentTemplateVersion.toString());
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Cache-Control':
        'no-cache, no-store, must-revalidate, private, max-stale=0, max-age=0, post-check=0, pre-check=0, proxy-revalidate, s-maxage=0 ',
      Vary: '*',
      Pragma: 'no-cache',
      Expires: '0',
    });
    return this.http
      .post<Occ.ConsentTemplate>(url, httpParams, { headers })
      .pipe(
        catchError(error => throwError(error)),
        this.converter.pipeable(CONSENT_TEMPLATE_NORMALIZER)
      );
  }

  withdrawConsent(userId: string, consentCode: string): Observable<{}> {
    const headers = new HttpHeaders({
      'Cache-Control':
        'no-cache, no-store, must-revalidate, private, max-stale=0, max-age=0, post-check=0, pre-check=0, proxy-revalidate, s-maxage=0 ',
      Vary: '*',
      Pragma: 'no-cache',
      Expires: '0',
    });
    const url = this.occEndpoints.getUrl('consentDetail', {
      userId,
      consentId: consentCode,
    });

    return this.http.delete(url, { headers });
  }
}
