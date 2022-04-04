import { createStore, applyMiddleware } from 'redux';
import {persistStore} from "redux-persist";
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer, {rootSaga} from './reducer';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(
  sagaMiddleware
)));
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export {store, persistor};