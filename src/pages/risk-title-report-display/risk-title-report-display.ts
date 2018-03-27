import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RiskReportProvider} from '../../providers/risk-service/risk-service';
/**
 * Generated class for the RiskTitleReportDisplayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-risk-title-report-display',
  templateUrl: 'risk-title-report-display.html',
})
export class RiskTitleReportDisplayPage {
  public riskTitleReportData=new Array();

  constructor(public navCtrl: NavController, public navParams: NavParams,public riskhttp:RiskReportProvider) {
    this.displayRiskTitleReport();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RiskTitleReportDisplayPage');
  }


  public displayRiskTitleReport()
  {
    
    for(var i=0;i<this.navParams.data.length;i++)
    {
           this.riskTitleReportData.push(this.navParams.data[i]);
          
    }
    
    this.riskhttp.riskTitleReport(this.riskTitleReportData).subscribe(data => {
      
      var jsonRiskTitle = JSON.parse(data.toString());
  
      //console.dir(jsonRiskTitle);
  
      document.getElementById("riskTitleid").innerHTML = "";
      var Table = "<table border='1' width='100%'>";
      Table += "<tr> <th>Risk Name</th> <th>Total Utm</th> <th>No of Risks</th> <th>Average UTM</th></tr>";
      // debugger
      for (var j = 0; j < jsonRiskTitle.length - 1; j++) {
        Table += "<tr>";
        Table += "<td>" + jsonRiskTitle[j].Risk_Name + "</td>";
        Table += "<td>" + jsonRiskTitle[j].Total_UTM + "</td>";
        Table += "<td>" + jsonRiskTitle[j].Occurrences + "</td>";
        Table += "<td>" + jsonRiskTitle[j].Average + "</td>";
        Table += "</tr>";
  
      }
      Table += "</table>";
      document.getElementById("riskTitleid").innerHTML = Table;
    });
  
  }


}
