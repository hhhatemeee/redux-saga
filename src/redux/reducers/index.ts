import { action, Type } from "../types";


const initialState = {
  users: []
}

export default function reducer(state = initialState, action: action) {
  switch (action.type) {
    case Type.LOAD_USERS:
      return {
        ...state,
        users: [...state.users, ...action.payload]
      }
    default:
      return state;
  }
}