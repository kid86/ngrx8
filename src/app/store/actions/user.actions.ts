import {Action, Store} from '@ngrx/store';
import {IUser} from '../../modules/user.interface';
import {IAppState} from '../state/app.state';

export enum EUserActions {
  GetUsers = '[User] Get Users',
  GetUsersSuccess = '[User] Get Users Success',
  GetUser = '[User] Get User',
  GetUserSuccess = '[User] Get User Success'
}
//
// export class UserActions {
//   constructor(private store$: Store<IAppState>) {}
//
//   getUsers(dispatch: boolean = true): Action {
//     // const action = {type: EUserActions.GetUser, payload: {name, price}};
//     const action = {type: EUserActions.GetUser};
//
//     if (dispatch === true) {
//       this.store$.dispatch(action);
//     }
//
//     return action;
//   }
//
//
// }

export class GetUsers implements Action {
  public readonly type = EUserActions.GetUsers;
}

export class GetUsersSuccess implements Action {
  public readonly type = EUserActions.GetUsersSuccess;
  constructor(public payload: IUser[]) {}
}

export class GetUser implements Action {
  public readonly type = EUserActions.GetUser;
  constructor(public payload: number) {}
}

export class GetUserSuccess implements Action {
  public readonly type = EUserActions.GetUserSuccess;
  constructor(public payload: IUser) {}
}

export type UserActions = GetUsers | GetUsersSuccess | GetUser | GetUserSuccess;
