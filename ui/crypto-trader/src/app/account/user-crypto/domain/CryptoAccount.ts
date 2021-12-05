import {OwnedCrypto} from 'src/app/account/user-crypto/domain/OwnedCrypto';
import {CryptoAccountDTO} from 'src/app/account/user-crypto/infrastructure/CryptoAccountDTO';

export class CryptoAccount {
  constructor(
    readonly balance: string,
    readonly cryptos: Array<OwnedCrypto>
  ) {
  }

  static fromDTO(dto: CryptoAccountDTO): CryptoAccount {
    return new CryptoAccount(
      dto.balance,
      dto.owned.map((crypto) => OwnedCrypto.fromDTO(crypto))
    );
  }
}
