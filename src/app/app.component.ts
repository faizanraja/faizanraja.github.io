import { Component } from '@angular/core';
import { Platform,ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import {LoginPage} from '../pages/login/login';
import {AuthServiceProvider} from '../providers/auth-service/auth-service';
import {RiskReportProvider} from '../providers/risk-service/risk-service';
import {RiskReportByIdPage} from '../pages/risk-report-by-id/risk-report-by-id';
import {RiskTitleReportPage} from '../pages/risk-title-report/risk-title-report';
import {TestPage} from '../pages/test/test';
import {SplashPage} from '../pages/splash/splash';
import {RiskTitleReportDisplayPage} from '../pages/risk-title-report-display/risk-title-report-display';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;
  login:LoginPage;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,modalCtrl: ModalController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
       let splash = modalCtrl.create(SplashPage);
             splash.present();
      
      splashScreen.hide();
    });
  }
}

