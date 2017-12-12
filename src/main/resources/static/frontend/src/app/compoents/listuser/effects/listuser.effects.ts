import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';

import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';

 import {UserService} from '../../../shared-service/user.service';
import * as ListUserActions from '../actions/listuser.action';
import {User} from '../../../models/user';
import {Action, Store} from '@ngrx/store';
import {HttpClient} from '@angular/common/http';
// import {Http, Response, Headers, RequestOptions} from '@angular/http';

 export type Action = ListUserActions.Actions;

@Injectable()
export class ListuserEffects {

  constructor(private actions$: Actions, private postSvc: UserService) {}

  @Effect()
  GetUsers$: Observable<Action> = this.actions$.ofType(ListUserActions.GET_USERS)
    // .map((action: ListUserActions.GetUsers) => action.payload)
    .switchMap(() => this.postSvc.getUsers())
    .map(users => new ListUserActions.GetUsersSuccess(users))
    .catch(err => of(new ListUserActions.GetUsersFail({error: err.message})));
   // .switchMap(action => this.userService.getUsers())
   // .delay(2000)
   // .map((acion: ListUserActions.GetUsersSuccess) => acion.payload
   // );

}
