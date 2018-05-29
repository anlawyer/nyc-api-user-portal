import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
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
    agerange: '',
    industry: ''
  }

  constructor(
    private router: Router,
    private UserService: UserService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.UserService.addNewUser(this.user)
    .subscribe(res => console.log(res.json()))
     this.router.navigate(['user/list']);
  }

}
