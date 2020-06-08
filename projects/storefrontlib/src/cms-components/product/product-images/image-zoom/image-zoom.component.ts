import {
  Component,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
  ViewChild,
} from '@angular/core';

interface Position2d {
  x: number;
  y: number;
}

@Component({
  selector: 'cx-image-zoom',
  templateUrl: 'image-zoom.component.html',
})
export class ImageZoomComponent {
  @Input() imageUrl: string;
  @Input() zoom = 2;
  @Input() lensSize = 40;
  @Input() imgWidth;
  @Input() imgHeight;
  @Input() divZoomed: ElementRef;

  lensPositionX = 0;
  lensPositionY = 0;
  cx = 1;
  cy = 1;
  yet = false;
  factorX: number;
  factorY: number;

  @ViewChild('image', { static: false, read: ElementRef }) img: ElementRef;
  @ViewChild('lensElement', { static: false, read: ElementRef })
  lens: ElementRef;
  @HostListener('mousemove', ['$event'])
  mouseMove(event: any) {
    const result = this.moveLens(event);
    this.render.setStyle(this.divZoomed, 'visibility', 'visible');
    this.render.setStyle(this.divZoomed, 'background-position', result);
  }

  @HostListener('mouseenter', ['$event'])
  mouseenter() {
    this.lens.nativeElement.style.visibility = 'visible';
    this.render.setStyle(this.divZoomed, 'visibility', 'visible');
  }

  @HostListener('mouseleave', ['$event'])
  mouseleave() {
    this.render.setStyle(this.divZoomed, 'visibility', 'hidden');
    this.lens.nativeElement.style.visibility = 'hidden';
  }

  constructor(private render: Renderer2) {}
  onLoad() {
    this.render.setStyle(
      this.divZoomed,
      'background-image',
      "url('" + this.imageUrl + "')"
    );
    this.render.setStyle(
      this.divZoomed,
      'background-size',
      this.img.nativeElement.width * this.zoom +
        'px ' +
        this.img.nativeElement.height * this.zoom +
        'px'
    );
    this.render.setStyle(this.divZoomed, 'background-repeat', 'no-repeat');
    this.render.setStyle(
      this.divZoomed,
      'transition',
      'background-position .2s ease-out'
    );
    this.factorX = this.img.nativeElement.width;
    this.factorY = this.img.nativeElement.height;

    this.yet = true;
    setTimeout(() => {
      this.factorX =
        this.imgWidth || this.imgHeight
          ? this.factorX / this.img.nativeElement.width
          : 1;
      this.factorY =
        this.imgWidth || this.imgHeight
          ? this.factorY / this.img.nativeElement.height
          : 1;
      const dim = (this.divZoomed as any).getBoundingClientRect();
      this.cx =
        (dim.width - this.img.nativeElement.width * this.zoom * this.factorX) /
        (this.img.nativeElement.width - this.lens.nativeElement.offsetWidth);
      this.cy =
        (dim.height -
          this.img.nativeElement.height * this.zoom * this.factorY) /
        (this.img.nativeElement.height - this.lens.nativeElement.offsetHeight);
    });
  }
  moveLens(e: any) {
    let pos: Position2d;
    let x: number;
    let y: number;
    /*prevent any other actions that may occur when moving over the image:*/
    e.preventDefault();
    /*get the cursor's x and y positions:*/
    pos = this.getCursorPos(e);
    /*calculate the position of the lens:*/
    x = pos.x - this.lens.nativeElement.offsetWidth / 2;
    y = pos.y - this.lens.nativeElement.offsetHeight / 2;
    /*prevent the lens from being positioned outside the image:*/
    if (
      x >
      this.img.nativeElement.width - this.lens.nativeElement.offsetWidth
    ) {
      x = this.img.nativeElement.width - this.lens.nativeElement.offsetWidth;
    }
    if (x < 0) {
      x = 0;
    }
    if (
      y >
      this.img.nativeElement.height - this.lens.nativeElement.offsetHeight
    ) {
      y = this.img.nativeElement.height - this.lens.nativeElement.offsetHeight;
    }
    if (y < 0) {
      y = 0;
    }
    /*set the position of the lens:*/
    this.lensPositionX = x;
    this.lensPositionY = y;
    /*display what the lens "sees":*/

    const result = x * this.cx + 'px ' + y * this.cy + 'px';

    return result;
  }
  getCursorPos(e: any): Position2d {
    let x = 0;
    let y = 0;
    e = e || window.event;
    /*get the x and y positions of the image:*/
    const a = this.img.nativeElement.getBoundingClientRect();
    /*calculate the cursor's x and y coordinates, relative to the image:*/
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /*consider any page scrolling:*/
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return { x: x, y: y };
  }
}
