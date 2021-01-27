import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SellingTreeService {
  constructor(protected http: HttpClient) {}
  get(sellingTreeId: string, catIds: string[]): Observable<any> {
    const endpoint = `https://qa-prod-approuter-caas2-sap.cfapps.us10.hana.ondemand.com/consumer/product-content/sellingtrees/${sellingTreeId}/categories?pageSize=50&ids=${catIds.join(
      ','
    )}&path=&published=all&active=all&expand=&pageNumber=1`;
    return this.http.get(endpoint);
  }
}
