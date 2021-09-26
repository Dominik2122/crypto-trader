import { Action, createReducer, on } from '@ngrx/store';
import * as AccountDataActions from 'src/app/account/domain/state/account-data.actions';
import {HeaderBalanceHistoryNode} from "src/app/header/header-root/header-account-info-dialog/domain/HeaderBalanceHistoryNode";
import {Transaction} from "src/app/account/domain/Transaction";

export const accountDataFeatureKey = 'accountData';

export interface State {
  balance: number;
  transactions: Array<Transaction>,
  balanceHistory: Array<HeaderBalanceHistoryNode>

}

export const initialState: State = {
  balance: 0,
  transactions: null,
  balanceHistory: null
};


export const reducer = createReducer(
  initialState,

  on(AccountDataActions.fetchAccountData, state => state),
  on(AccountDataActions.fetchAccountDataFailure, (state, action) => state),
  on(AccountDataActions.fetchAccountDataSuccess, (state, action) => state),

);

