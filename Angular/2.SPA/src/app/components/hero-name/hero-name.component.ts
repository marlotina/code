import { Component, OnInit } from '@angular/core';
import { HeroesService, Hero } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-name',
  templateUrl: './hero-name.component.html'
})
export class HeroNameComponent implements OnInit {
  heros:Hero[] = [];
  searchValue:string = "";

  constructor(private _heroService:HeroesService,
    private _activatedRoute:ActivatedRoute) { }


  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      this.searchValue = params['value'];
      this.heros = this._heroService.searchHero(params['value']);
    })
  }
}
