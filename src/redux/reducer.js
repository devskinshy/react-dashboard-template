import {combineReducers} from "redux";
import storage from "redux-persist/lib/storage";
import {persistReducer} from "redux-persist";
import {all} from "redux-saga/effects";
import loading from './modules/loading';
import setting from './modules/setting';
import dashboard from './modules/dashboard'
import auth, {authSaga} from './modules/auth';

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['setting']
};

const rootReducer = combineReducers({
  loading,
  dashboard,
  setting,
  auth,
});

export function* rootSaga() {
  yield all([authSaga()]);
}

export default persistReducer(persistConfig, rootReducer);