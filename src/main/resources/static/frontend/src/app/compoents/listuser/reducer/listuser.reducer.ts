import * as ListUserActions from '../actions/listuser.action';
import {User} from '../../../models/user';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

export type Action = ListUserActions.Actions;


/*export interface State {
  isLoading: boolean;
  isLoadSuccess: boolean;
  users: Array<User>;
}

export const initialState: State = {
  isLoading: false,
  isLoadSuccess: false,
  users: []
};*/

export interface AppState {
  users: User[];
}

export function listuserReducer(state: User[] = [], action: Action) {
  switch (action.type) {
    case ListUserActions.GET_USERS:
      return [...state];
    case ListUserActions.GET_USERS_SUCCESS:
      return [...state, ...action.payload];
    case ListUserActions.GET_USERS_FAIL:
    return [...state, ...action.payload];
    /*case ListUserActions.DELETE_USER:
      return {...state, loading: true};
    case ListUserActions.DELETE_USER_SUCCESS:
      return {...state, ...action.payload, loading: false};
    case ListUserActions.DELETE_USER_FAIL:
      return {...state, ...action.payload, loading: false};
    case ListUserActions.EDIT_USER:
      return {...state, loading: true};
    case ListUserActions.EDIT_USER_SUCCESS:
      return {...state, ...action.payload, loading: false};
    case ListUserActions.EDIT_USER_FAIL:
      return {...state, ...action.payload, loading: false};
    case ListUserActions.POST_USER:
      return {...state, loading: true};
    case ListUserActions.POST_USER_SUCCESS:
      return {...state, ...action.payload, loading: false};
    case ListUserActions.POST_USER_FAIL:
      return {...state, ...action.payload, loading: false}; */

    default: {
      return state; }
  }
}
