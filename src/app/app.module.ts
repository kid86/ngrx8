import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {UsersComponent} from './containers/users/users.component';
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {UserComponent} from './containers/user/user.component';
import {UserListComponent} from './components/users/user-lists.component';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {environment} from '../environments/environment.prod';
import {appReducers} from './store/reducers/app.reducers';
import {UserEffects} from './store/effects/user.effects';
import {ConfigEffects} from './store/effects/config.effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {ConfigService} from './services/config.service';
import {UserService} from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserDetailsComponent,
    UserComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([UserEffects, ConfigEffects]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    AppRoutingModule,
    StoreDevtoolsModule.instrument({
      maxAge: 15, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [
    UserService,
    ConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
