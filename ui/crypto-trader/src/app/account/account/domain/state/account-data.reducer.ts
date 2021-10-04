import { createReducer, on } from '@ngrx/store';
import * as AccountDataActions from 'src/app/account/account/domain/state/account-data.actions';
import {Transaction} from "src/app/shared/transactions/domain/Transaction";
import {BalanceHistory} from "src/app/account/account/domain/BalanceHistory";

export const accountDataFeatureKey = 'accountData';

export interface State {
  balance: number;
  transactions: Array<Transaction>,
  pastData: Array<BalanceHistory>

}

export const initialState: State = {
  balance: 0,
  transactions: null,
  pastData: null
};


export const reducer = createReducer(
  initialState,

  on(AccountDataActions.fetchAccountData, state => state),
  on(AccountDataActions.fetchAccountDataFailure, (state, action) => state),
  on(AccountDataActions.fetchAccountDataSuccess, (state, action) => Object.assign({}, state, action.data)),

);

