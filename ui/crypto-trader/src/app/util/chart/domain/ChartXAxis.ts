export interface xAxisTitle {
  display: boolean;
  text: string;
}

export interface xAxisTimeOption {
  parser?: xAxisTime;
  unit?: string;
}

export enum xAxisTime {
  DaysAndMonth = 'DD T',
}


export class ChartXAxis {

  constructor(public type: string,
              public title: xAxisTitle,
              public time?: xAxisTimeOption,
              public display?: boolean
              ) { }
}
