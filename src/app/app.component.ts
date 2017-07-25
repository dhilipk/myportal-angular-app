import { Component } from '@angular/core';
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
}
