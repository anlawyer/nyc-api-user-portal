import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(
    private http: Http
  ) { }

  getAllUsers() {
    return this.http.get(`${environment.apiHost}/api/user`);
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
