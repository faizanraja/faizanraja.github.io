import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {NgForm} from '@angular/forms'

/**
 * Generated class for the TestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {
public checkboxValue:any;
public office:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
  }
public checkbox()
{
    debugger
    var array="";
    
  
   // var data=this.office
   // var job='"'+this.office+'"';
    for( var i=0;i<this.office.length;i++)
    {
      if(i==this.office.length-1)
        array+="'"+this.office[i]+"'";
      else
           array+="'"+this.office[i]+"'"+",";

      
    }
    var job='"'+array+'"';

    document.getElementById("office").innerHTML=job;
}

  public checkboxModel = {
    value1 : false,
    value2 : false
 };

 


}
