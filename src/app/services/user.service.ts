import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {IUserHttp} from '../modules/http-models/user-http.interface';
import {environment} from '../../environments/environment';

@Injectable()
export class UserService {
  usersUrl = `${environment.apiUrl}users.json`;

  constructor(private http: HttpClient) { }

  getUsers(): Observable<IUserHttp> {
    return this.http.get<IUserHttp>(this.usersUrl);
  }
}
