import {Injectable} from '@angular/core';
import {HeaderAccountStorageService} from 'src/app/header/header-root/header-account-info-dialog/domain/HeaderAccountStorageService';
import {HeaderAccountResource} from 'src/app/header/header-root/header-account-info-dialog/infrastructure/HeaderAccountResource';
import {Observable} from 'rxjs';
import {HeaderAccount} from 'src/app/header/header-root/header-account-info-dialog/domain/HeaderAccount';

@Injectable()
export class HeaderAccountService {

  constructor(private readonly headerAccountStorageService: HeaderAccountStorageService,
              private readonly headerAccountResource: HeaderAccountResource) {
  }

  fetchHeaderAccount(): void {
    this.headerAccountResource.getAccount().subscribe((account: HeaderAccount) => {
      this.headerAccountStorageService.set(account);
    });
  }

  selectHeaderAccount(): Observable<HeaderAccount> {
    return this.headerAccountStorageService.observe();
  }


}
