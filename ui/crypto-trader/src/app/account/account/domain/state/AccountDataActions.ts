import {createAction, props} from '@ngrx/store';
import {Account} from 'src/app/account/account/domain/Account';

export const fetchAccountData = createAction(
  '[AccountData] Fetch AccountData',
  props<{ days: number }>()
);

export const fetchAccountDataSuccess = createAction(
  '[AccountData] Fetch AccountData Success',
  props<{ data: Account }>()
);

export const fetchAccountDataFailure = createAction(
  '[AccountData] Fetch AccountData Failure',
  props<{ error: any }>()
);
