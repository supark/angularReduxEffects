import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

//import 'rxjs/add/observable/do';
//import 'rxjs/add/observable/delay';
import {User} from '../user';

@Injectable()
export class UserService {
  private baseUrl: String = 'http://localhost:8080/api';
  private headers = new Headers({'Content-Type': 'application/json'});
  private options = new RequestOptions({headers: this.headers});
  private user =  new User();

  constructor(private http: Http) { }

  getUsers() {

    return this.http.get(this.baseUrl + '/users', this.options).map((response: Response) => response.json())
    .catch(this.errorHandler);
  }

  getUser(id: Number) {

        return this.http.get(this.baseUrl + '/user/' + id, this.options).map((response: Response) => response.json())
        .catch(this.errorHandler);
      }

  deleteUser(id: Number) {

                return this.http.delete(this.baseUrl + '/user/' + id, this.options).map((response: Response) => response.json())
                .catch(this.errorHandler);
              }

  createUser(user: User) {

            return this.http.post(this.baseUrl + '/user/', JSON.stringify(user), this.options).map((response: Response) => response.json())
                    .catch(this.errorHandler);
  }

  updateUser(user: User) {

            return this.http.put(this.baseUrl + '/user/', JSON.stringify(user), this.options).map((response: Response) => response.json())
                        .catch(this.errorHandler);
      }

  errorHandler(error: Response) {
    return Observable.throw(error || 'SERVER ERROR');
  }

  setter(user: User) {
    this.user = user;
  }

  getter() {
    return this.user;
  }
}
