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
  source: any;
  markers: any;

  constructor(
    private userService: UserService,
  ) {
    this.user = userService.currentUser;
    userService.userUpdate.subscribe((differentUser) => {
      this.user = differentUser;
    });
  }

  ngOnInit() {
    this.buildMap();
  }

  buildMap() {
    mapboxgl.accessToken = environment.mapbox.accessToken;
    this.map = new mapboxgl.Map({
      container: 'map', // container id
      style: 'mapbox://styles/anlawyer/cjhk37km103vb2smzmvqzep7i'
    });

    this.map.on('load', (event) => {
       /// register source
       // this.map.addSource('names', {
       //    type: 'geojson',
       //    data: '../../../../assets/Neighborhood_Names_GIS.geojson'
       // });
       // this.source = this.map.getSource('names')
       // console.log(this.map)
       // console.log(this.source)
     });
  }
}
