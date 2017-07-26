import { Component } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ORIGINS, DESTINATIONS } from './mock-city';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyTrip Application';
  originCities = ORIGINS;
  destinationCities = DESTINATIONS;
  EndTime: null;

}
