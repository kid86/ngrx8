import {Component, Input, OnInit} from '@angular/core';
import {IUser} from '../../modules/user.interface';

@Component({
  selector: 'app-components-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  @Input() user: IUser;
  constructor() { }

  ngOnInit(): void {
  }

}
