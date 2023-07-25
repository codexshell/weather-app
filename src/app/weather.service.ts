import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Weather, Forecast } from './weather';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiUrl = environment.API_BASE_URL + '/data/2.5/';
  private apiKey = environment.API_KEY;

  constructor(private http: HttpClient) {}

  get<T>(city: string, model: string): Observable<T> {
    const options = new HttpParams()
      .set('units', 'metric')
      .set('q', city)
      .set('appId', this.apiKey);

    return this.http.get<T>(this.apiUrl + model, {
      params: options,
    });
  }

  getWeather(city: string): Observable<Weather> {
    return this.get<Weather>(city, 'weather');
  }

  getForeCast(city: string): Observable<Forecast[]> {
    return this.get<{ list: Forecast[] }>(city, 'forecast').pipe(
      map((data: { list: Forecast[] }) =>
        data.list.filter((forecast) =>
          forecast.dt_txt.toString().includes('12:00:00')
        )
      )
    );
  }
}
