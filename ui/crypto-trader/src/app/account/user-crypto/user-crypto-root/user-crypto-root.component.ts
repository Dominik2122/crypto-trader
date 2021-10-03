import { Component, OnInit } from '@angular/core';
import {OwnedCryptoService} from "src/app/account/user-crypto/domain/OwnedCryptoService";

@Component({
  selector: 'app-user-crypto-root',
  templateUrl: './user-crypto-root.component.html',
  styleUrls: ['./user-crypto-root.component.scss']
})
export class UserCryptoRootComponent implements OnInit {

  constructor(
    private readonly ownedCryptoService: OwnedCryptoService
  ) { }

  ngOnInit(): void {
    this.ownedCryptoService.fetchOwnedCrypto().subscribe()
  }
}
