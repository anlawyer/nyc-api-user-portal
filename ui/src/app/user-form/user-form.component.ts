import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  user = {
    name: '',
    email: '',
    zip: '',
    age_range: '',
    industry: ''
  }

  constructor(
    private router: Router,
    private UserService: UserService
  ) { }

  onSubmit() {
    console.log(this.user);
    this.UserService.addNewUser(this.user)
    .subscribe(res => console.log(res.json()))
     this.router.navigate(['user/list']);
  }

  ngOnInit() {
  }

}
