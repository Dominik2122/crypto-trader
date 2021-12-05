import {BaseResource} from 'src/app/util/base/infrastructure/BaseResource';
import {HeaderAccount} from 'src/app/header/header-root/header-account-info-dialog/domain/HeaderAccount';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HeaderAccountDTO} from 'src/app/header/header-root/header-account-info-dialog/infrastructure/HeaderAccountDTO';
import {map} from 'rxjs/operators';

@Injectable()
export class HeaderAccountResource extends BaseResource {

  getAccount(): Observable<HeaderAccount> {
    return this.get<HeaderAccountDTO>('api/account/home-account-info').pipe(
      map((dto: HeaderAccountDTO) => HeaderAccount.fromDTO(dto) )
    );
  }

}
