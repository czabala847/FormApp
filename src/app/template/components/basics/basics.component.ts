import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.scss'],
})
export class BasicsComponent implements OnInit {
  @ViewChild('myForm') myForm!: NgForm;

  constructor() {}

  ngOnInit(): void {}

  save() {
    console.log(this.myForm);
  }

  nameValid(): boolean {
    return (
      this.myForm?.form.controls['product']?.invalid &&
      this.myForm?.form.controls['product']?.touched
    );
  }
}
