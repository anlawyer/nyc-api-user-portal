import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  userToFind: any;
  currID: number;
  user = {
    name: '',
    email: '',
    zip: '',
    age_range: '',
    industry: ''
  }

  constructor(
    private UserService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.forEach( param => this.currID = param.id )
    this.UserService.getOneUser(this.currID)
    .subscribe(res => this.userToFind = res.json())
  }

  onSubmit() {
    console.log(this.user);
    this.UserService.updateUser(this.currID, this.user)
    .subscribe(res => console.log(res.json()))
     this.router.navigate(['user/list']);
  }

}