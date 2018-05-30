import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { environment } from '../../environments/environment';

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
    mapboxgl.accessToken = environment.mapbox.accessToken;
    this.map = new mapboxgl.Map({
      container: 'map', // container id
      style: 'mapbox://styles/anlawyer/cjhk37km103vb2smzmvqzep7i'
    });
    console.log(this.map)
    this.addDataToMap();
  }

  addDataToMap() {
    // this.map.on('load', function() {
      // Add a GeoJSON source containing place coordinates and information.
      // this.map.addSource("names", {
      //     "type": "kml",
      //     "data": '../../../../assets/Neighborhood\ Names\ GIS.kml'
      // });
    // }
  };
}
