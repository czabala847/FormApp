import { Component, OnInit } from '@angular/core';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { ValidatorService } from 'src/app/shared/validators/validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private vs: ValidatorService) {
    this.registerForm = this.formBuilder.group(
      {
        name: [
          '',
          [Validators.required, Validators.pattern(this.vs.fullnamePattern)],
        ],
        email: [
          '',
          [Validators.required, Validators.pattern(this.vs.emailPattern)],
        ],
        username: ['', [Validators.required, this.vs.noToBeStrider]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', [Validators.required]],
      },
      {
        validators: [this.vs.matchPassword('password', 'confirmPassword')],
        // validators: [this.vs.matchPassword2],
      }
    );
  }

  ngOnInit(): void {
    this.registerForm.patchValue({
      name: 'Carlos Zabala',
      email: 'test1@test.com',
      username: 'czabala847',
    });
  }

  validField(nameField: string) {
    return (
      this.registerForm.get(nameField)?.invalid &&
      this.registerForm.get(nameField)?.touched
    );
  }

  get emailErrorMsg(): string {
    const errors = this.registerForm.get('email')?.errors;

    if (errors) {
      if (errors['required']) {
        return 'El correo es obligatorio.';
      } else if (errors['pattern']) {
        return 'El correo no tiene un formato válido.';
      }
    }

    return '';
  }

  save() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
    }
  }
}
