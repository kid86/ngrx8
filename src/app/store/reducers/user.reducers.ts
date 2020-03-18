import {IUserStateRecord, UserStateFactory} from '../state/user.state';
import {EUserActions, UserActions} from '../actions/user.actions';
import {ActionReducer} from '@ngrx/store';

export const userReducers: ActionReducer<IUserStateRecord> = (state: IUserStateRecord = UserStateFactory(), action: UserActions) => {
  switch (action.type) {
    case EUserActions.GetUsersSuccess: {
      return state.set('users', action.payload.users);
    }

    case EUserActions.GetUserSuccess: {
      return state.set('selectedUser', action.payload.users);
    }

    default:
      return state;
  }
};
