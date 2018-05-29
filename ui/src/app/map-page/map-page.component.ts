import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.css']
})
export class MapPageComponent implements OnInit {

  map: any;
  user: any;

  constructor(
    private userService: UserService,
  ) {
    this.user = userService.currentUser;
    userService.userUpdate.subscribe((differentUser) => {
      this.user = differentUser;
    });
  }

  ngOnInit() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYW5sYXd5ZXIiLCJhIjoiY2pnOXU5dHFpMWhwcjJxcWxseG91NDl5ZSJ9.lyKwIU3Uu_XrqQLcw-hE1g';
    this.map = new mapboxgl.Map({
      container: 'map', // container id
      style: 'mapbox://styles/anlawyer/cjhk37km103vb2smzmvqzep7i'
    });
  }

}
