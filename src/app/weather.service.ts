import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Weather } from './weather';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiUrl = environment.API_BASE_URL + '/data/2.5/';
  private apiKey = environment.API_KEY;
  private model = 'weather';

  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<Weather> {
    const options = new HttpParams()
      .set('units', 'metric')
      .set('q', city)
      .set('appId', this.apiKey);

    return this.http.get<Weather>(this.apiUrl + this.model, {
      params: options,
    });
  }
}
