import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(
    private http: Http
  ) { }

  callDB() {
    this.http.get('/api/user')
    .subscribe(res => console.log(res.json()));
  }

  ngOnInit() {
    this.callDB();
  }

}
