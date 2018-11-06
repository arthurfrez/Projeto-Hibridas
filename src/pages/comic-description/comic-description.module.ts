import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComicDescriptionPage } from './comic-description';

@NgModule({
  declarations: [
    ComicDescriptionPage,
  ],
  imports: [
    IonicPageModule.forChild(ComicDescriptionPage),
  ],
})
export class ComicDescriptionPageModule {}
