import {OwnedCrypto} from "src/app/account/user-crypto/domain/OwnedCrypto";
import {HomeTreeNodeData} from "src/app/home/home-tree/domain/HomeTreeNodeData";
import {HomeTreeNodePastData} from "src/app/home/home-tree/domain/HomeTreeNodePastData";

export class TradingInfo {
  constructor(
    readonly balance: number,
    readonly cryptoBalance: number,
    readonly ownedCrypto: OwnedCrypto,
    readonly cryptoData: HomeTreeNodeData,
    readonly pastCryptoData: Array<HomeTreeNodePastData>,
    readonly otherCryptos: Array<string>
  ) {
  }
}
