import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {OwnedCryptoService} from "src/app/account/user-crypto/domain/OwnedCryptoService";
import {Observable} from "rxjs";

@Component({
  selector: 'app-user-crypto-root',
  templateUrl: './UserCryptoRootComponent.html',
  styleUrls: ['./UserCryptoRootComponent.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserCryptoRootComponent implements OnInit {

  balance$: Observable<number>;

  constructor(
    private readonly ownedCryptoService: OwnedCryptoService
  ) { }

  ngOnInit(): void {
    this.ownedCryptoService.fetchOwnedCrypto().subscribe()
    this.balance$ = this.ownedCryptoService.getBalance()
  }
}
