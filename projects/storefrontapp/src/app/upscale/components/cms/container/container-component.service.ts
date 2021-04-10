import { ElementRef, Injectable } from '@angular/core';
import { CmsComponentData } from '@spartacus/storefront';
import { ContentComponentModel } from '../../cms.model';

@Injectable()
export class ContainerLayoutService {
  constructor(
    protected component: CmsComponentData<ContentComponentModel>,
    protected elementRef: ElementRef
  ) {}

  doLayout(data: ContentComponentModel) {
    console.log('doLayout', data);

    this.setAttribute('type', data.containerType);
    this.setAspectRatio(data);
    this.setMargin(data);
    this.setImageHandling(data);
  }

  protected setAspectRatio(data: ContentComponentModel): void {
    this.setAttribute('aspect-ratio', data.aspectRatio);
    if (data.aspectRatio === 'FIXED_HEIGHT') {
      this.host.style.setProperty(
        '--image-height-xs',
        data.mobileFixedHeight + 'px'
      );
      this.host.style.setProperty(
        '--image-height-md',
        data.tabletFixedHeight + 'px'
      );
      this.host.style.setProperty(
        '--image-height',
        data.desktopFixedHeight + 'px'
      );
    }
  }

  protected setMargin(data: ContentComponentModel): void {
    this.setStyleProperty('--image-margin-top', `${data.topMargin}px`);
    this.setStyleProperty('--image-margin-start', `${data.leftMargin}px`);
    this.setStyleProperty('--image-margin-end', `${data.rightMargin}px`);
    this.setStyleProperty('--image-margin-bottom', `${data.bottomMargin}px`);
  }

  protected setImageHandling(data: ContentComponentModel) {
    this.setStyleProperty('--image-sizing', data.imageSizing);
  }

  protected setAttribute(name: string, value?: string): void {
    value
      ? this.host.setAttribute(name, value)
      : this.host.removeAttribute(name);
  }

  protected setStyleProperty(name: string, value: string): void {
    this.host.style.setProperty(name, value);
  }

  protected get host(): HTMLElement {
    return this.elementRef.nativeElement;
  }
}
