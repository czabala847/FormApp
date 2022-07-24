import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { switchMap } from 'rxjs';
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

  constructor(
    private formBuilder: FormBuilder,
    private countriesService: CountriesService
  ) {
    this.countryForm = this.formBuilder.group({
      region: ['', [Validators.required]],
      country: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.regions = this.countriesService.regions;

    this.countryForm
      .get('region')
      ?.valueChanges.pipe(
        switchMap((region) => this.countriesService.getByRegion(region))
      )
      .subscribe((countries) => (this.countries = countries));
  }

  save() {
    console.log(this.countryForm.value);
  }
}
