import {Injectable} from '@angular/core';
import {CryptoAccount} from 'src/app/account/user-crypto/domain/CryptoAccount';
import {Storage} from 'src/app/util/base/domain/Storage';

@Injectable()
export class OwnedCryptoStorageService extends Storage<CryptoAccount> {

}
