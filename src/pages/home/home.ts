import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MainPage } from '../main/main';
import { ComicsPage } from '../comics/comics';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  entryComponents: [ MainPage ]
})
export class HomePage {

  mainPage = MainPage;
  favPage = ComicsPage;

  constructor(public navCtrl: NavController) {

  }

}
