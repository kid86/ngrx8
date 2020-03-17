import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import {IConfig} from '../modules/config.interface';

@Injectable({ providedIn: 'root' })
export class ConfigService {
  configUrl = `${environment.apiUrl}config.json`;

  constructor(private http: HttpClient) { }

  getConfig(): Observable<IConfig> {
    return this.http.get<IConfig>(this.configUrl);
  }
}
