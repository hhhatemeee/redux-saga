import { IFetchTodoSuccess, IFetchUserSuccess, ITodo, IUser, } from "../types";
import { LOAD_TODOS, LOAD_USERS } from "../types/actionTypes";

export const fetchTodo = (payload: ITodo[]): IFetchTodoSuccess => ({ type: LOAD_TODOS, payload });

export const fetchUser = (payload: IUser[]): IFetchUserSuccess => ({ type: LOAD_USERS, payload });
