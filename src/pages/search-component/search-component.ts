import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HeroDetailsPage } from '../hero-details/hero-details';
import { HeroService } from '../../providers/hero-service';
import '../../app/rxjs-operators';

@Component({
  selector:'search-bar',
  templateUrl: 'search-component.html',
})
export class SearchComponent {
  searchQuery: string = '';
  heroes: any;
  errorMessage:any;

  constructor(public navCtrl: NavController,public heroService: HeroService) {
    this.initializeItems();
  }

  initializeItems() {
     this.heroService.getHeroes()
                        .subscribe(
                        heroes => this.heroes = heroes,
                        error =>  this.errorMessage = <any>error);
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.heroes = this.heroes.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  addHero (name: string) {
  if (!name) { return; }
  this.heroService.addHero(name)
                  .subscribe(
                    hero  => this.heroes.push(hero),
                    error =>  this.errorMessage = <any>error);
  }

  pushDetails(id:number) {
    this.navCtrl.push(HeroDetailsPage,{id:id})
  }
}