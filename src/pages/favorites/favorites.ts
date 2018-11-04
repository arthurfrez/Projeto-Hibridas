import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FavoritesPage } from './favorites';

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {

  constructor(public navCtrl: NavController) {

  }

}
