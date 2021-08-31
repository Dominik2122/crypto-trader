import {Component, ContentChild, OnInit, TemplateRef} from '@angular/core';
import {TreeColumn} from "src/app/util/tree/ui/models/tree-column.model";

@Component({
  selector: 'app-tree-column',
  template: ''
})
export class TreeColumnComponent implements OnInit {

  @ContentChild(TemplateRef, {static: true})
  set templateFromContentChild(template: TemplateRef<any>) {
    this.template = template
  }

  template: TemplateRef<any>

  treeColumns: Array<TreeColumn>

  constructor() { }

  ngOnInit(): void {
  }

}