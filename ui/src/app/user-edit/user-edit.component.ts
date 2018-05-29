import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { MapService } from '../map.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  currID: number;
  user = {
    name: '',
    email: '',
    zip: '',
    ageRange: '',
    industry: ''
  }

  constructor(
    private UserService: UserService,
    private MapService: MapService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.forEach( param => this.currID = param.id )
    this.UserService.getOneUser(this.currID)
    .subscribe(res => this.user = res.json())
  }

  onSubmit() {
    this.UserService.updateUser(this.currID, this.user)
    .subscribe(res => console.log(res.json()))
     this.router.navigate(['user/list']);
  }

  deleteUser() {
    this.UserService.deleteUser(this.currID)
    .subscribe(res => console.log(res.json()))
    this.router.navigate(['user/list']);
  }

  addZip() {
    this.MapService.addCurrentZipCode({zip: this.user.zip})
    .subscribe(res => console.log(res.json())
    this.router.navigate(['map']);
  }

}
