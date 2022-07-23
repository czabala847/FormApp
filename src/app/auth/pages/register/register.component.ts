import { Component, OnInit } from '@angular/core';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  fullnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      name: [
        '',
        [Validators.required, Validators.pattern(this.fullnamePattern)],
      ],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      username: ['', [Validators.required, this.noToBeStrider]],
    });
  }

  ngOnInit(): void {
    this.registerForm.patchValue({
      name: 'Carlos Zabala',
      email: 'test1@test.com',
    });
  }

  validField(nameField: string) {
    return (
      this.registerForm.get(nameField)?.invalid &&
      this.registerForm.get(nameField)?.touched
    );
  }

  save() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
    }
  }

  noToBeStrider(control: FormControl) {
    const value: string = control.value?.trim().toLowerCase();

    if (value === 'strider') {
      return { noStrider: true };
    }

    return null; //esta bien
  }
}
