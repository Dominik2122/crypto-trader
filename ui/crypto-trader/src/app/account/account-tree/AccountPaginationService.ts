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
        this.paginationPage$.asObservable()])
      .pipe(
        map(([transactions, page]: [Array<Transaction>, number]) => {
          this.transactionsNumber = transactions && transactions.length
          return transactions && transactions.filter((transaction, index) =>
            page * this.NODES_PER_PAGE <= index && (page * this.NODES_PER_PAGE + this.NODES_PER_PAGE) > index)
        })
      )
  }

  clickPaginationPage(page: number): void {
    this.paginationPage = page
    this.paginationPage$.next(page)
  }

  currentPaginationPages(): Observable<Array<number>> {
    return this.paginationPage$.asObservable().pipe(
      map((page: number) => {
        console.log(page)
        console.log(this.transactionsNumber/1)
        if  (page < 2) {
          return [...Array(5).keys()]
        }
        else if (page > this.transactionsNumber/10 - 2) {
          const pages: Array<number> = []
          for (let i = Math.floor(this.transactionsNumber/10 + 1) - 5;
               i < Math.floor(this.transactionsNumber/10 + 1);
               i++ ) {
              pages.push(i)
          }
          console.log(pages)
          return pages
        }
        else {
          const pages: Array<number> = []
          for (let i = page - 2; i <= page + 2; i++ ) {
            pages.push(i)
          }
          return pages
        }
      })
    )
  }

  private getNodes() {
    this.transactions$ = this.accountDataService.selectAccountTransactions()
    this.transactions$.subscribe((transactions) => {
      this.transactions = transactions
      this.transactionsNumber = transactions && transactions.length
    })
  }


}
