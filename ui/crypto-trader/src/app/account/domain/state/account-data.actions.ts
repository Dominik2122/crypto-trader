import { createAction, props } from '@ngrx/store';

export const fetchAccountData = createAction(
  '[AccountData] Fetch AccountData',
  props<{ days: number }>()
);

export const fetchAccountDataSuccess = createAction(
  '[AccountData] Fetch AccountData Success',
  props<{ data: any }>()
);

export const fetchAccountDataFailure = createAction(
  '[AccountData] Fetch AccountData Failure',
  props<{ error: any }>()
);
