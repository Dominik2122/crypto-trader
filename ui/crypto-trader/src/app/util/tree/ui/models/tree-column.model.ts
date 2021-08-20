export class TreeColumn {

  constructor(public id: string,
              public name: string,
              public cssClass: string,
              public fieldId: string,
              public header: string,
              public flex: string,
              public dragButton?: boolean,
              public expand?: boolean,
  ) {
  }

}
