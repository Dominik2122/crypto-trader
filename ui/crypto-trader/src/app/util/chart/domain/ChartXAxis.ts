export interface xAxisTitle {
  display: boolean;
  text: string;
}

export interface xAxisTimeOption {
  parser: xAxisTime
}

export enum xAxisTime {
  DaysAndMonth = 'DD T',
}


export class ChartXAxis {

  constructor(public type: string,
              public title: xAxisTitle,
              public time?: xAxisTimeOption
              ) { }
}
