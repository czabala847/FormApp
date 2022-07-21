import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.scss'],
})
export class SwitchesComponent implements OnInit {
  person = {
    gender: 'M',
    notification: true,
  };

  termsAndConditions: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
