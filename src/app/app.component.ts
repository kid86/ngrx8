import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {IAppState} from './store/state/app.state';
import {selectConfig} from './store/selectors/config.selectors';
import {select} from '@ngrx/core';
import {GetConfig} from './store/actions/config.actions';
import {Observable} from 'rxjs';
import {IConfig} from './modules/config.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngrx8';
  config$: Observable<IConfig>; // = this.store.pipe(select(selectConfig));

  constructor(private store: Store<IAppState>) {
  }

  ngOnInit() {
    this.config$ = this.store.select(selectConfig);
    this.store.dispatch(new GetConfig());
  }
}
