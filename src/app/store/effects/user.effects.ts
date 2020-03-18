import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {EUserActions, UserActions} from '../actions/user.actions';
import {map, switchMap, withLatestFrom} from 'rxjs/operators';
import {of} from 'rxjs';
import {IAppState} from '../state/app.state';
import {select, Store} from '@ngrx/store';
import {IUserHttp} from '../../modules/http-models/user-http.interface';
import {UserService} from '../../services/user.service';
import {selectUserList} from '../selectors/user.selectors';
import {IUser} from '../../modules/user.interface';
import {Router} from '@angular/router';

@Injectable()
export class UserEffects {

  constructor(
    private userService: UserService,
    private userActions: UserActions,
    private actions$: Actions,
    private route: Router,
    private store: Store<IAppState>
  ) {}

  @Effect()
  getUser$ = this.actions$.pipe(
    ofType(EUserActions.GetUser),
    // map((action: any) => {
    //   console.log(action);
    //   return action.payload;
    // }),
    withLatestFrom(this.store.pipe(select(selectUserList))),
    switchMap((z: any) => {
      const action = z[0];
      const users: IUser[] = z[1];
      if (!users) {
        return of();
      }
      const selectedUser = users.find(user => user.id === parseInt(action.payload.userId));
      return of(this.userActions.getUserSuccess(selectedUser));
    })
  );

  @Effect()
  getUsers$ = this.actions$.pipe(
    ofType(EUserActions.GetUsers),
    switchMap(() => this.userService.getUsers()),
    switchMap((userHttp: IUserHttp) => {
      return of(this.userActions.getUsersSuccess(userHttp.users));
    })
  );

  @Effect()
  getUsersSuccess$ = this.actions$.pipe(
    ofType(EUserActions.GetUserSuccess),
    switchMap((z: any) => {
      return of();
    })
  );

}
