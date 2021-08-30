import {TemplateRef} from "@angular/core";

export class TreeColumn {

  constructor(
    public name: string,
    public cssClass: string,
    public header: string,
    public flex: string,
    public template?: TemplateRef<any>,
    public dragButton?: boolean,
    public expand?: boolean,
  ) {
  }

  withTemplates() {

  }

  static Builder = class TreeColumnBuilder {

    columns: Array<TreeColumn>;

    names: Array<string>

    cssClasses: Array<string>

    headers: Array<string>

    flex: Array<string>

    dragButton: boolean = false

    expand: boolean = false

    templates: Array<TemplateRef<any>>;


    build(amount: number): Array<TreeColumn> {
      const columns: Array<TreeColumn> = [];
      for (let i = 0; i < amount; i++) {
        columns.push(this.buildOne(i))
      }
      return columns
    }

    withHeaders(headers: Array<string>) {
      this.headers = headers
      return this
    }

    withNames(names: Array<string>) {
     this.names = names
      return this
    }

    withFlex(flex: Array<string>) {
      this.flex = flex
      return this
    }

    withDragAndDrop() {
      this.dragButton = true
      return this
    }

    withExpand() {
      this.expand = true
      return this
    }

    private buildOne(index: number): TreeColumn {
      return new TreeColumn(
        this.names && this.names[index],
        this.cssClasses && this.cssClasses[index],
        this.headers && this.headers[index],
        this.flex && this.flex[index],
        this.templates && this.templates[index],
        index === 0 && this.dragButton,
        index === 0 && this.expand);
    }

  }


}
