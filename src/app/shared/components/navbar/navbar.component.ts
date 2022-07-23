import { Component, OnInit } from '@angular/core';

interface RoutesInterface {
  name: string;
  route: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  templateRoutes: RoutesInterface[] = [
    {
      name: 'Básicos',
      route: 'template/basics',
    },
    {
      name: 'Dinámicos',
      route: 'template/dynamics',
    },
    {
      name: 'Switches',
      route: 'template/switches',
    },
  ];

  reactiveRoutes: RoutesInterface[] = [
    {
      name: 'Básicos',
      route: 'reactive/basics',
    },
    {
      name: 'Dinámicos',
      route: 'reactive/dynamics',
    },
    {
      name: 'Switches',
      route: 'reactive/switches',
    },
  ];

  authRoutes: RoutesInterface[] = [
    {
      name: 'Registro',
      route: 'auth/register',
    },
    {
      name: 'login',
      route: 'auth/login',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
