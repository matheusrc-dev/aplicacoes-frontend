import {Component} from '@angular/core';
import {HomeComponent} from './home/home.component';
import { HousingLocationComponent } from './housing-location/housing-location.component';
import { HousingLocation } from './housing-location';

@Component({
  selector: 'app-root',
  imports: [HomeComponent, HousingLocationComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
  
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';
  housingLocation: HousingLocation = {
    id: 9999,
    name: 'Test Home',
    city: 'Test city',
    state: 'ST',
    photo: `${this.baseUrl}/example-house.jpg`,
    availableUnits: 99,
    wifi: true,
    laundry: false,
  };
}