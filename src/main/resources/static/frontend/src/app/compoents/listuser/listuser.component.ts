import { Component, OnInit } from '@angular/core';
import {UserService} from '../../shared-service/user.service';
import {User} from '../../models/user';
import {Router} from '@angular/router';

import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import * as ListUserActions from './actions/listuser.action';
import * as fromRoot from '../../reducer';
import {AppState} from './reducer/listuser.reducer';


@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {

   users$: Observable<User[]>;
   loading$: Observable<boolean>;

    // private users: User[];

  /* constructor(private _userService: UserService, private _router: Router) { }*/

   constructor(private _userService: UserService, private _router: Router, private store: Store<AppState>) {
     // this.users$ = this.store.select(fromUser.getUsers);
     this.loading$  = this.store.select(fromRoot.getUsersLoading);
     this.users$ = this.store.select(fromRoot.getUserEntities)
   }


  /*ngOnInit() {
    this._userService.getUsers().subscribe((users$) => {
      // console.log(users);
       this.users = users$;
      //this.store.dispatch(new ListUserActions.GetUsers());
    },
      (error) => {
      console.log(error);
    },
  () => {
    console.log('success');
  });
  }*/

  ngOnInit() {
    this.store.dispatch(new ListUserActions.GetUsers());
  }


  /*deleteUser(user) {
    this._userService.deleteUser(user.id).subscribe((users) => {
      this.users.splice(this.users.indexOf(user), 1);
    },
    (error) => {
    console.log(error);
  },
() => {
  console.log('success');
});
}

updateUser(user) {
  this._userService.setter(user);
  this._router.navigate(['/op']);
}

newUser() {
  const user = new User();
  this._userService.setter(user);
  this._router.navigate(['/op']);
}

*/



}
