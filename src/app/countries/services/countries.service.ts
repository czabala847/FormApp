import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { CountrySmall } from '../interfaces/countries.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private _regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  private urlBase: string = environment.urlCountries;

  constructor(private http: HttpClient) {}

  get regions() {
    return [...this._regions];
  }

  getByRegion(region: string): Observable<CountrySmall[]> {
    const params = new HttpParams();
    params.set('fields', 'name,cca3');

    return this.http.get<CountrySmall[]>(`${this.urlBase}/region/${region}`, { params });
  }
}
