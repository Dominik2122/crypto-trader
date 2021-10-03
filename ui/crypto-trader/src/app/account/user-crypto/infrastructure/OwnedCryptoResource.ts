import {BaseResource} from "src/app/util/base/infrastructure/base-resource";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {CryptoAccountDTO} from "src/app/account/user-crypto/infrastructure/CryptoAccountDTO";
import {map} from "rxjs/operators";
import {CryptoAccount} from "src/app/account/user-crypto/domain/CryptoAccount";

@Injectable()
export class OwnedCryptoResource extends BaseResource {

  fetchOwnedCrypto(): Observable<CryptoAccount> {
    return this.get<CryptoAccountDTO>('http://127.0.0.1:8000/api/crypto-account/my/').pipe(
      map((account: CryptoAccountDTO) => CryptoAccount.fromDTO(account))
    )
  }
}
