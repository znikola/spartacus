import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ImageType, Product, ProductAdapter } from '@spartacus/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UpscaleProductAdapter implements ProductAdapter {
  constructor(protected http: HttpClient) {}

  load(productCode: string, _scope?: string): Observable<Product> {
    const baseUrl =
      'https://cxlive19a-approuter-caas2-sap.cfapps.us10.hana.ondemand.com';
    // const baseUrl = 'https://qa-prod-approuter-caas2-sap.cfapps.us10.hana.ondemand.com'
    // https://qa-prod-approuter-caas2-sap.cfapps.us10.hana.ondemand.com/consumer/product-content/products/46063

    const endpoint = `${baseUrl}/consumer/product-content/products/${productCode}`;

    return this.http
      .get(endpoint)
      .pipe(map((product) => this.normalize(product)));
  }

  protected normalize(source): Product {
    return {
      code: source.sku,
      name: source.name,
      description: source.description,
      price: {
        formattedValue: source.originalPrice,
      },
      images: this.normalizeImages(source),
    };
  }

  protected normalizeImages(source) {
    const PRIMARY =
      source.media?.length > 0
        ? {
            thumbnail: {
              format: 'thumbnail',
              imageType: ImageType.PRIMARY,
              url: source.media[0].thumbnail,
            },
            product: {
              format: 'product',
              imageType: ImageType.PRIMARY,
              url: source.media[0].thumbnail,
            },
          }
        : {};
    const GALLERY = source.media.map((media) => {
      return {
        imageType: ImageType.GALLERY,
        format: 'thumbnail',
        url: media.thumbnail,
      };
    });

    return {
      PRIMARY,
      GALLERY,
    };
  }
}
