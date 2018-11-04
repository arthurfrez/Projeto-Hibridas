import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MainPage } from '../main/main';
import { FavoritesPage } from '../favorites/favorites';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  entryComponents: [ MainPage ]
})
export class HomePage {

  mainPage = MainPage;
  favPage = FavoritesPage;

  constructor(public navCtrl: NavController) {

  }

}
