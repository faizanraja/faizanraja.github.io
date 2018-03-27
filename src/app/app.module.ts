import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { FormsModule } from '@angular/forms';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {LoginPage} from '../pages/login/login';
import {TestPage} from '../pages/test/test';
import {RiskReportByIdPage} from '../pages/risk-report-by-id/risk-report-by-id';
import {RiskTitleReportPage} from '../pages/risk-title-report/risk-title-report';
import {SplashPage} from '../pages/splash/splash';

import { AuthServiceProvider } from '../providers/auth-service/auth-service';

import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { RiskReportProvider } from '../providers/risk-service/risk-service';
import { RiskTitleReportDisplayPage } from '../pages/risk-title-report-display/risk-title-report-display';
import { UiRiskReportProvider } from '../providers/ui-risk-report/ui-risk-report';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RiskReportByIdPage,
    RiskTitleReportPage,
    TestPage,
    RiskTitleReportDisplayPage,
    SplashPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,HttpModule,
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RiskReportByIdPage,
    RiskTitleReportPage,
    TestPage,
    RiskTitleReportDisplayPage,
    SplashPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    RiskReportProvider,
    UiRiskReportProvider
  ]
})
export class AppModule {}
