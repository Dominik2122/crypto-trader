export class TreeColumn {

  constructor(
    public name: string,
    public cssClass: string,
    public header: string,
    public flex: string,
    public dragButton?: boolean,
    public expand?: boolean,
  ) {
  }

  static Builder = class TreeColumnBuilder implements ngOnInit {

    columns: Array<TreeColumn>;

    names: string

    cssClasses: string

    headers: string

    flexes: string

    dragButton?: boolean

    expand?: boolean


    static buildOne(): TreeColumn {
      return new TreeColumn(this.name, cssClass, header, flex, dragButton, expand);
    }

    static buildBlank(): TreeColumn {
      return new TreeColumn(null, null, null, null, null, null);
    }

    static build(amount: number): Array<TreeColumn> {
      const columns: Array<TreeColumn> = [];
      for (let i = 0; i < amount; i++) {
        columns.push(TreeColumn.Builder.buildBlank())
      }
      return columns
    }

    withHeaders(headers: Array<string>) {
      this.columns = this.columns.map((column: TreeColumn, index: number) => {
        column.header = headers[index];
        return column;
      })
      return this
    }

    withNames(names: Array<string>) {
      this.columns = this.columns.map((column: TreeColumn, index: number) => {
        column.header = names[index];
        return column;
      })
      return this
    }

  }


}
