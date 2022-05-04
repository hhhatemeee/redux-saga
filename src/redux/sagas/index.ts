/*
  call - (блокирующий, как await) выполняет переданную функцию. Если функция вернет promise,
  приостанавливает сагу до тех пор пока promise не вызовет resolve
  put - диспатчит переданный action
  takeEvery - создает и запускает worker сагу на каждый диспатч данного action
  fork - (неблокирующий) - эффект, который указывает iddleware выполнить неблокирующий вызов функции.
  управляет параллелизмом между сагами
*/
import { call, put, takeEvery, fork } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import { fetchTodo, fetchUser } from '../reducers/actions';
import { ITodo, IUser } from '../types';
import { CLICK } from '../types/actionTypes';

const getTodos = async (): Promise<AxiosResponse<ITodo[]>> =>
  axios.get<ITodo[]>('https://jsonplaceholder.cypress.io/todos');

const getUsers = async (): Promise<AxiosResponse<IUser[]>> =>
  axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');

export default function* rootSaga() {
  //рут сага, подписывается на watcher'a
  yield watchClickSaga();
}

export function* watchClickSaga() {
  // При каждом событии клик, запускатеся workerSaga
  yield takeEvery(CLICK, workerSaga);
}

export function* loadTodos() {
  // Нужно указывать типо получаемых данных явно
  // src: https://vhudyma-blog.eu/yield-expression-implicitly-results-in-an-any-type-because-its-containing-generator-lacks-a-return-type-annotation/
  const todos: AxiosResponse<ITodo[]> = yield call(getTodos);

  yield put(fetchTodo(todos.data));
}

export function* loadUsers() {
  const users: AxiosResponse<IUser[]> = yield call(getUsers);

  yield put(fetchUser(users.data));
}

export function* workerSaga() {
  yield fork(loadTodos);
  yield fork(loadUsers);
}



