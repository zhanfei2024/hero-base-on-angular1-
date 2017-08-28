import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HeroService } from '../../providers/hero-service';
import '../../app/rxjs-operators';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  heroes:any;
  errorMessage:any;


  constructor(public navCtrl: NavController,private heroService:HeroService) { }

}
