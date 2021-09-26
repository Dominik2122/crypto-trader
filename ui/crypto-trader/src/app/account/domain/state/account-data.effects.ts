import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as AccountDataActions from 'src/app/account/domain/state/account-data.actions';



@Injectable()
export class AccountDataEffects {

  loadAccountDatas$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(AccountDataActions.fetchAccountData),
      concatMap(() =>
        EMPTY.pipe(
          map(data => AccountDataActions.fetchAccountDataSuccess({ data })),
          catchError(error => of(AccountDataActions.fetchAccountDataFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
