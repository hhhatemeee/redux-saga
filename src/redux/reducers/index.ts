import { AnyAction } from "redux";

import { IState, } from "../types";
import { LOAD_POST, LOAD_TODOS, LOAD_USERS } from "../types/actionTypes";

const initialState: IState = {
  todos: [],
  users: [],
  posts: [],
}

/* src: https://redux.js.org/usage/usage-with-typescript
  If you do actually write a standalone reducer, it's typically sufficient
  to declare the type of the initialState value, and type the action as AnyAction:
*/
export default function reducer(state: IState = initialState, action: AnyAction): IState {
  switch (action.type) {
    case LOAD_POST:
      return {
        ...state,
        posts: [...state.posts, ...action.payload],
      }
    case LOAD_TODOS:
      return {
        ...state,
        todos: [...state.todos, ...action.payload]
      }
    case LOAD_USERS:
      return {
        ...state,
        users: [...state.users, ...action.payload]
      }
    default:
      return state;
  }
}