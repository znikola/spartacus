import { Injectable } from '@angular/core';
import { TemplateSlot } from '../model';

@Injectable({
  providedIn: 'root',
})
export class ContainerLayoutService {
  constructor() {}

  setStyles(el: HTMLElement, data: TemplateSlot) {
    this.setAttribute(el, 'type', data.containerType);
    this.setMargin(el, data);
    this.setAspectRatio(el, data);
    this.setImageHandling(el, data);
  }

  protected setImageHandling(el: HTMLElement, data: TemplateSlot): void {
    if (data.imageSizing) {
      this.setStyleProperty(el, '--image-sizing', data.imageSizing);
    }

    if (data.imageHandling === 'CONTAINER_WIDTH') {
      this.addClass(el, 'container');
    } else if (data.maxWidth) {
      this.setStyleProperty(el, '--cx-max-width', `${data.maxWidth}px`);
    }

    if (data.heroImageTitleDisplayPosition) {
      this.setAttribute(
        el,
        'title-position',
        data.heroImageTitleDisplayPosition
      );
    }
  }

  protected setMargin(el: HTMLElement, data: TemplateSlot): void {
    if (data.topMargin) {
      this.setStyleProperty(el, '--image-margin-top', `${data.topMargin}px`);
    }
    if (data.leftMargin) {
      this.setStyleProperty(el, '--image-margin-start', `${data.leftMargin}px`);
    }
    if (data.rightMargin) {
      this.setStyleProperty(el, '--image-margin-end', `${data.rightMargin}px`);
    }
    if (data.bottomMargin) {
      this.setStyleProperty(
        el,
        '--image-margin-bottom',
        `${data.bottomMargin}px`
      );
    }
  }

  protected setAspectRatio(el: HTMLElement, data: TemplateSlot): void {
    this.setAttribute(el, 'aspect-ratio', data.aspectRatio);
    if (data.aspectRatio === 'FIXED_HEIGHT') {
      this.setStyleProperty(
        el,
        '--image-height-xs',
        data.mobileFixedHeight + 'px'
      );
      this.setStyleProperty(
        el,
        '--image-height-md',
        data.tabletFixedHeight + 'px'
      );
      this.setStyleProperty(
        el,
        '--image-height-lg',
        data.desktopFixedHeight + 'px'
      );
    }
  }

  protected setAttribute(el: HTMLElement, name: string, value?: string): void {
    value ? el.setAttribute(name, value) : el.removeAttribute(name);
  }

  protected addClass(el: HTMLElement, value: string): void {
    if (!el.classList.contains(value)) {
      el.classList.add(value);
    }
  }

  protected setStyleProperty(
    el: HTMLElement,
    name: string,
    value: string
  ): void {
    el.style.setProperty(name, value);
  }
}
