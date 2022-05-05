import createSagaMiddleware from "@redux-saga/core";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createBrowserHistory } from "history";
import { createReduxHistoryContext } from "redux-first-history";

import appReducer from "./reducers/index";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

// FAQ: https://www.npmjs.com/package/redux-first-history

const {
  createReduxHistory,
  routerMiddleware,
  routerReducer
} = createReduxHistoryContext({ history: createBrowserHistory() });

const store = configureStore(
  {
    reducer: combineReducers({
      router: routerReducer,
      app: appReducer,
    }),
    middleware: [sagaMiddleware, routerMiddleware],
    devTools: window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,
  }
);

export const history = createReduxHistory(store);

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export default store;