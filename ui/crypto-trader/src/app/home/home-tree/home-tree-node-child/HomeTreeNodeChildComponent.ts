import {Component, Input} from '@angular/core';
import {HomeTreeNodePastData} from "src/app/home/home-tree/domain/HomeTreeNodePastData";
import Chart from 'chart.js/auto';


@Component({
  selector: 'app-home-tree-child-component',
  templateUrl: './HomeTreeNodeChildComponent.html',
  styleUrls: ['./HomeTreeNodeChildComponent.scss']
})
export class HomeTreeNodeChildComponent {

  @Input()
  data: HomeTreeNodePastData
  ctx = document.getElementById('myChart');

  ngOnInit() {
    var myChart = new Chart('myChart', {
      type: 'line',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: 'rgb(236,12,102)',
          borderColor: 'rgb(51,151,8)',
          borderWidth: 5,
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

  }



}
