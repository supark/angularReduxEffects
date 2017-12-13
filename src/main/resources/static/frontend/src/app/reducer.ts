import * as fromUser from './compoents/listuser/reducer/listuser.reducer';
// import {createSelector} from 'reselect';
import {createSelector, createFeatureSelector} from '@ngrx/store';
export interface State {
  user: fromUser.AppState;
}

export const reducers = {
  user: fromUser.listuserReducer

};



export const getUsersState = createFeatureSelector<fromUser.AppState>('user');
export const getUserEntities = createSelector(getUsersState, fromUser.getUsers);
export const getUsersLoading = createSelector(getUsersState, fromUser.getLoading);
export const getUsersLoaded = createSelector(getUsersState, fromUser.getLoaded);
