import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from './../environments/environment';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  usersList: Array<any>;
  usersChange: Subject<Array<any>> = new Subject<Array<any>>();

  constructor(
    private http: Http
  ) {
    this.usersChange.subscribe((newUsersList) => {
      this.usersList = newUsersList;
    });
  }

  getAllUsers() {
    this.http.get(`${environment.apiHost}/api/user`)
    .subscribe(res => this.usersList = res.json())
    this.usersChange.next(this.usersList);
  }

  getOneUser(userID) {
    return this.http.get(`${environment.apiHost}/api/user/` + userID);
  }

  addNewUser(user) {
    return this.http.post(`${environment.apiHost}/api/user`, user);
  }

  updateUser(userID, user) {
    return this.http.put(`${environment.apiHost}/api/user/` + userID, user);
  }

  deleteUser(userID) {
    return this.http.delete(`${environment.apiHost}/api/user/` + userID);
  }
}
