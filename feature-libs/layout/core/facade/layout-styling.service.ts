import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { WindowRef } from '@spartacus/core';
import { LayoutStylingFacade } from '@spartacus/layout/root';
import { Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { StylingConnectorService } from '../connectors/styling-connector.service';

@Injectable()
export class LayoutStylingService implements LayoutStylingFacade {
  constructor(
    protected stylingServices: StylingConnectorService,
    protected winRef: WindowRef,
    protected rendererFactory: RendererFactory2
  ) {}

  /**
   * Returns the current user.
   */
  load(type: string): Observable<unknown> {
    return this.stylingServices.styling$.pipe(
      tap((styles) => console.log('styles', type, styles)),
      map((styles) => styles.components[type]),
      filter((styles) => Boolean(styles)),
      tap((styles) => this.build(styles, type))
    );
  }

  protected build(styles: any, type: string): void {
    const style: HTMLStyleElement = this.renderer.createElement('style');

    style.innerText = Object.keys(styles)
      .map((key) => this.createRules(type, key, styles[key]))
      .join('');

    this.renderer.appendChild(this.winRef.document.head, style);
  }

  protected createRules(type: string, selector: string, rules: any): string {
    const body = Object.keys(rules)
      .filter((rule) => this.filterBy(rule))
      .map((rule) => {
        return `${this.mapRule(selector, rule)}: ${this.mapValue(
          rule,
          rules
        )};`;
      })
      .join('');
    return `${this.mapSelector(type, selector)} {${body}}`;
  }

  /**
   * Generates the selector that we like to use in our app.
   *
   * TODO: how would customer components go about this?
   */
  protected mapSelector(type: string, selector: string) {
    const mapping = new Map()
      // .set('componentHeadline', 'h1')
      // .set('componentSubHeadline', 'h2')
      .set('contentHeadline', 'h3')
      .set('contentSubHeadline', 'h4')
      .set('overlayColor', '.overlay');
    return `[type="${type}"] ` + (mapping.get(selector) ?? `.${selector}`);
  }

  protected filterBy(rule: string): boolean {
    const excluded = [
      'alpha',
      'fontFamilyKey',
      'androidFontName',
      'iOSFontName',
    ];
    return !excluded.includes(rule);
  }

  protected mapRule(selector: string, rule: string): string {
    const mapping = new Map()
      .set('fontSize', 'font-size')
      .set('pwaFontName', 'font-family')
      .set('lineHeight', 'line-height');
    if (selector === 'overlayColor' && rule === 'color') {
      return 'background-color';
    }
    return mapping.get(rule) ?? rule;
  }

  protected mapValue(selector: string, rules: any) {
    if (selector === 'color') {
      const r = parseInt(rules[selector].substr(1, 2), 16);
      const g = parseInt(rules[selector].substr(3, 2), 16);
      const b = parseInt(rules[selector].substr(5, 2), 16);
      const alpha =
        Math.round((parseInt(rules['alpha'], 16) / 255) * 100) / 100;
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    return this.mapValue2(selector, rules[selector]);
  }

  protected mapValue2(rule: string, value: any): string {
    const numericValues = ['fontSize', 'lineHeight'];
    return numericValues.includes(rule) ? `${value}px` : value;
  }
  protected get renderer(): Renderer2 {
    return this.rendererFactory.createRenderer(null, null);
  }
}
