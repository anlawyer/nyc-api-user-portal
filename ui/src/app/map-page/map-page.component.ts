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
      this.showPopup(event);

     });
  }

  showPopup(e) {
      var features = this.map.queryRenderedFeatures(e.point, {
        layers: ['neighborhood names']
      });

      if (!features.length) {
        return;
      }

      var feature1 = features[0];
      var popup = new mapboxgl.Popup({ offset: [0, -15] })
      .setLngLat(feature1.geometry.coordinates)
      .setHTML('<h3>' + feature1.properties.Name + '</h3>')
      .setLngLat(feature1.geometry.coordinates)
      .addTo(this.map);

      var feature2 = features[25];
      var popup = new mapboxgl.Popup({ offset: [0, -15] })
      .setLngLat(feature2.geometry.coordinates)
      .setHTML('<h3>' + feature2.properties.Name + '</h3>')
      .setLngLat(feature2.geometry.coordinates)
      .addTo(this.map);

      var feature3 = features[80];
      var popup = new mapboxgl.Popup({ offset: [0, -15] })
      .setLngLat(feature3.geometry.coordinates)
      .setHTML('<h3>' + feature3.properties.Name + '</h3>')
      .setLngLat(feature3.geometry.coordinates)
      .addTo(this.map);
  }
}
