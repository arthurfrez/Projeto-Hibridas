import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { MainPage } from '../pages/main/main';
import { ComicsPage } from '../pages/comics/comics';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HeroServiceProvider } from '../providers/hero-service/hero-service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComicServiceProvider } from '../providers/comic-service/comic-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    MainPage,
    ComicsPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    MainPage,
    ComicsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpClient,
    HeroServiceProvider,
    ComicServiceProvider
  ]
})
export class AppModule {}
