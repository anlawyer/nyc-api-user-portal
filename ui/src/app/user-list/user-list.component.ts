import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: any;

  constructor(
    private http: Http
  ) { }

  callDB() {
    this.http.get('/api/user')
    .subscribe(res => this.users = res.json());
  }

  ngOnInit() {
    this.callDB();
  }

}
