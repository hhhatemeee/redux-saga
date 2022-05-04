import { IFetchTodo, IUser, Type } from "../types";

export const fetchTodo: IFetchTodo = (payload: IUser) => ({ type: Type.LOAD_USERS, payload });