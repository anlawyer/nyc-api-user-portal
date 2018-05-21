import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {

  user = {
    userName: '',
    userEmail: '',
    userZipCode: '',
    userAgeRange: '',
    userIndustry: ''
  }

  constructor(
    private http: Http
  ) { }

  addNewUser(user) {
    return this.http.post('/api/user', {user});
  }

  onSubmit() {
    console.log(this.user);
    this.addNewUser(this.user)
    // .subscribe(res => console.log(res.json()));
    .subscribe(res => console.log(res.json()));
  }

  ngOnInit() {
  }

}
