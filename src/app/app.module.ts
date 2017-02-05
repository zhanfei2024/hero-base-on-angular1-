import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { HeroDetailsPage } from '../pages/hero-details/hero-details';
import { TabsPage } from '../pages/tabs/tabs';

import { HeroService } from '../providers/hero-service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HeroData } from '../providers/hero-deta';

import { SearchComponent } from '../pages/search-component/search-component';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    HeroDetailsPage,
    TabsPage,
    SearchComponent,
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    InMemoryWebApiModule.forRoot(HeroData),
    FormsModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    HeroDetailsPage,
    TabsPage,
    SearchComponent,
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},HeroService]
})
export class AppModule {}
