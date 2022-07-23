import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.scss'],
})
export class SwitchesComponent implements OnInit {
  switchesForm: FormGroup;

  person = {
    gender: 'F',
    notification: false,
  };

  constructor(private formBuilder: FormBuilder) {
    this.switchesForm = this.formBuilder.group({
      gender: ['M', Validators.required],
      notification: [true, Validators.required],
      terms: [false, Validators.requiredTrue],
    });
  }

  ngOnInit(): void {
    this.switchesForm.patchValue({ ...this.person, terms: false });

    this.switchesForm.valueChanges.subscribe(({ terms, ...rest }) => {
      this.person = rest;
    });
  }

  save() {
    if (this.switchesForm.valid) {
      const values = this.switchesForm.value;
      delete values.terms;

      this.person = values;

      console.log('Guardado...');
    }
  }
}
