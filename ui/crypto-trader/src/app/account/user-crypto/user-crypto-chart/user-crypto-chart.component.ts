import { Component, OnInit } from '@angular/core';
import {OwnedCryptoService} from "src/app/account/user-crypto/domain/OwnedCryptoService";

@Component({
  selector: 'app-user-crypto-chart',
  templateUrl: './user-crypto-chart.component.html',
  styleUrls: ['./user-crypto-chart.component.scss']
})
export class UserCryptoChartComponent implements OnInit {

  constructor(
    private readonly ownedCryptoService: OwnedCryptoService
  ) { }

  ngOnInit(): void {
    this.ownedCryptoService.fetchOwnedCrypto().subscribe((x) => {
      console.log(x)
    })
  }

}
