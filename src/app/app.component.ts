import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AlertController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar,
    public splashScreen: SplashScreen, public alertCtrl: AlertController,
    public menuCtrl: MenuController) {

    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage, icon: 'home' },
      { title: 'About', component: AboutPage, icon: 'information-circle' }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: 'Logoff',
      message: 'Do you really wish to logoff?',
      buttons:[
        {
          text: 'Refuse',

          handler: () => {
            this.menuCtrl.close();
          }
        },
        {
          text: 'Accept',
          handler: () => {
            // Desloga
            this.menuCtrl.close();
          }
        }
      ]
    });
    confirm.present();
  }
}
