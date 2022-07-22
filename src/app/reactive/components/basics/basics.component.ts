import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

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
    name: ['RTX 4080ti'],
    price: [0],
    stock: [0],
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}
}
