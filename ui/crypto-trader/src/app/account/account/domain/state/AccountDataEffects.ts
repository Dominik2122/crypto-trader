import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, concatMap, map} from 'rxjs/operators';
import {of} from 'rxjs';

import * as AccountDataActions from 'src/app/account/account/domain/state/AccountDataActions';
import {AccountResource} from "src/app/account/account/inftrastructure/AccountResource";


@Injectable()
export class AccountDataEffects {

  loadAccountDatas$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AccountDataActions.fetchAccountData),
      map((action) => action.days),
      concatMap((days: number) => {
        return this.accountResource.fetchData(days).pipe(
            map(data => AccountDataActions.fetchAccountDataSuccess({ data })),
            catchError(error => of(AccountDataActions.fetchAccountDataFailure({ error }))))
        }
      )
    );
  });



  constructor(private actions$: Actions,
              private accountResource: AccountResource) {}

}
