import {Injectable} from "@angular/core";
import {CryptoAccount} from "src/app/account/user-crypto/domain/CryptoAccount";
import {Storage} from "src/app/util/base/domain/storage";

@Injectable()
export class OwnedCryptoStorageService extends Storage<CryptoAccount> {

}
