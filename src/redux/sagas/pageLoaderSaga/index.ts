import { LOCATION_CHANGE, RouterActions } from "redux-first-history";
import { apply, call, CallEffect, fork, ForkEffect, put, PutEffect, take, TakeEffect } from "redux-saga/effects";
import { fetchPosts } from "../../reducers/actions";
import { IFetchPostSuccess, IPost } from "../../types";

// явная типизация (в отличие от типизации в initialSaga.ts (из-за дженерика))
function* loadPostData(): Generator<CallEffect<Response> | PutEffect<IFetchPostSuccess>, void, any> {
  const response: Response = yield call(fetch, 'https://jsonplaceholder.typicode.com/posts');

  // не уверен, т.к. data это IUser[], но лезут ошибки
  const data: IPost[] = yield apply(response, response.json, []);

  yield put(fetchPosts(data));
}

export default function* pageLoaderSaga(): Generator<TakeEffect | CallEffect, any, RouterActions> {
  // //Если отлавливаем через обычный useEffect в Post.tsx
  // yield takeEvery('LOAD_POST_DATA', loadPostData);

  // В такой реализации компонент <Post> не знает о том, что ему прилетают какие то данные
  // Постоянно отлавливаем событие на смену url, при совпадении юзаем воркер
  while (1) {
    const action: RouterActions = yield take(LOCATION_CHANGE);

    if (action.payload.location.pathname.endsWith('post')) {
      yield call(loadPostData);
    }
  }
}