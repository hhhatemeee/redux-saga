import { put, takeEvery, takeLatest, takeLeading } from 'redux-saga/effects';
import { Type } from '../types';

const getPeople = async () => {
  const request = await fetch('https://jsonplaceholder.cypress.io/todos/1');

  const data = await request.json();

  return data;
}

export function* watchClickSaga() {
  yield takeEvery('click', workerSaga);
}

export function* workerSaga(): Generator<Promise<any>> {
  const data = yield getPeople();
  console.log(data);

  yield put({ type: Type.LOAD_USERS, payload: data });
}


export default function* rootSaga() {
  yield watchClickSaga();
}

