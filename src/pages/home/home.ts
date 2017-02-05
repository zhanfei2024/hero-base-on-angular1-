import { Component,OnInit } from '@angular/core';

import { NavController } from 'ionic-angular';
import { HeroDetailsPage } from '../hero-details/hero-details';

import { HeroService } from '../../providers/hero-service';
import '../../app/rxjs-operators';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage implements OnInit {
  heroes:any;
  errorMessage:any;
  pushDetails(id:number) {
    this.navCtrl.push(HeroDetailsPage,{id:id})
  }

  constructor(public navCtrl: NavController,private heroService:HeroService) {

  }

  ngOnInit():void {
    this.getHeroes();
  }
  getHeroes() {
    this.heroService.getHeroes()
                    .subscribe(
                      heroes => this.heroes = heroes,
                      error =>  this.errorMessage = <any>error);
  }

  addHero (name: string) {
    if (!name) { return; }
    this.heroService.addHero(name)
                    .subscribe(
                      hero  => this.heroes.push(hero),
                      error =>  this.errorMessage = <any>error);
  }

}
