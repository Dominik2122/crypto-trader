import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromAccountData from 'src/app/account/account/domain/state/AccountDataReducer';
import {State} from 'src/app/account/account/domain/state/AccountDataReducer';

export const selectAccountDataState = createFeatureSelector<fromAccountData.State>(
  fromAccountData.accountDataFeatureKey
);

export const selectAccountBalance = createSelector(
  selectAccountDataState,
  (state: State) => state.balance
);

export const selectAccountTransactions = createSelector(
  selectAccountDataState,
  (state: State) => state.transactions
);

export const selectAccountPastData = createSelector(
  selectAccountDataState,
  (state: State) => state.pastData
);
