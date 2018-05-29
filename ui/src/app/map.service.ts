import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(
    private http: Http
  ) { }

  addCurrentZipCode(zip) {
    return this.http.post(`${environment.apiHost}/api/map`, zip);
  }
}
