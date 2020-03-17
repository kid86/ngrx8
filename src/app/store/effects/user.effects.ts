import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {EUserActions, GetUser, GetUsers, GetUsersSuccess, GetUserSuccess, UserActions} from '../actions/user.actions';
import {map, switchMap, withLatestFrom} from 'rxjs/operators';
import {of} from 'rxjs';
import {IAppState} from '../state/app.state';
import {select, Store} from '@ngrx/store';
import {IUserHttp} from '../../modules/http-models/user-http.interface';
import {UserService} from '../../services/user.service';
import {selectUserList} from '../selectors/user.selectors';
import {ActivatedRoute, Router} from '@angular/router';
import {IUser} from '../../modules/user.interface';

@Injectable()
export class UserEffects {
  @Effect()
  getUser$ = this.actions$.pipe(
    ofType(EUserActions.GetUser),
    map((action) => {
      return action.payload;
    }),
    withLatestFrom(this.store.pipe(select(selectUserList))),
    switchMap(([userId, users]) => {
      const selectedUser = users.find(user => user.id === userId.userId);
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
    switchMap((action) => {
      const users: IUser = action.payload.users;
      console.log(users);
      return of(this.route.navigate(['user', users.id]));
    })
  );

  constructor(
    private userService: UserService,
    private userActions: UserActions,
    private actions$: Actions,
    private route: Router,
    private store: Store<IAppState>
  ) {}
}
