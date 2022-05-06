import { Reducer } from "react";
import { RouterState } from "redux-first-history";
import { LOAD_POST, LOAD_TODOS, LOAD_USERS } from "./actionTypes";
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

export type IPost = {
  body: string;
  id: number;
  title: string;
  userId: number;
};

export type IAlbum = {
  userId: number,
  id: number;
  title: string;
};

export type IComment = {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string,
};

export interface IState {
  todos: ITodo[];
  users: IUser[];
  posts: IPost[];
}

export interface IStore {
  app: IState;
  router: RouterState;
}

export type IFetchTodoSuccess = {
  type: typeof LOAD_TODOS;
  payload: ITodo[];
}

export type IFetchUserSuccess = {
  type: typeof LOAD_USERS;
  payload: IUser[];
};

export type IFetchPostSuccess = {
  type: typeof LOAD_POST;
  payload: IPost[];
};
