import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-home-skeleton',
  templateUrl: './home-skeleton.component.html',
  styleUrls: ['./home-skeleton.component.scss']
})
export class HomeSkeletonComponent implements OnInit {

  constructor(private httpService: HttpClient) { }

  ngOnInit(): void {
    this.httpService.get('api/account/transactions/').subscribe((x) => {
      console.log(x)
    })
  }

}
