import {OwnedCryptoDTO} from "src/app/account/user-crypto/infrastructure/OwnedCryptoDTO";

export class CryptoAccountDTO {
  constructor(
    readonly balance: string,
    readonly owned: Array<OwnedCryptoDTO>
  ) {
  }
}
