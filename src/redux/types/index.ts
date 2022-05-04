export interface IReducer {
  state: object;
  action?: action;
};

export interface action {
  type: Type;
  payload?: any;
};

export enum Type { 'LOAD_USERS', "test" };

export interface IUser {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}


export interface IFetchTodo {
  users: IUser[];
}


