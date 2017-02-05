import { Component,OnInit } from '@angular/core';

import { NavController,NavParams } from 'ionic-angular';
import { HeroService } from '../../providers/hero-service';


@Component({
  selector: 'page-hero-details',
  templateUrl: 'hero-details.html',
})
export class HeroDetailsPage implements OnInit {
  selectedHero:any;
  errorMessage:any;
  heroes:any;
  id:number;
  constructor(public navCtrl: NavController, public navParams: NavParams,private heroService:HeroService) {
      this.id = this.navParams.get('id');
   }
  ngOnInit():void {
    this.getSelectedHero(this.id);
  }
  getSelectedHero(id) {
  this.selectedHero =this.heroService.getHeroes()
                  .subscribe(
                    function(heroes) {
                    for(let element of heroes) {
                      if(element.id == id)
                      return element;
                    }
                  },
                    error =>  this.errorMessage = <any>error);
  } 


}
