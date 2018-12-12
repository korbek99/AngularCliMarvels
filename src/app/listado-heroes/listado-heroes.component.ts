import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Heroe } from '../classes/heroe';
import { HeroesService } from '../heroes.service';

@Component({
  selector: 'accen-listado-heroes',
  templateUrl: './listado-heroes.component.html',
  styleUrls: ['./listado-heroes.component.css']
})
export class ListadoHeroesComponent implements OnInit {

  public title = 'Tutorial de Angular - Héroes de Marvel';
  public searchString : string;
  //public heroes: Array<Heroe> = [];

  prevPage() {
    this.heroesService.getHeroes(this.searchString, this.heroesService.page - 1);
  }

  nextPage() {
    this.heroesService.getHeroes(this.searchString, this.heroesService.page + 1);
  }
  
  constructor(private heroesService: HeroesService) { }

  submitSearch() {
    this.heroesService.getHeroes(this.searchString);
  }

  ngOnInit() {

    this.heroesService.getHeroes();

    /*this.heroes.push(new Heroe(
      '1',
      'Spiderman',
      'El hombre que araña',
      new Date(),
      {
        'path': 'https://i.pinimg.com/originals/c2/93/56/c293563aa553250601d8cb768c044d4b',
        'extension': 'jpg'},
      'http://gateway.marvel.com/v1/public/characters/1011334',
      ''
    ));*/
  }

}
