import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {TradingInfo} from 'src/app/trading/trading-root/trading-crypto-picker/TradingInfo';
import {TradingService} from 'src/app/trading/trading-root/TradingService';

@Injectable()
export class TradingCryptoPickerResolver implements Resolve<any> {

  constructor(
    private readonly tradingService: TradingService
  ) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<TradingInfo> {
    const cryptoName: string = route.queryParams.crypto ? route.queryParams.crypto : 'bitcoin';
    return this.tradingService.fetchTradingInfo(cryptoName);
  }

}
