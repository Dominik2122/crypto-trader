import {Injectable} from "@angular/core";
import {TransactionRequest} from "src/app/shared/transactions/inftrastructure/TransactionRequest";
import {Storage} from "src/app/util/base/domain/Storage";
import {TransactionResource} from "src/app/shared/transactions/inftrastructure/TransactionResource";
import {map, take} from "rxjs/operators";
import {BehaviorSubject, combineLatest, Observable} from "rxjs";
import {HeaderAccountResource} from "src/app/header/header-root/header-account-info-dialog/infrastructure/HeaderAccountResource";
import {OwnedCryptoResource} from "src/app/account/user-crypto/infrastructure/OwnedCryptoResource";
import {HomeTreeNodeResource} from "src/app/home/home-tree/infrastructure/HomeTreeNodeResource";
import {HomeTreeNode} from "src/app/home/home-tree/domain/HomeTreeNode";
import {OwnedCrypto} from "src/app/account/user-crypto/domain/OwnedCrypto";
import {TradingInfo} from "src/app/trading/trading-root/trading-crypto-picker/TradingInfo";

@Injectable()
export class TradingService extends Storage<TransactionRequest> {

  sold$: BehaviorSubject<void> = new BehaviorSubject<void>(null)

  constructor(
    private readonly transactionResource: TransactionResource,
    private readonly headerAccountResource: HeaderAccountResource,
    private readonly ownedCryptoResource: OwnedCryptoResource,
    private readonly homeTreeNodeResource: HomeTreeNodeResource
  ) {
    super()
  }


  fetchTradingInfo(cryptoName: string): Observable<TradingInfo> {
    return combineLatest([
        this.headerAccountResource.getAccount(),
        this.ownedCryptoResource.fetchOwnedCrypto(),
        this.homeTreeNodeResource.getTreeNodes(),
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


  prepareNewTransaction(cryptoName: string, amount: number) {
    this.set(new TransactionRequest(cryptoName, amount))
  }

  finalizeTransaction(): void {
    this.transactionResource.tradeCrypto(
      this.get()
    )
      .pipe(
        take(1))
      .subscribe(() => {
        this.sold$.next()
      })
  }

  observeSold(): Observable<void> {
    return this.sold$.asObservable()
  }




}
