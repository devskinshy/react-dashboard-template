import { createAction } from 'redux-actions';
import { call, put } from 'redux-saga/effects';
import {startLoading, finishLoading} from "./modules/loading";

export const createRequestActionTypes = type => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return [type, SUCCESS, FAILURE];
}

const createRequestSaga = (type, request) => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  const successAction = createAction(SUCCESS, response => response.data, response => response);
  const failureAction = createAction(FAILURE, e => e)

  return function* ({payload}) {
    yield put(startLoading(type));

    try {
      const response = yield call(request, payload);

      yield put(successAction(response.data));
    } catch (e) {
      console.error(e)
      const message = (e.response && e.response.data) || {rd : 'Something went wrong'}
      yield put(failureAction(message))
    }

    yield put(finishLoading(type));
  }
}

export default createRequestSaga;