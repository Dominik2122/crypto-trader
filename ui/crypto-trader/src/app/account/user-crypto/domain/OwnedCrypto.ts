import {OwnedCryptoDTO} from 'src/app/account/user-crypto/infrastructure/OwnedCryptoDTO';

export class OwnedCrypto {
  constructor(
    readonly name: string,
    readonly price: number,
    readonly value: number,
    readonly amount: number
  ) {

  }

  static fromDTO(dto: OwnedCryptoDTO): OwnedCrypto {
    return new OwnedCrypto(
      dto.name,
      dto.current_price,
      dto.value,
      parseFloat(dto.amount)
    );
  }
}
