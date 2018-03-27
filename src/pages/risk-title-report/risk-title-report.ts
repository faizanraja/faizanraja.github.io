import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RiskReportProvider } from '../../providers/risk-service/risk-service';
import { overrideFunction } from '@ionic-native/core';
import {NgForm} from '@angular/forms/forms';
import {RiskTitleReportDisplayPage} from '../../pages/risk-title-report-display/risk-title-report-display';
import { Directive,ElementRef } from '@angular/core';

/**
 * Generated class for the RiskTitleReportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-risk-title-report',
  templateUrl: 'risk-title-report.html',
})

@Directive({
  //selector: 'ion-option',
  selector: '[appHighlight]',
})

export class RiskTitleReportPage {
   regionModel=new Array(); 
   officeModel=new Array();
   titleModel=new Array();

  public _selected: any = false;
    public title;
    public region;
    public office;
    public display;
    public selectOffice=false;
    public selectedAll;
    public officeItem:string;
    public regionItem:string;
    public titleItem:string;
    public riskTitleReportArray=new Array();
  constructor(public navCtrl: NavController, public navpram:NavParams) {
   this.riskTitleModel(this.navpram.data);
  
  
  }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad RiskTitleReportPage');
  }


public officedata(officedat:NgForm)
{
  
  console.log("OFFICE",officedat.value);
}


  allSelected()
  {
      debugger
      var ids=document.getElementById("ion-option")
      
    }

    public riskTitleModel(obj)
    {
      debugger
      var modelObject={
        RegionDDListData:"",
        OfficeDDListData:"",
        RiskTitleDDListData:""
      }
      modelObject=obj;
      debugger
      
      for(var i=0;i<modelObject.RegionDDListData.length;i++)
      {
       
       this.regionModel[i]=modelObject.RegionDDListData[i];
      }

      for(var i=0;i<modelObject.OfficeDDListData.length;i++)
      {
       
       this.officeModel[i]=modelObject.OfficeDDListData[i];
      }

      for(var i=0;i<modelObject.RiskTitleDDListData.length;i++)
      {
       
       this.titleModel[i]=modelObject.RiskTitleDDListData[i];
      }
    }


public regionItems(regionModel)
{

 // debugger
  var regionArray="";

 // var data=this.office
 // var job='"'+this.office+'"';
  for( var i=1;i<this.regionModel.length;i++)
  {
    if(i==this.regionModel.length-1)
    regionArray+="'"+this.regionModel[i]+"'";
    else
    regionArray+="'"+this.regionModel[i]+"'"+",";

    
  }
  this.regionItem=regionArray;
  this.riskTitleReportArray.push(this.regionItem); 
 
  

}



public officeItems(officeModel)
  {
      
      var officeArray="";
    
     // var data=this.office
     // var job='"'+this.office+'"';
      for( var i=1;i<this.officeModel.length;i++)
      {
        if(i==this.officeModel.length-1)
        officeArray+="'"+this.officeModel[i]+"'";
        else
        officeArray+="'"+this.officeModel[i]+"'"+",";
  
        
      }
      this.officeItem=officeArray;
      this.riskTitleReportArray.push(this.officeItem);  
     
    
     
    
  }


 public titleItems(titleModel)
  {

   // debugger
    var titleArray="";
  
   // var data=this.office
   // var job='"'+this.office+'"';
    for( var i=1;i<this.titleModel.length;i++)
    {
      if(i==this.titleModel.length-1)
      titleArray+="'"+this.titleModel[i]+"'";
      else
      titleArray+="'"+this.titleModel[i]+"'"+",";

      
    }
    this.titleItem=titleArray;
    this.riskTitleReportArray.push(this.titleItem);  
   

  }

 public onClickButton()
  {
    debugger
    this.navCtrl.push(RiskTitleReportDisplayPage,this.riskTitleReportArray);
  }
  



}