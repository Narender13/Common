import { Injectable,Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { user } from './user.model';

import { xhrRequestOptions } from './xhrResponceOption';
import { Jsonp, URLSearchParams,Http} from '@angular/http';

@Injectable()
export class UserService {
public _usersUrl = './data/users/users.json';

constructor(private http: Http){

  

}
 getusersDetail() {
  console.log(this._usersUrl);
     return this.http.get('./data/users/users.json',xhrRequestOptions()).map(res =>{
     return res.json();
    
      
      })

    }
   
 
}

  // getPortfolio(id){
  //   for(var i = 0; i< this.portfolios.length; i++)
  //   {
  //      if(this.portfolios[i].id === id)
  //       return this.portfolios[i];
  //   }
  //   return null;
  // }




