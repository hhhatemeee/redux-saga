import { delay, CallEffect, call, all, fork } from "redux-saga/effects";

// case когда нам нужны данные во всём приложении и их нужно загружать сразу при входе на страницу:

function* auth(): Generator<CallEffect<true>, boolean> {
  yield delay(2000);

  console.log('auth');

  return true;
}

// типизация для повторного использования
function* loadUsers<T>(request: RequestInfo): Generator<CallEffect<Response>, void, Response & T> {
  const response: Response = yield call(fetch, request);

  const data: T = yield call([response, response.json]);

  console.log(data);
}

export default function* loadBasicData() {
  yield all([
    fork(auth),
    fork(loadUsers, 'https://jsonplaceholder.typicode.com/users'),
  ])
}