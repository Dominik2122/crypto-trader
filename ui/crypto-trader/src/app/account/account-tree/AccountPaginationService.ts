import {Injectable} from "@angular/core";
import {AccountDataService} from "src/app/account/domain/AccountDataService";
import {Transaction} from "src/app/account/domain/Transaction";
import {BehaviorSubject, combineLatest, Observable, Subject} from "rxjs";
import {filter, map} from "rxjs/operators";

@Injectable()
export class AccountPaginationService {

  NODES_PER_PAGE: number = 10

  paginationPage: number = 0
  paginationPage$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  transactions: Array<Transaction>

  transactions$: Observable<Array<Transaction>>

  transactionsNumber: number


  constructor(private readonly accountDataService: AccountDataService) {
    this.getNodes()
  }

  transactionsToShow(): Observable<Array<Transaction>> {
    return combineLatest(
      [this.transactions$,
      this.paginationPage$.asObservable()] )
      .pipe(
      map(([transactions, page]:[Array<Transaction>, number]) => {
        console.log(transactions)
        return transactions && transactions.filter((transaction, index) =>
          page * this.NODES_PER_PAGE <= index && (page * this.NODES_PER_PAGE + this.NODES_PER_PAGE) > index)
      })
    )
  }

  setPaginationPage(page: number): void {
    this.paginationPage = page
    this.paginationPage$.next(page)
  }

  currentPaginationPage(): number {
    return this.paginationPage
  }

  private getNodes() {
    this.transactions$ = this.accountDataService.selectAccountTransactions()
    this.transactions$.subscribe((transactions) => {
      this.transactions = transactions
      this.transactionsNumber = transactions && transactions.length
    })
  }


}
