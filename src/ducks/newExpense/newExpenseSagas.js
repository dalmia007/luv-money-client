import { put, call, takeLatest } from 'redux-saga/effects';
import { newExpense } from '../../services/api';

import {
  TRIGGER_NEW_EXPENSE,
  // NEW_RULE_SUCCESS,
  // NEW_RULE_FAIL,
} from './newExpenseActions';

import {
  GET_POOL_SUCCESS,
  // NEW_RULE_SUCCESS,
  // NEW_RULE_FAIL,
} from '../getPool/getPoolActions';

function* sagaNewExpense({expense}) {
  try {
    const pool = yield call(newExpense, expense);
    return pool;
    // yield put({ type: GET_POOL_SUCCESS, pool });
    // isLoading = false;
    // yield put({ type: NEW_RULE_LOADING, isLoading });
  } catch (err) {
    console.log(err);
    // put({ type: NEW_RULE_FAIL, err });
  }
}

function* watchNewExpense() {
  yield takeLatest(TRIGGER_NEW_EXPENSE, sagaNewExpense);
}

export default watchNewExpense;
