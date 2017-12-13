import * as ListUserActions from '../actions/listuser.action';
import {User} from '../../../models/user';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

export type Action = ListUserActions.Actions;

export const initialState: AppState = {
  entities: [],
  loading: false,
  loaded: true

};

export interface AppState {
  entities: User[];
  loading: boolean;
  loaded: boolean;
}

export function listuserReducer(state: AppState  = initialState, action: Action) {
  switch (action.type) {
    case ListUserActions.GET_USERS:
      return {...state, loading: true , loaded: false};
    case ListUserActions.GET_USERS_SUCCESS:
      return {...state, entities: action.payload, loading: false,  loaded: true};
    case ListUserActions.GET_USERS_FAIL:
    return {...state, entities: [], loading: false, loaded: true};
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

export const getUsers = (state: AppState) => state.entities;
export const getLoading = (state: AppState ) => state.loading;
export const getLoaded = (state: AppState ) => state.loaded;
