import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styleUrls: ['./dynamics.component.scss'],
})
export class DynamicsComponent {
  dynamicForm: FormGroup;
  newFavField: FormControl;

  constructor(private formBuilder: FormBuilder) {
    this.dynamicForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      favs: this.formBuilder.array(
        [
          ['The Witcher 3', Validators.required],
          ['Fallout new vegas', Validators.required],
        ],
        Validators.required
      ),
    });

    this.newFavField = this.formBuilder.control('', Validators.required);
  }

  get favsArr() {
    return this.dynamicForm.get('favs') as FormArray;
  }

  validField(nameField: string) {
    return (
      this.dynamicForm.controls[nameField].errors &&
      this.dynamicForm.controls[nameField].touched
    );
  }

  save() {
    if (this.dynamicForm.invalid) {
      this.dynamicForm.markAllAsTouched();
    } else {
      console.log(this.dynamicForm.value);
    }
  }

  addFav() {
    if (this.newFavField.valid) {
      this.favsArr.push(
        this.formBuilder.control(this.newFavField.value, Validators.required)
      );

      this.newFavField.reset();
    }
  }

  deleteFav(index: number) {
    this.favsArr.removeAt(index);
  }
}
