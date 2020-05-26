import { Component, OnInit } from '@angular/core';
import { HeroesService, Hero } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heros:Hero[]=[];
  constructor(private _heroesSerivce:HeroesService,
    private _router:Router) {
   }

  //after render page
  ngOnInit() {
    this.heros = this._heroesSerivce.getHeroes();
  }

  seeHero(index:number){
    this._router.navigate(['/hero',index]);
  }

}