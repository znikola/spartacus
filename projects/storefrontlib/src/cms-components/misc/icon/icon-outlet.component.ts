import {
  Component,
  ComponentFactoryResolver,
  ElementRef,
  Input,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { SelectorComponentDirective } from 'projects/storefrontlib/src/selector';
import { ComponentOutlet } from '../../../selector/component-outlet';
import { ICON_TYPE } from './icon.model';

@Component({
  selector: 'cx-icon-outlet',
  templateUrl: '../../../selector/component-outlet.html',
})
export class IconOutletComponent extends ComponentOutlet {
  @Input()
  type: ICON_TYPE;

  constructor(
    cfr: ComponentFactoryResolver,
    private element: ElementRef,
    private r: Renderer2
  ) {
    super(cfr);
  }

  @ViewChild(SelectorComponentDirective, { static: false })
  selectorComponentDirective;

  listenersDisposals = [];
  elem: Node; // this node
  parentElem: Node;
  childElem: Node; // dynamically created child component

  // tslint:disable-next-line: use-life-cycle-interface
  ngAfterViewInit() {
    //SPIKE - REPLACE OUTLET COMPONENT WITH THE CHILD ONE
    this.elem = this.element.nativeElement;
    this.childElem = this.selectorComponentDirective.componentRef.instance.elementRef.nativeElement;
    const parentElem = this.r.parentNode(this.elem);
    this.r.insertBefore(parentElem, this.childElem, this.elem);
    this.r.removeChild(parentElem, this.elem); // SPIKE TODO check if should inform that it was host child

    // SPIKE MOVE EVENT LISTENERS - REQUIRES MONKEY PATCH - MAY BE SLOW!!!!!!!!!!!!!!
    const CX_LISTENERS = 'cxListeners';
    Object.keys(this.elem[CX_LISTENERS]).forEach(key => {
      const array = this.elem[CX_LISTENERS][key];
      array.forEach(obj => {
        this.listenersDisposals.push(
          this.r.listen(this.childElem, obj.type, obj.listener)
        );
      });
    });
  }

  // tslint:disable-next-line: use-life-cycle-interface
  ngAfterViewChecked() {
    //SPIKE - COPY ATTRIBUTES
    // SPIKE TODO: DON'T OVERWRITE HOST BINDINGS OF THE CHILD
    // SPIKE TODO: do it optimal
    // SPIKE TODO: remove attributes that has beed removed - use keydiffer
    const attrs = this.elem['attributes'];
    for (let i = 0; i < attrs.length; i++) {
      const attr = attrs.item(i);
      this.r.setAttribute(this.childElem, attr.nodeName, attr.nodeValue);
    }
  }

  // tslint:disable-next-line: use-life-cycle-interface
  ngOnDestroy() {
    this.listenersDisposals.forEach(disposal => disposal());
  }
}
