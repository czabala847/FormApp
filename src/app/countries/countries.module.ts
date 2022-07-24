import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

import { CountriesRoutingModule } from './countries-routing.module';
import { SelectPageComponent } from './pages/select-page/select-page.component';

@NgModule({
  declarations: [SelectPageComponent],
  imports: [CommonModule, ReactiveFormsModule, CountriesRoutingModule],
})
export class CountriesModule {}
