import { IFetchPostSuccess, IFetchTodoSuccess, IFetchUserSuccess, IPost, ITodo, IUser, } from "../types";
import { LOAD_POST, LOAD_TODOS, LOAD_USERS } from "../types/actionTypes";

export const fetchTodo = (payload: ITodo[]): IFetchTodoSuccess => ({ type: LOAD_TODOS, payload });

export const fetchUser = (payload: IUser[]): IFetchUserSuccess => ({ type: LOAD_USERS, payload });

export const fetchPosts = (payload: IPost[]): IFetchPostSuccess => ({ type: LOAD_POST, payload });


