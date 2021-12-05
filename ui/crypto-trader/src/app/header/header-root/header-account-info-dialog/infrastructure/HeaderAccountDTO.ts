import {HeaderAccountPastDataDTO} from 'src/app/header/header-root/header-account-info-dialog/infrastructure/HeaderAccountPastDataDTO';

export class HeaderAccountDTO {

  constructor(
    readonly balance: number,
    readonly pastData: Array<HeaderAccountPastDataDTO>
  ) {}

}
