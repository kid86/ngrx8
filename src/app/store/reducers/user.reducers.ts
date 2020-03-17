import {initialUserState, IUserState} from '../state/user.state';
import {EUserActions, UserActions} from '../actions/user.actions';

export const userReducers = (state = initialUserState, action: UserActions): IUserState => {
  switch (action.type) {
    case EUserActions.GetUsersSuccess: {
      return {
        ...state,
        users: action.payload.users
      };
    }

    case EUserActions.GetUserSuccess: {
      console.log(action);
      return {
        ...state,
        selectedUser: action.payload
      };
    }

    default:
      return state;
  }
};
