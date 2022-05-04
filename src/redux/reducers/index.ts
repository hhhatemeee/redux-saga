import { AnyAction } from "redux";
import { IState, } from "../types";
import { LOAD_TODOS, LOAD_USERS } from "../types/actionTypes";


const initialState: IState = {
  todos: [],
  users: [],
}

export default function reducer(state: IState = initialState, action: AnyAction): IState {
  switch (action.type) {
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