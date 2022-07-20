import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { FormsModule } from '@angular/forms';

import { DynamicsComponent } from './components/dynamics/dynamics.component';
import { BasicsComponent } from './components/basics/basics.component';
import { SwitchesComponent } from './components/switches/switches.component';

@NgModule({
  declarations: [DynamicsComponent, BasicsComponent, SwitchesComponent],
  imports: [CommonModule, TemplateRoutingModule, FormsModule],
})
export class TemplateModule {}
