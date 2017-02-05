import { Component } from '@angular/core';

import { HeroService } from '../../providers/hero-service';
import '../../app/rxjs-operators';

@Component({
  selector:'search-bar',
  templateUrl: 'search-component.html',
})
export class SearchComponent {
  searchQuery: string = '';
  heroes:any;
  errorMessage:any;

  constructor(private heroService:HeroService) {
      this.getHeroes();
  }


  getHeroes() {
    this.heroService.getHeroes()
                    .subscribe(
                      heroes => this.heroes = heroes,
                      error =>  this.errorMessage = <any>error);
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.getHeroes();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.heroes = this.heroes.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}