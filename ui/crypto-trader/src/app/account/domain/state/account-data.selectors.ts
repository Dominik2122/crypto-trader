import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAccountData from 'src/app/account/domain/state/account-data.reducer';
import {State} from "src/app/account/domain/state/account-data.reducer";

export const selectAccountDataState = createFeatureSelector<fromAccountData.State>(
  fromAccountData.accountDataFeatureKey
);

export const selectAccountBalance = createSelector(
  selectAccountDataState,
  (state: State) => state.balance
);
