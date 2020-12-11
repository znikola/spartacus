import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, pluck, startWith, tap } from 'rxjs/operators';
import {
  ProductSearchPage,
  Suggestion,
} from '../../../model/product-search.model';
import {
  PRODUCT_SEARCH_PAGE_NORMALIZER,
  PRODUCT_SUGGESTION_NORMALIZER,
} from '../../../product/connectors/search/converters';
import { ProductSearchAdapter } from '../../../product/connectors/search/product-search.adapter';
import { SearchConfig } from '../../../product/model/search-config';
import { ConverterService } from '../../../util/converter.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';

const DEFAULT_SEARCH_CONFIG: SearchConfig = {
  pageSize: 20,
};

@Injectable()
export class OccProductSearchAdapter implements ProductSearchAdapter {
  constructor(
    protected http: HttpClient,
    protected occEndpoints: OccEndpointsService,
    protected converter: ConverterService
  ) {}

  search(
    query: string,
    searchConfig: SearchConfig = DEFAULT_SEARCH_CONFIG
  ): Observable<ProductSearchPage> {
    return this.http.get(this.getSearchEndpoint(query, searchConfig)).pipe(
      delay(15000),
      // TODO: move mock to appropriate layer
      startWith({ products: [{}, {}, {}] } as ProductSearchPage),
      this.converter.pipeable(PRODUCT_SEARCH_PAGE_NORMALIZER),
      tap((response) => console.log(response))
    );
  }

  loadSuggestions(
    term: string,
    pageSize: number = 3
  ): Observable<Suggestion[]> {
    return this.http
      .get(this.getSuggestionEndpoint(term, pageSize.toString()))
      .pipe(
        pluck('suggestions'),
        this.converter.pipeableMany(PRODUCT_SUGGESTION_NORMALIZER)
      );
  }

  protected getSearchEndpoint(
    query: string,
    searchConfig: SearchConfig
  ): string {
    return this.occEndpoints.getUrl(
      'productSearch',
      {},
      {
        query,
        ...searchConfig,
      }
    );
  }

  protected getSuggestionEndpoint(term: string, max: string): string {
    return this.occEndpoints.getUrl('productSuggestions', {}, { term, max });
  }
}
