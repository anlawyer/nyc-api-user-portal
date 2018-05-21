import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {

  user = {
    name: '',
    email: '',
    zip: '',
    age_range: '',
    industry: ''
  }

  constructor(
    private http: Http,
    private router: Router
  ) { }

  addNewUser(user) {
    return this.http.post('/api/user', user);
  }

  onSubmit() {
    console.log(this.user);
    this.addNewUser(this.user)
    .subscribe(res => console.log(res.json()))
     this.router.navigate(['user/list']);
  }

  ngOnInit() {
  }

}
