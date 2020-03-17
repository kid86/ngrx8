import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {IAppState} from '../../store/state/app.state';
import {Router} from '@angular/router';
import {GetUsers} from '../../store/actions/user.actions';
import {select} from '@ngrx/core';
import {selectUserList} from '../../store/selectors/user.selectors';
import {IConfig} from '../../modules/config.interface';
import {Observable} from 'rxjs';
import {IUser} from '../../modules/user.interface';
import {selectConfig} from '../../store/selectors/config.selectors';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users$: Observable<IUser[]>; // this.store.pipe(select(selectUserList));

  constructor(private store: Store<IAppState>,
              private router: Router) { }

  ngOnInit(): void {
    this.users$ = this.store.select(selectUserList);
    this.store.dispatch(new GetUsers());
  }

  navigateToUser(id: number) {
    this.router.navigate(['user', id]);
  }
}
