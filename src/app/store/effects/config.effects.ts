import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {EConfigActions, GetConfig, GetConfigSuccess} from '../actions/config.actions';
import {switchMap} from 'rxjs/operators';
import {IConfig} from '../../modules/config.interface';
import {of} from 'rxjs';
import {ConfigService} from '../../services/config.service';

@Injectable()
export class ConfigEffects {
  @Effect()
  getConfig$ = this.actions$.pipe(
    ofType<GetConfig>(EConfigActions.GetConfig),
    switchMap(() => this.configService.getConfig()),
    switchMap((config: IConfig) => {
      return of(new GetConfigSuccess(config));
    })
  );

  constructor(
    private configService: ConfigService,
    private actions$: Actions) {}
}
