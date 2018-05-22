import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(
    private http: Http
  ) { }

  getAllUsers() {
    return this.http.get('/api/user');
  }

  getOneUser(userID) {
    return this.http.get('/api/user/' + userID);
  }

  addNewUser(user) {
    return this.http.post('/api/user', user);
  }

  updateUser(userID, user) {
    return this.http.put('/api/user/' + userID, user);
  }

  deleteUser(userID) {
    return this.http.delete('/api/user/' + userID);
  }
}
