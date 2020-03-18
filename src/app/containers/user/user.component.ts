import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IAppState} from '../../store/state/app.state';
import {Store} from '@ngrx/store';
import {UserActions} from '../../store/actions/user.actions';
import {selectSelectedUser} from '../../store/selectors/user.selectors';
import {Observable} from 'rxjs';
import {IUser} from '../../modules/user.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user$: Observable<IUser>;

  constructor(private store: Store<IAppState>,
              private userActions: UserActions,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.user$ = this.store.select(selectSelectedUser);
    this.userActions.getUser(this.route.snapshot.params.id);
  }

}
