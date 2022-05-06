import { all, call, spawn } from "redux-saga/effects";
import { loadOnAbort } from "./clickSagaAbort";
import { loadOnAction } from "./clickSagaAction";

import loadBasicData from "./initialSagas";
import pageLoaderSaga from "./pageLoaderSaga";


export default function* rootSaga() {
  const sagas = [loadBasicData, pageLoaderSaga, loadOnAbort, loadOnAction];

  // Доп. Обработка ошибок + рестарт
  const retrySagas = sagas.map((saga) => {
    return spawn(function* () {
      while (1) {
        try {
          yield call(saga); // блокирующий вызов, чтобы корректно отследить ошибку
          break;
        } catch (e) {
          console.log(e);
        }
      }
    })
  });

  yield all(retrySagas);
}






/*
  1 способ создания корневой саги
  все 3 саги запустятся параллельно, при этом рут сага будет заблокирована
  пока не произойдет вызов 3 саг. Если хоть одна из них является блокирующей, то
  к дальнейшему коду перейдет только тогда, когда все 3 саги завершаться.
  Если любая из 3 саг зафейлится, то все последущие процессы будут отменены и сама рут сага.
*/
// export default function* rootSaga() {
//   yield [
//     saga1(),
//     saga2(),
//     saga3(),
//   ]
//   console.log('Root Saga');
// }

/*
  2 способ.
  fork всегда создает неблокирующий вызов. Код после массива с fork выполняется сразу.
  С ошибками точно также, как и в 1 способе.
*/
// export default function* rootSaga() {
//   console.log('Root Saga');

//   yield [
//     fork(saga1),
//     fork(saga2),
//     fork(saga3),
//   ]
// }

/*
  3 способ.
  При ошибке одной из саг, остальные будут отлично работать
*/
// export default function* rootSaga() {
//   const sagas = [saga1, saga2, saga3];

//   // Обработка ошибок
//   const retrySagas = sagas.map((saga) => {
//     return spawn(function* () {
//       while (1) {
//         try {
//           yield call(saga); // блокирующий вызов, чтобы корректно отследить ошибку
//           break;
//         } catch (e) {
//           console.log(e);
//         }
//       }
//     })
//   });

//   yield all(retrySagas);
// } 