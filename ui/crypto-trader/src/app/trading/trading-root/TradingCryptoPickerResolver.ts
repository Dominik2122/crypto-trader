import {ActivatedRouteSnapshot, Resolve} from "@angular/router";
import {Observable, combineLatest} from "rxjs";
import {Injectable} from "@angular/core";
import {HeaderAccountResource} from "src/app/header/header-root/header-account-info-dialog/infrastructure/HeaderAccountResource";
import {map} from "rxjs/operators";
import {OwnedCryptoResource} from "src/app/account/user-crypto/infrastructure/OwnedCryptoResource";
import {HomeTreeNodeResource} from "src/app/home/home-tree/infrastructure/home-tree-node-resource";
import {TradingInfo} from "src/app/trading/trading-root/trading-crypto-picker/TradingInfo";
import {HomeTreeNode} from "src/app/home/home-tree/domain/HomeTreeNode";
import {OwnedCrypto} from "src/app/account/user-crypto/domain/OwnedCrypto";

@Injectable()
export class TradingCryptoPickerResolver implements Resolve<any> {

  constructor(
    private readonly headerAccountResource: HeaderAccountResource,
    private readonly ownedCryptoResource: OwnedCryptoResource,
    private readonly homeTreeNodeResource: HomeTreeNodeResource
  ) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<TradingInfo> {
    const cryptoName: string = route.queryParams['crypto'] ? route.queryParams['crypto'] : 'bitcoin'

    return combineLatest([
        this.headerAccountResource.getAccount(),
        this.ownedCryptoResource.fetchOwnedCrypto(),
        this.homeTreeNodeResource.getTreeNodes()
      ]
    ).pipe(
      map(([account, cryptoAccount, prices]) => {
        const priceData: HomeTreeNode = prices.find((price) => price.data.name === cryptoName)
        const ownedCryptoData: OwnedCrypto = cryptoAccount.cryptos.find((crypto) =>
          crypto.name === cryptoName)

        return new TradingInfo(
          account.currentBalance,
          parseFloat(cryptoAccount.balance),
          ownedCryptoData ? ownedCryptoData : new OwnedCrypto(cryptoName, null, null, 0),
          priceData.data,
          priceData.childData,
          prices.map(price => price.data.name).filter(name => name !== cryptoName)
        )
      })
    )
  }

}
