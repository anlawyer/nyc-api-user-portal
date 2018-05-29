import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from './../environments/environment';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  usersList: Array<any>;
  currentUser: any;
  userUpdate: Subject<any> = new Subject<any>();
  usersChange: Subject<Array<any>> = new Subject<Array<any>>();

  constructor(
    private http: Http
  ) {
    this.usersChange.subscribe((newUsersList) => {
      this.usersList = newUsersList;
    });
    this.userUpdate.subscribe((differentUser) => {
      this.currentUser = differentUser;
    });
  }

  getAllUsers() {
    this.http.get(`${environment.apiHost}/api/user`)
    .subscribe(res => this.usersList = res.json())
    this.usersChange.next(this.usersList);
  }

  getOneUser(userID) {
    const thisUser = this.usersList.find(user => user.id === userID);
    this.userUpdate.next(thisUser);
  }

  addNewUser(user) {
    this.http.post(`${environment.apiHost}/api/user`, user)
    .subscribe(res => this.usersList.push(res.json()));
    this.usersChange.next(this.usersList)
  }

  updateUser(userID, user) {
    this.http.put(`${environment.apiHost}/api/user/` + userID, user)
  }

  deleteUser(userID) {
    return this.http.delete(`${environment.apiHost}/api/user/` + userID);
  }
}
