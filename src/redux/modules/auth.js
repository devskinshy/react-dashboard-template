import {createAction, createActions, handleActions} from "redux-actions";
import {getAccessToken, getRefreshToken} from "axios-jwt";
import {put, takeLatest} from 'redux-saga/effects';
import produce from "immer";
import createRequestSaga, {createRequestActionTypes} from "../createRequestSaga";
import {clearToken, getUser, isValidToken, setToken} from "../../utils/jwt";
import * as authAPI from '../../api/auth';

const initialState = {
  isInitialized: false,
  isAuthenticated: false,
  user: null,
  error: null
};

const [INITIALIZE, INITIALIZE_SUCCESS, INITIALIZE_FAILURE] = createRequestActionTypes('auth/INITIALIZE');
const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes('auth/LOGIN');
const LOGOUT = 'auth/LOGOUT';

export const {auth: {initialize, login, logout}} = createActions({
  [INITIALIZE]: () => {},
  [LOGIN]: ({email, password}) => ({email, password}),
  [LOGOUT]: () => {}
});

function* initializeSaga() {
  const accessToken = getAccessToken();
  const refreshToken = getRefreshToken();

  if(isValidToken(accessToken)) {
    const successAction = createAction(INITIALIZE_SUCCESS, (token) => (token));
    yield put(successAction({
      access_token: accessToken,
      refresh_token: refreshToken
    }));
    return;
  }

  if(isValidToken(refreshToken)) {
    yield createRequestSaga(INITIALIZE, authAPI.initialize)({payload: refreshToken})
    return;
  }

  const failureAction = createAction(INITIALIZE_FAILURE);
  yield put(failureAction({
    rd: null
  }));
}
const loginSaga = createRequestSaga(LOGIN, authAPI.login);

export function* authSaga() {
  yield takeLatest(INITIALIZE, initializeSaga);
  yield takeLatest(LOGIN, loginSaga);
}

const auth = handleActions({
  [INITIALIZE_SUCCESS]: (state, {payload: token}) => {
    setToken(token)

    return produce(state, draft => {
      draft.isInitialized = true;
      draft.isAuthenticated = true;
      draft.user = getUser(token.access_token)
      draft.error = null
    })
  },
  [INITIALIZE_FAILURE]: (state, {payload: error}) => {
    clearToken();

    return produce(state, draft => {
      draft.isInitialized = true;
      draft.isAuthenticated = false;
      draft.user = null;
      draft.error = error.rd;
    })
  },
  [LOGIN_SUCCESS]: (state, {payload: token}) => {
    setToken(token)

    return produce(state, draft => {
      draft.isAuthenticated = true;
      draft.user = getUser(token.access_token);
      draft.error = null;
    })
  },
  [LOGIN_FAILURE]: (state, {payload: error}) => {
    clearToken();

    return produce(state, draft => {
      draft.isAuthenticated = false;
      draft.user = null;
      draft.error = error.rd;
    })
  },
  [LOGOUT]: (state) => {
    clearToken();

    return produce(state, draft => {
      draft.isAuthenticated = false;
      draft.user = null;
      draft.error = null;
    })
  }
}, initialState);

export default auth;