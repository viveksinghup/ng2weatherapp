import { Component, OnInit } from '@angular/core';
// import { WeatherListComponent } from './weather-list/weather-list.component';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
  // directives: [WeatherListComponent]
})
export class WeatherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
