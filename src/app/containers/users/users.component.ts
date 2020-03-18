import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {IAppState} from '../../store/state/app.state';
import {Router} from '@angular/router';
import {UserActions} from '../../store/actions/user.actions';
import {selectUserList} from '../../store/selectors/user.selectors';
import {Observable} from 'rxjs';
import {IUser} from '../../modules/user.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users$: Observable<IUser[]>;

  constructor(private store: Store<IAppState>,
              private userActions: UserActions,
              private router: Router) { }

  ngOnInit(): void {
    this.users$ = this.store.select(selectUserList);
    this.userActions.getUsers();
  }

  navigateToUser(id: number) {
    this.router.navigate(['user', id]);
  }
}
