import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IUser} from '../../modules/user.interface';

// @ts-ignore
@Component({
  selector: 'app-components-users',
  templateUrl: './user-lists.component.html',
  styleUrls: ['./user-lists.component.scss']
})
export class UserListComponent implements OnInit {

  @Input() users: IUser[];
  @Output() userSelected: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  navigateToUser(id: number) {
    this.userSelected.emit(id);
  }
}
