import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { DynamicsComponent } from './components/dynamics/dynamics.component';
import { BasicsComponent } from './components/basics/basics.component';
import { SwitchesComponent } from './components/switches/switches.component';


@NgModule({
  declarations: [
    DynamicsComponent,
    BasicsComponent,
    SwitchesComponent
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule
  ]
})
export class TemplateModule { }
