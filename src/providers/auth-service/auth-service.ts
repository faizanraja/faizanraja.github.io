import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { RequestOptions, RequestMethod, Http } from '@angular/http';

export class User {
  userName: string;
  password: string;
  userID:string;
 
  constructor(userName: string, password: string, userID:string) {
    this.userName =userName ;
    this.password = password;
    this.userID=userID;
  }
}

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {
  currentUser:User;
  public flag=false;
  dataObject:Observable<Object>
  constructor(public http: HttpClient) {
    console.log('Hello AuthServiceProvider Provider');
  }

  public  Authentication(credentials) {
    
    
    if (credentials.userName == null || credentials.password == null || credentials.userID==null) {
     // return Observable.throw("Please insert credentials");
     alert("Fill all the fields");
     
    }

    else 
    {
      var url = "http://b3d1970b.ngrok.io/api/Reports/GetIsValidAccount";
      let headers = {
        'Content-Type': 'application/json',
        withCredentials: true,
      
      }

      var body = {
        userName: credentials.userName, password: credentials.password, userID: credentials.userID
      };
      debugger
       return this.http.post(url,body,headers);
          
    }
  }


}
