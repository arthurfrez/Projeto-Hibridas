import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ComicServiceProvider } from '../../providers/comic-service/comic-service';
import { Comic } from '../../models/comic';

/**
 * Generated class for the DescriptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comic-description',
  templateUrl: 'comic-description.html',
})
export class ComicDescriptionPage {
  public id;
  public obj: any;
  public comic: Comic;


  constructor(public navCtrl: NavController, public navParams: NavParams, public comicService: ComicServiceProvider) {
    this.id = navParams.get("id");

    this.comic = new Comic();
    this.comicService.getDescription(this.id)
    .then(data => {
      this.obj = data;
      console.log(this.obj);
      this.comic.title = this.obj.data.results[0].title;
      this.comic.thumb = this.obj.data.results[0].thumbnail.path +"."+ this.obj.data.results[0].thumbnail.extension;
      this.comic.description =  this.obj.data.results[0].description;

      console.log(this.comic);
    });
  }

}
