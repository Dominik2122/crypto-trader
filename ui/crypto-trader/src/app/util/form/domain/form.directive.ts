import {ComponentFactoryResolver, ComponentRef, Directive, Input, OnInit, ViewContainerRef} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {formInput} from "src/app/util/form/domain/FormInput";
import {FieldComponent} from "src/app/util/form/ui/form-inputs/FieldComponent";

@Directive({
  selector: '[appForm]'
})
export class FormDirective implements OnInit {

  @Input() config;

  @Input() group: FormGroup;

  component: ComponentRef<FieldComponent>

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit() {
    const component = formInput[this.config.type];
    const factory = this.componentFactoryResolver.resolveComponentFactory<FieldComponent>(component);
    this.component = this.viewContainerRef.createComponent(factory);
    this.component.instance.config = this.config;
    this.component.instance.group = this.group;
  }

}
