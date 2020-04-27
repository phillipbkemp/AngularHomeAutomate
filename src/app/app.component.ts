import { Component } from '@angular/core';
import { environment } from './../environments/environment';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-home-automate';

  private url = environment.api_url; 
  private _http: HttpClient;
  private _response: object;
  
  constructor(http: HttpClient) {
    this._http = http;
  }

  getPosts(ref: number, label: string) {
    let uri: string = `${this.url}?request=controldevicebylabel&ref=${ref}&label=${label}`;
    this._http.get(uri)
    .subscribe(
    response => this._response = response);
    }


}
