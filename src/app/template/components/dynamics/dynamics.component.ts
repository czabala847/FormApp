import { Component, OnInit } from '@angular/core';

interface Person {
  name: string;
  favs: Fav[];
}

interface Fav {
  id: number;
  name: string;
}

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styleUrls: ['./dynamics.component.scss'],
})
export class DynamicsComponent implements OnInit {
  person: Person = {
    name: 'Carlos',
    favs: [
      {
        id: 1,
        name: 'The Witcher 3',
      },
      {
        id: 2,
        name: 'Metro 2033',
      },
    ],
  };

  newGame: string = '';

  constructor() {}

  ngOnInit(): void {}

  save() {
    console.log('Enviando...');
  }

  deleteFav(position: number) {
    this.person.favs.splice(position, 1);
  }

  addFav() {
    const game: Fav = {
      id: this.person.favs.length + 1,
      name: this.newGame,
    };

    this.person.favs.push({ ...game });
  }
}
