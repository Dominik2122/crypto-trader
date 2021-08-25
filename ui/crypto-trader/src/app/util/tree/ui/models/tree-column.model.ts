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

  buildOne( name: string,
            cssClass: string,
            header: string,
            flex: string,
            dragButton?: boolean,
            expand?: boolean): TreeColumn {
    return new TreeColumn(name, cssClass, header, flex, dragButton, expand);
  }

}
