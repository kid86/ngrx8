import {Action, Store} from '@ngrx/store';
import {IUser} from '../../modules/user.interface';
import {IAppState} from '../state/app.state';
import {Injectable} from '@angular/core';

export enum EUserActions {
  GetUsers = '[User] Get Users',
  GetUsersSuccess = '[User] Get Users Success',
  GetUser = '[User] Get User',
  GetUserSuccess = '[User] Get User Success'
}
@Injectable()
export class UserActions {
  constructor(private store$: Store<IAppState>) {}

  getUsers(dispatch: boolean = true): Action {
    const action = {type: EUserActions.GetUsers, payload: {}};
    if (dispatch === true) {
      this.store$.dispatch(action);
    }

    return action;
  }

  getUsersSuccess(users: IUser[], dispatch: boolean = true): Action {
    const action = {type: EUserActions.GetUsersSuccess, payload: {users}};
    if (dispatch === true) {
      this.store$.dispatch(action);
    }

    return action;
  }

  getUser(userId: number, dispatch: boolean = true): Action {
    const action = {type: EUserActions.GetUser, payload: {userId}};
    if (dispatch === true) {
      this.store$.dispatch(action);
    }

    return action;
  }

  getUserSuccess(users: IUser, dispatch: boolean = true) {
    const action = {type: EUserActions.GetUserSuccess, payload: {users}};
    if (dispatch === true) {
      this.store$.dispatch(action);
    }

    return action;
  }
}
