import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-home-automate';
  private url = 'http://server/JSON'
  private hubitatUrl = 'http://hubitat.local/apps/api/261/devices'
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

  controlHubitatSwitch(deviceId: number, command: string) {
    let uri: string = `${this.hubitatUrl}/${deviceId}/${command}?access_token=527a2413-1325-4282-99db-e414ef25ef4c`;
    this._http.get(uri)
    .subscribe(
    response => this._response = response);
    }

}
