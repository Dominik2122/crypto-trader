import {Component, Input, OnInit} from '@angular/core';
import Chart from "chart.js/auto";
import {ChartData} from "src/app/util/chart/domain/ChartData";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  @Input()
  data: Array<ChartData>

  @Input()
  xAxis: string

  @Input()
  yAxis: string


  chart: Chart

  constructor() { }



  ngOnInit(): void {


    this.chart = new Chart('myChart', {
      type: 'line',
      data: {
        labels: this.data.map(data => data[this.yAxis]),
        datasets: [{
          label: '# of Votes',
          data: this.data.map(data => data[this.xAxis]),
          backgroundColor: 'rgb(96,238,21)',
          borderColor: 'rgb(51,151,8)',
          borderWidth: 2,
        }]
      },
      options: {
        plugins: {
          title: {
            text: 'Chart.js Time Scale',
            display: true
          }
        },
        scales: {
          x: {
            type: 'timeseries',
            time: {
              parser: 'DD T',
            },
            title: {
              display: true,
              text: 'Date'
            },
          },
          y: {
            title: {
              display: true,
              text: 'value'
            }}
        }
      }});



  }




}
