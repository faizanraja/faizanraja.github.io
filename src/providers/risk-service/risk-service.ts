import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {RiskTitleReportPage} from '../../pages/risk-title-report/risk-title-report';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the RiskReportProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RiskReportProvider {

  constructor(public http: HttpClient ) {
    console.log('Hello RiskReportProvider Provider');
  }
          //Call Web Api
  public riskReportByID(id) {
    
    console.dir(id);
    let header = {
      'Content-Type': 'application/json',
      withCredentials: true
    }

    var body ={
      id:id
    }
    var url = "http://b3d1970b.ngrok.io/api/Reports/GetRiskReportByID/";
    return this.http.post(url, body, header);



  }
          //Call Web Api
  public riskTitleReport(riskTitleReportData) {
  
    var risktitle:RiskTitleReportPage;
//var str=this.navParams.get('job');
    //var str="";
    let headers = {
      'Content-Type': 'application/json',
      withCredentials: true
     }

    var bodyTitle =
      {
        
        Region:riskTitleReportData[0],
        Office:riskTitleReportData[1],
        Title:riskTitleReportData[2],
        Total: "50"
      };
    var link = "http://b3d1970b.ngrok.io/api/Reports/GetRiskTitleReport/";
    return this.http.post(link, bodyTitle, headers);

  }

}
