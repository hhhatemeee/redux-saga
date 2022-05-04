import createSagaMiddleware from "@redux-saga/core";
import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import reducer from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore(
  {
    reducer,
    middleware: [sagaMiddleware],
    devTools: window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,
  }
);

sagaMiddleware.run(rootSaga);


export type RootState = ReturnType<typeof store.getState>;
export default store;