import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class StylingService {
  constructor(protected http: HttpClient) {}

  load() {
    const endpoint = `https://cxlive19a-approuter-caas2-sap.cfapps.us10.hana.ondemand.com/consumer/content-repository/experiences/92fede25-f001-4245-baa3-481ddc4db91f?expand=components`;

    this.http.get(endpoint).pipe(tap(console.log));
  }
  //   get(contentId: string): Observable<any> {
  //     if (!this.calls[contentId]) {
  //       const endpoint = `https://qa-prod-approuter-caas2-sap.cfapps.us10.hana.ondemand.com/consumer/content-repository/contents/${contentId}`;
  //       this.calls[contentId] = this.http
  //         .get(endpoint)
  //         .pipe(filter((content: any) => content.status === 'PUBLISHED'));
  //     }
  //     return this.calls[contentId];
  //   }

  //   getAll() {
  //     // https://qa-prod-approuter-caas2-sap.cfapps.us10.hana.ondemand.com/consumer/content-repository/contents?pageNumber=1&ids=c9f6db1f-82f7-40bc-abdb-b8ad5319fc20,9001e7b5-0c04-4713-ae51-b65d3b66270c,2fe03738-d4d1-416a-bc5e-a7a532e26b3e&types=IMAGE
  //   }
}
