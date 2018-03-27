import { Component } from '@angular/core';
//import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NavController, AlertController, LoadingController, Loading, IonicPage } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { HomePage } from '../home/home';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
   loading:Loading;
  boolResponse: boolean;
  public jsonResponse;
  registerCredentials = { userName: '', password: '', userID: '' };
  // constructor(public navCtrl: NavController, public navParams: NavParams) {
  constructor(private toastCtrl: ToastController,private nav: NavController, private auth: AuthServiceProvider, private alertCtrl: AlertController, private loadingCtrl: LoadingController) {
  }


  public createAccount() {
    this.nav.push('RegisterPage');
  }

  public login() {

   // this.showLoading()
    
    this.auth.Authentication(this.registerCredentials).subscribe(allowed => {
       this.jsonResponse = JSON.parse(allowed.toString());
       
      if (this.jsonResponse.isValidUser == true) {
        this.nav.setRoot(HomePage);
      } else {
        
      //  this.loading.dismiss();
        this.presentToast();
        
      }
    },
      error => {
        this.showError(error);
      });
  }
    
  public presentToast() {
    let toast = this.toastCtrl.create({
      message: this.jsonResponse.accountStatus,
      cssClass:'alertDanger',
      duration: 3000,
      position: 'top',
      
      
    });

    toast.present();
  }


  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true,
      
    });
    this.loading.present();
  }

  showError(text) {
    debugger
    //this.loading.dismiss();

    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    // alert.present(prompt);
  }
}
