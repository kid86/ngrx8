import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {EUserActions, GetUser, GetUsers, GetUsersSuccess, GetUserSuccess} from '../actions/user.actions';
import {map, switchMap, withLatestFrom} from 'rxjs/operators';
import {of} from 'rxjs';
import {IAppState} from '../state/app.state';
import {select, Store} from '@ngrx/store';
import {IUserHttp} from '../../modules/http-models/user-http.interface';
import {UserService} from '../../services/user.service';
import {selectUserList} from '../selectors/user.selectors';

@Injectable()
export class UserEffects {
  @Effect()
  getUser$ = this.actions$.pipe(
    ofType<GetUser>(EUserActions.GetUser),
    map(action => action.payload),
    withLatestFrom(this.store.pipe(select(selectUserList))),
    switchMap(([id, users]) => {
      const selectedUser = users.filter(user => user.id === +id)[0];
      return of(new GetUserSuccess(selectedUser));
    })
  );

  @Effect()
  getUsers$ = this.actions$.pipe(
    ofType<GetUsers>(EUserActions.GetUsers),
    switchMap(() => this.userService.getUsers()),
    switchMap((userHttp: IUserHttp) => of(new GetUsersSuccess(userHttp.users)))
  );

  constructor(
    private userService: UserService,
    private actions$: Actions,
    private store: Store<IAppState>
  ) {}
}
