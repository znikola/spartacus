import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ImageType, Product, ProductAdapter } from '@spartacus/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UpscaleConfig } from '../config/upscale.config';

@Injectable({
  providedIn: 'root',
})
export class UpscaleProductAdapter implements ProductAdapter {
  constructor(protected http: HttpClient, protected config: UpscaleConfig) {}

  load(productCode: string, _scope?: string): Observable<Product> {
    const endpoint = `${this.config.upscale.baseUrl}/consumer/product-content/products/${productCode}`;

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
