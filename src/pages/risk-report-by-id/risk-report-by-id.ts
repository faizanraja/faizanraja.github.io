import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RiskReportProvider } from '../../providers/risk-service/risk-service';

/**
 * Generated class for the RiskReportByIdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-risk-report-by-id',
  templateUrl: 'risk-report-by-id.html',
})
export class RiskReportByIdPage {
  public id="";
  constructor(public navCtrl: NavController, public navParams: NavParams,public riskhttp: RiskReportProvider) {
    //this.displayRiskReportByID();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RiskReportByIdPage');
  }


  public onClickButtonID()
  {
    debugger
    this.displayRiskReportByID(this.id);
  }


  public displayRiskReportByID(id)
  {
    this.riskhttp.riskReportByID(id).subscribe(data => {

      // console.dir(data);
      var jsonResponse = JSON.parse(data.toString());
        
      document.getElementById("riskReportByID").innerHTML = "";
      var Table = "<table border='1' width='100%'>";
      //  debugger
      for (var j = 0; j < jsonResponse[0].length; j++) {
        Table += "<tr>";
        Table += "<th>" + jsonResponse[0][j] + "</th>";
        Table += "<td>" + jsonResponse[1][j] + "</td>";
        Table += "</tr>";

      }
      Table += "</table>";
      document.getElementById("riskReportByID").innerHTML = Table;
    });
  }



}
