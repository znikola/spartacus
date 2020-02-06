import {
  ComponentFactory,
  ComponentFactoryResolver,
  Injectable,
  SimpleChanges,
} from '@angular/core';

@Injectable()
export class ComponentOutlet {
  private inputsMapping: { [propName: string]: string }; // mapping from propName to templateName

  protected __cmpFactory: ComponentFactory<any>;
  protected __inputs: object = {};
  protected __outputs: object;
  protected __selector: string;

  constructor(cfr: ComponentFactoryResolver) {
    const cmpFactory = cfr.resolveComponentFactory(this.constructor as any);

    this.inputsMapping = Object.fromEntries(
      cmpFactory.inputs.map(x => [x.propName, x.templateName])
    );

    // spike todo: removed because of unnecessary undefined values passed to child components
    // this.__inputs = Object.fromEntries(
    //   cmpFactory.inputs.map(x => [x.templateName, this[x.propName]])
    // );

    this.__outputs = Object.fromEntries(
      cmpFactory.outputs.map(x => [
        x.templateName,
        ($event => this[x.propName].emit($event)) as any,
      ])
    );

    // spike todo: warn in dev mode if selector doesn't end with '-outlet'
    // spike todo naive - improve it:
    this.__selector = cmpFactory.selector.slice(0, -7); //'-outlet' is  7 characters
  }

  // copy all the values to handle initial values assigned in the class properties
  // spike todo: removed because of unnecessary undefined values passed to child components
  // tslint:disable-next-line: use-life-cycle-interface
  // ngOnInit() {
  //   this.__inputs = Object.fromEntries(
  //     Object.entries(this.inputsMapping).map(([propName, templateName]) => [
  //       templateName,
  //       this[propName],
  //     ])
  //   );
  // }

  // tslint:disable-next-line: use-life-cycle-interface
  ngOnChanges(changes: SimpleChanges) {
    // we need to map from propName to templateName (because SimpleChanges use propName, but the child component uses templateName)
    // assuming that this component has the same mappings as the wrapped component
    Object.keys(changes).forEach(propName => {
      const templateName = this.inputsMapping[propName];
      this.__inputs[templateName] = this[propName];
    });
  }
}
