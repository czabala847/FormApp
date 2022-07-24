import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { switchMap, tap } from 'rxjs';
import { CountrySmall } from '../../interfaces/countries.interface';

import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-select-page',
  templateUrl: './select-page.component.html',
  styleUrls: ['./select-page.component.scss'],
})
export class SelectPageComponent implements OnInit {
  countryForm: FormGroup;
  regions: string[] = [];
  countries: CountrySmall[] = [];
  // borders: string[] = [];
  borders: CountrySmall[] = [];

  // UI
  loading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private countriesService: CountriesService
  ) {
    this.countryForm = this.formBuilder.group({
      region: ['', [Validators.required]],
      country: ['', [Validators.required]],
      border: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.regions = this.countriesService.regions;

    //cambio region
    this.countryForm
      .get('region')
      ?.valueChanges.pipe(
        tap((_) => {
          this.countries = [];
          this.countryForm.get('country')?.reset('');
          this.loading = true;
        }),
        switchMap((region) => this.countriesService.getByRegion(region))
      )
      .subscribe((countries) => {
        this.countries = countries;
        this.loading = false;
      });

    // cambio pais
    this.countryForm
      .get('country')
      ?.valueChanges.pipe(
        tap((_) => {
          this.borders = [];
          this.countryForm.get('border')?.reset('');
          this.loading = true;
        }),
        switchMap((countryCode) =>
          this.countriesService.getByCode(countryCode)
        ),
        switchMap((country) =>
          this.countriesService.getByBorders(country[0]?.borders)
        )
      )
      .subscribe((borders) => {
        this.borders = borders;
        this.loading = false;
      });
  }

  save() {
    console.log(this.countryForm.value);
  }
}
