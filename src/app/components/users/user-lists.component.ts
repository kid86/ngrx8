import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IUser} from '../../modules/user.interface';
import {UserActions} from '../../store/actions/user.actions';
import {Store} from '@ngrx/store';
import {IAppState} from '../../store/state/app.state';

// @ts-ignore
@Component({
  selector: 'app-components-users',
  templateUrl: './user-lists.component.html',
  styleUrls: ['./user-lists.component.scss']
})
export class UserListComponent implements OnInit {

  @Input() users: IUser[];
  @Output() userSelected: EventEmitter<number> = new EventEmitter();

  constructor(private userActions: UserActions) { }

  ngOnInit(): void {
  }

  navigateToUser(id: number) {
    this.userActions.getUser(id);
    // this.userSelected.emit(id);
  }
}
