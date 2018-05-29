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
    agerange: '',
    industry: ''
  }

  constructor(
    private userService: UserService,
    private mapService: MapService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.forEach( param => this.currID = param.id )
    this.userService.getOneUser(this.currID)
    .subscribe(res => this.user = res.json())
  }

  onSubmit() {
    this.userService.updateUser(this.currID, this.user)
    .subscribe(res => console.log(res.json()))
     this.router.navigate(['user/list']);
  }

  deleteUser() {
    this.userService.deleteUser(this.currID)
    .subscribe(res => console.log(res.json()))
    this.router.navigate(['user/list']);
  }

  addZip() {
    this.mapService.addCurrentZipCode({zip: this.user.zip})
    .subscribe(res => console.log(res.json()))
    // this.router.navigate(['map']);
  }

}
