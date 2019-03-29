import * as AuthActions from "../Actions/auth.actions";
import { AuthActionTypes } from "../Actions/auth.actions";

export interface State {
  user: Array<any>;
  tokens: Array<any>;
  error: string;
  isLoading: boolean;
}

const initialState: State = {
  user: [],
  tokens: [],
  error: "",
  isLoading: false
};

export function AuthReducer(state = [], action: AuthActions.actions) {
  switch (action.type) {
    case AuthActionTypes.LoginUser:
      return action;
      break;
    case AuthActionTypes.LoggedUser:
      return {
        ...state,
        isLoading: false,
        token: action.payload
      };
  }
}
