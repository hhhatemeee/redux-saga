import { Channel } from "redux-saga";
import { actionChannel, ActionChannelEffect, apply, call, CallEffect, ChannelTakeEffect, take } from "redux-saga/effects";
import { IComment } from "../../types";
import { LOAD_COMMENTS } from "../../types/actionTypes";


function* fetchComments(): Generator<CallEffect<any>, void, Response & IComment[]> {
  const response: Response = yield call(
    fetch,
    'https://jsonplaceholder.typicode.com/comments'
  );

  const data: IComment[] = yield apply(response, response.json, []);

  console.log('comments:', data);
}

export function* loadOnAction(): Generator<
  ChannelTakeEffect<any> | ActionChannelEffect | CallEffect<void>,
  void,
  Channel<any>
> {
  const channel: Channel<any> = yield actionChannel(LOAD_COMMENTS); //Собирает в себя все экшены(в данном случае клики)

  while (1) {
    //По очереди их выплёвывает
    yield take(channel);

    yield call(fetchComments);
  }
}
