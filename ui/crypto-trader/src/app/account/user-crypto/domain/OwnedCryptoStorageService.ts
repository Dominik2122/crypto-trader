import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {CryptoAccount} from "src/app/account/user-crypto/domain/CryptoAccount";
import {OwnedCryptoResource} from "src/app/account/user-crypto/infrastructure/OwnedCryptoResource";
import {Storage} from "src/app/util/base/domain/storage";

@Injectable()
export class OwnedCryptoStorageService extends Storage<CryptoAccount> {

}
