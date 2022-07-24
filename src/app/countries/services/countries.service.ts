import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { Country, CountrySmall } from '../interfaces/countries.interface';
import { combineLatest, map, Observable, of } from 'rxjs';

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

    return this.http.get<CountrySmall[]>(`${this.urlBase}/region/${region}`, {
      params,
    });
  }

  getByCode(code: string): Observable<Country[]> {
    if (code) {
      return this.http.get<Country[]>(`${this.urlBase}/alpha/${code}`);
    }

    return of([]);
  }

  getByCodeSmall(code: string): Observable<CountrySmall> {
    return this.http
      .get<CountrySmall[]>(`${this.urlBase}/alpha/${code}`)
      .pipe(map((countries) => countries[0]));
  }

  getByBorders(borders: string[]) {
    if (!borders) {
      return of([]);
    }

    const request: Observable<CountrySmall>[] = [];

    borders.forEach((code) => {
      const req = this.getByCodeSmall(code);
      if (req) {
        request.push(req);
      }
    });

    return combineLatest(request);
  }
}
