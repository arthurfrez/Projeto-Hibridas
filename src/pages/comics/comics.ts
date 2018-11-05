import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ComicServiceProvider } from '../../providers/comic-service/comic-service';

@Component({
  selector: 'comics-main',
  templateUrl: 'comics.html'
})
export class ComicsPage {

  starColor: string = 'light';

  constructor(public navCtrl: NavController,
    public comicProvider: ComicServiceProvider) {

      this.getAllComics();
  }

  getAllComics() {
    this.comicProvider.load()
      .then(data => {
        this.obj = data;
        this.comics = this.obj.data.results;
      });
  }

  getDescription(id:number){
    console.log(id);
    this.navCtrl.push("DescriptionPage", {
      id: id
    })
  }

  doInfinite(infiniteScroll): Promise<any> {
    console.log('Begin async operation');

    return new Promise((resolve) => {
      setTimeout(() => {
        this.comicProvider.load()
          .then(data => {
            this.obj = data;
            this.comics = this.obj.data.results;
          });

        console.log('Async operation has ended');
        resolve();
      }, 500);
    })
  }

}
