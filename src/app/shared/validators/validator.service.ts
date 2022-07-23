import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidatorService {
  fullnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  constructor() {}

  noToBeStrider(control: FormControl): ValidationErrors | null {
    const value: string = control.value?.trim().toLowerCase();

    if (value === 'strider') {
      return { noStrider: true };
    }

    return null; //esta bien
  }

  matchPassword(field1: string, field2: string) {
    return (control: AbstractControl): ValidationErrors | null => {
      const password = control.get(field1)?.value;
      const confPassword = control.get(field2)?.value;

      console.log(password, confPassword);

      if (password === confPassword) {
        control.get(field2)?.setErrors(null);
        return null; //No hay errores
      }

      control.get(field2)?.setErrors({ match_password: true });
      return { match_password: true };
    };
  }

  matchPassword2(control: AbstractControl) {
    const password = control.get('password')?.value;
    const confPassword = control.get('confirmPassword')?.value;

    if (password === confPassword) {
      return null; //No hay errores
    }

    return { match_password: true };
  }
}
