import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {CryptoAccount} from "src/app/account/user-crypto/domain/CryptoAccount";
import {OwnedCryptoResource} from "src/app/account/user-crypto/infrastructure/OwnedCryptoResource";
import {map, tap} from "rxjs/operators";
import {OwnedCryptoStorageService} from "src/app/account/user-crypto/domain/OwnedCryptoStorageService";
import {OwnedCrypto} from "src/app/account/user-crypto/domain/OwnedCrypto";

@Injectable()
export class OwnedCryptoService {

  constructor(
    private readonly ownedCryptoResource: OwnedCryptoResource,
    private readonly ownedCryptoStorageService: OwnedCryptoStorageService
  ) {

  }

  fetchOwnedCrypto(): Observable<CryptoAccount> {
    return this.ownedCryptoResource.fetchOwnedCrypto().pipe(
      tap((account) => this.ownedCryptoStorageService.set(account))
    )
  }

  getBalance(): Observable<number> {
    return this.ownedCryptoStorageService.observe().pipe(
      map((account) => -parseFloat(account.balance))
    )
  }

  getCryptos(): Observable<Array<OwnedCrypto>> {
    return this.ownedCryptoStorageService.observe().pipe(
      map((account) => account.cryptos)
    )
  }


}
