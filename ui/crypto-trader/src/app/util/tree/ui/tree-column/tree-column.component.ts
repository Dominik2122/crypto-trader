import {Component, ContentChild, Input, OnInit, TemplateRef} from '@angular/core';
import {TreeColumn} from "src/app/util/tree/ui/models/tree-column.model";

@Component({
  selector: 'app-tree-column',
  template: ''
})
export class TreeColumnComponent implements OnInit {

  @ContentChild(TemplateRef, {static: true})
  set templateFromContentChild(template: TemplateRef<TreeColumnComponent>) {
    this.template = template
  }

  @Input()
  popperContent: TemplateRef<TreeColumnComponent>

  template: TemplateRef<any>

  treeColumns: Array<TreeColumn>

  constructor() { }

  ngOnInit(): void {
  }

}
