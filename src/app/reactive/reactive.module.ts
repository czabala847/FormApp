import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ReactiveRoutingModule } from './reactive-routing.module';
import { BasicsComponent } from './components/basics/basics.component';
import { SwitchesComponent } from './components/switches/switches.component';
import { DynamicsComponent } from './components/dynamics/dynamics.component';

@NgModule({
  declarations: [BasicsComponent, SwitchesComponent, DynamicsComponent],
  imports: [CommonModule, ReactiveFormsModule, ReactiveRoutingModule],
})
export class ReactiveModule {}
