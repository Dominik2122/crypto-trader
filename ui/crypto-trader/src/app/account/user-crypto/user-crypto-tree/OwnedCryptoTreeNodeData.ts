import {TreeNodeData} from "src/app/util/tree/ui/domain/TreeNodeData";
import {OwnedCrypto} from "src/app/account/user-crypto/domain/OwnedCrypto";

export class OwnedCryptoTreeNodeData implements TreeNodeData {

  constructor(
    readonly price: number,
    readonly value: number,
    readonly amount: number,
    readonly crypto: string
  ) {
  }

  static fromDomain(domain: OwnedCrypto): OwnedCryptoTreeNodeData {
    return new OwnedCryptoTreeNodeData(
      domain.price,
      domain.value,
      domain.amount,
      domain.name)
  }

}
