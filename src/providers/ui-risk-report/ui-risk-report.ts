import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UiRiskReportProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UiRiskReportProvider {

  constructor(public http: HttpClient) {
    console.log('Hello UiRiskReportProvider Provider');
  }

  riskTitleReportUI()
  {
    debugger
    var link = "http://b3d1970b.ngrok.io/api/Reports/GetRiskTitleReportUI/";
     var headerr={
      'Content-Type': 'application/json',
      withCredentials:true
     }
     var bodyui={

     }
   return this.http.post(link,bodyui,headerr);
  }

}
