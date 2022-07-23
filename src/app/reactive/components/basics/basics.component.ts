import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.scss'],
})
export class BasicsComponent implements OnInit {
  // basicForm: FormGroup = new FormGroup({
  //   name: new FormControl('RTX 4080ti'),
  // });

  basicForm: FormGroup = this.formBuilder.group({
    name: [, [Validators.required, Validators.minLength(3)]],
    price: [, [Validators.required, Validators.min(0)]],
    stock: [, [Validators.required, Validators.min(0)]],
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.basicForm.patchValue({
      name: 'RTX 4500',
      price: 0,
    });
  }

  validField(nameField: string) {
    return (
      this.basicForm.controls[nameField].errors &&
      this.basicForm.controls[nameField].touched
    );
  }

  save() {
    if (this.basicForm.invalid) {
      this.basicForm.markAllAsTouched();
    } else {
      console.log('Guardando');
      this.basicForm.reset();
    }
  }
}
