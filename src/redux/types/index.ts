import { LOAD_TODOS, LOAD_USERS } from "./actionTypes";
export interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export type IUser = {
  username: string;
  id: number;
  name: string;
  email: string;
}

export interface IState {
  todos: ITodo[];
  users: IUser[];
}

export type IFetchTodoSuccess = {
  type: typeof LOAD_TODOS;
  payload: ITodo[];
}

export type IFetchUserSuccess = {
  type: typeof LOAD_USERS;
  payload: IUser[];
}

