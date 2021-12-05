import {Injectable} from '@angular/core';
import {Storage} from 'src/app/util/base/domain/Storage';
import {HeaderAccount} from 'src/app/header/header-root/header-account-info-dialog/domain/HeaderAccount';

@Injectable()
export class HeaderAccountStorageService extends Storage<HeaderAccount> {


}
