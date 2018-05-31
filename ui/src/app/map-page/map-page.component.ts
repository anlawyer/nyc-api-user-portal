import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { environment } from '../../environments/environment';
import * as mapboxgl from 'mapbox-gl';
import * as d3 from 'd3';

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
    mapboxgl.accessToken = environment.mapbox.accessToken;
    this.map = new mapboxgl.Map({
      container: 'map', // container id
      style: 'mapbox://styles/anlawyer/cjhk37km103vb2smzmvqzep7i'
    });
    this.buildMap();
  }

  buildMap() {

    this.map.on('load', (event) => {

      d3.csv(`../assets/Census_Demographics_at_the_Neighborhood_Tabulation_Area__NTA__level.csv`)
        .then(data => {
          console.log(data)
        })
        .catch(err => {
          console.log(err)
        })
      // this.map.addLayer({
      //   'id': 'boros',
      //   'type': 'fill',
      //   'source': {
      //     type: 'geojson',
      //     data: '../assets/Borough_Boundaries.geojson'
      //   },
      //   'layout': {
      //     'visibility': 'visible'
      //   },
      //   'paint': {
      //     'fill-opacity': .7,
      //     'fill-color': 'red',
      //     'fill-outline-color': 'white'
      //   }
      // });
      // this.showPopup(event);

     });
  }

  showPopup(e) {
    // this.map.on('click', function(e) {
      var features = this.map.queryRenderedFeatures(e.point, {
        layers: ['neighborhood names'] // replace this with the name of the layer
      });

      if (!features.length) {
        return;
      }

      var feature = features[0];
      // console.log(features)
      // console.log(feature)
    //   features.forEach(feature => {
    //   var popup = new mapboxgl.Popup({ offset: [0, -15] })
    //   .setLngLat(feature.geometry.coordinates)
    //   .setHTML('<h3>' + feature.properties.Name + '</h3>')
    //   .setLngLat(feature.geometry.coordinates)
    //   .addTo(this.map);
    // })
    // });
    // console.log(popup)
  }
}
