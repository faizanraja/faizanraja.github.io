import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RiskReportProvider } from '../../providers/risk-service/risk-service';
import {RiskReportByIdPage} from '../risk-report-by-id/risk-report-by-id';
import { RiskTitleReportPage } from '../risk-title-report/risk-title-report';
import {LoginPage} from '../login/login';
import { ToastController } from 'ionic-angular';
import { UiRiskReportProvider } from '../../providers/ui-risk-report/ui-risk-report';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public riskhttp: RiskReportProvider,private toastCtrl: ToastController,public UIhttp:UiRiskReportProvider) {
    //login.presentToast();
  this.presentToasts();  
    
  }
  
          //OnClick Listner on RiskReportByID
  public onClickRiskReportByID() {
    
    this.navCtrl.push(RiskReportByIdPage);
   
  }

        //OnClick Listner on RiskReportTitle
  onClickRiskReportTitle() {
    debugger
    //var riskTitleUI=new RiskTitleReportPage(this.navCtrl)
     //
    this.UIhttp.riskTitleReportUI().subscribe(data=>{
        debugger
       let jsonUI= JSON.parse(data.toString());
       this.navCtrl.push(RiskTitleReportPage,jsonUI);
        //riskTitleUI.riskTitleModel(jsonUI);
            console.dir(jsonUI);
    });
  }



  


  presentToasts() {
    let toast = this.toastCtrl.create({
      message: "Successfully Login",
      duration: 3000,
      position: 'top',
      cssClass:"ToastStyling"
    });


}
}
