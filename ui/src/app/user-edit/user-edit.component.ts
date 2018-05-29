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

  user = {
    name: '',
    email: '',
    zip: '',
    agerange: '',
    industry: '',
    id: ''
  }

  constructor(
    private userService: UserService,
    private mapService: MapService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.user = userService.currentUser;
    userService.userUpdate.subscribe((differentUser) => {
      this.user = differentUser;
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.userService.updateUser(this.user.id, this.user)
    this.router.navigate(['user/list']);
  }

  deleteUser() {
    this.userService.deleteUser(this.user.id)
    // .subscribe(res => console.log(res.json()))
    this.router.navigate(['user/list']);
  }

  addZip() {
    this.mapService.addCurrentZipCode({zip: this.user.zip})
    .subscribe(res => console.log(res.json()))
    // this.router.navigate(['map']);
  }

}
