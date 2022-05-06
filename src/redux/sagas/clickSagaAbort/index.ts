import { Task } from "redux-saga";
import { apply, call, CallEffect, cancel, fork, take } from "redux-saga/effects";
import { IAlbum } from "../../types";
import { LOAD_ALBUMS } from "../../types/actionTypes";


function* fetchAlbums(signal: AbortSignal): Generator<CallEffect<any>, void, Response & IAlbum> {
  const response: Response = yield call(
    fetch,
    'https://jsonplaceholder.typicode.com/albums',
    { signal }
  );

  const data: IAlbum = yield apply(response, response.json, []);

  console.log('albums:', data);
}

// при медленном соединении при частом диспаче fetch запросы будут абортиться, выполнится только последний
export function* loadOnAbort() {
  let task!: Task; // https://stackoverflow.com/questions/68208508/variable-is-used-before-its-assignment-typescript
  let abortController = new AbortController(); // для абортов fetch

  while (1) {
    yield take(LOAD_ALBUMS);

    if (task) {
      abortController.abort();

      yield cancel(task);

      abortController = new AbortController();
    }

    //https://learn.javascript.ru/fetch-abort
    task = yield fork(fetchAlbums, abortController.signal);
  }
}
