export class ChartDataset {
  constructor(
    public label: string,
    public data: Array<any>,
    public backgroundColor: string,
    public borderColor: string,
    public borderWidth: number) {
  }

}


export class ChartDataConfig {

  labels: Array<Date | string>

  datasets: Array<ChartDataset>

  withLabels(labels: Array<Date | string>): ChartDataConfig {
    this.labels = labels
    return this
  }

  withDatasets(datasets: Array<ChartDataset>): ChartDataConfig {
    this.datasets = datasets
    return this
  }


  addData() {
    return {
      data: {
        labels: this.labels,
        datasets: this.datasets
      },
    }
  }

}
