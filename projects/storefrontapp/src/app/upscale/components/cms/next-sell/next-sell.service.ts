import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { UpscaleConfig } from '../../../config/upscale.config';

@Injectable({
  providedIn: 'root',
})
export class NextSellService {
  constructor(protected http: HttpClient, protected config: UpscaleConfig) {}

  load(): Observable<any> {
    const endpoint = `${this.config.upscale.baseUrl}/consumer/intelligence-tailored-category-service/nextsell?experienceId=${this.config.upscale.experienceId}`;
    return this.http
      .get(endpoint)
      .pipe(map((data: any) => data.products.map((product) => of(product.id))));
  }
}
