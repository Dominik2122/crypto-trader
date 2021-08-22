export class TreeColumn {

  constructor(public cssClass: string,
              public header: string,
              public flex: string,
              public dragButton?: boolean,
              public expand?: boolean,
  ) {
  }

}
