import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HeroServiceProvider } from '../../providers/hero-service/hero-service';

@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})
export class MainPage {

  starColor: string = 'light';

  constructor(public navCtrl: NavController,
    public heroProvider: HeroServiceProvider) {

      this.getAllHeroes();
  }

  getAllHeroes() {
    this.heroProvider.load()
      .then(data => {
        this.obj = data;
        this.heroes = this.obj.data.results;
      });
  }

  getDescription(id:number){
    console.log(id);
    this.navCtrl.push("DescriptionPage", {
      id: id
    })
  }
}
