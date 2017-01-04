import { Component, OnInit } from '@angular/core';

import {UserService} from '../common/user.service'
import { user } from '../common/user.model';
import { Observable } from 'rxjs/Observable';
import {Location} from '@angular/common'
import {Router} from '@angular/router';

@Component({
  selector: 'user',
  template:`
   <style>
   label,span{
       display:block;
      margin-bottom: 0px;
       
   }
   .addressList{
     margin-bottom:20px;
   }
     
   .addressWraper
   {
   padding:10px;
   border:1px solid #F44336;
   background-color:#E91E63;
   overflow:auto;
   cursor:pointer;
   transition:all .2s ease-in-out;
       min-height: 650px;

   }
    .addressWraper:hover{
      box-shadow: -1px 4px 50px 8px #F44336;
       -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -ms-transform: scale(1.1);
    -o-transform: scale(1.1);
    transform: scale(1.1);
    z-index:200;
    }
    .emergency{

    padding: 10px;
    background: #e74c3c;
    border: 1px solid #e74c3c
    }
    .edit{
  position: absolute;
    right: 21px;
    top: 5px;
    height: 24px;
    width: 30px;
    text-align: center;
    padding: 5px;
    }
    .edit + .edit{
       right: 43px;
    }
   
   </style>
  <div class="container">
  <div class="row addressList">
 
   <div class="col-xs-12 " style ="margin-top:20px;">
   
    <div *ngFor="let user of  _user;let i=index" class="col-xs-4 addressList">
     <div class="addressWraper">
       <h4>User Info</h4>
    <label>FirstName</label><span> {{user.name.firstName}}</span>
    <label>LastName</label> <span> {{user.name.lastName}}</span>
     <span  class="glyphicon glyphicon-pencil edit" (click)="editinfo(i)"></span>
      <span  class="glyphicon glyphicon-remove-sign edit" (click)="deletetinfo(i)"></span>
    <label>Gender</label><span>  {{user.gender}}</span>
   <label>Email</label><span> {{user.email}} </span> 
   <label>Phone</label><span> {{user.phone}}  </span>
   <h4>Address</h4>
   <span><b>City</b> :  {{user.address.city}}  </span>
   <span><b>Pin </b>:  {{user.address.pin}}  </span>
   <span><b>StreetName</b> :  {{user.address.streetName}}  </span>
   <h4>Emergency Contacts</h4>
   <div *ngFor="let Emergency of user.emergencyContacts" class="emergency">
  
     <span><b>Name</b> :  {{Emergency.name}}  </span>
     <span><b>Pin </b>:  {{Emergency.phone}}  </span>
      <span><b>Gender</b> :  {{Emergency.gender}}  </span>
    


     </div>
    </div>
     </div>
   </div>
  </div>
  </div>
  <button class="btn btn-primary" (click)="changelocation()">Change URL</button>
  <div   #mymodal class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      ...
    </div>
  </div>
</div>
 
  `,
   
  //templateUrl: './app.component.html',
 // styleUrls: ['./app.component.css']
})

export class UserComponent implements OnInit {
  _user: user[];
  _ediruserdata=[];
   constructor( private _userService: UserService,public location: Location, public router:Router) {

    // renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'yellow');
   
  }

  changelocation(){
  this.router.navigate(['/portfoliodetail/2']);
  }

  ngOnInit() {
  	//this.user = this._portfolioService.getPortfolios();

     this._userService.getusersDetail().subscribe(res => {
     this._user = res;
     console.log(this._user);
      
    });

   
  }
    editinfo(id:any){
     // this._ediruserdata =  Observable.create(observer => {
     // observer.next(this._user.find((user) => user.id == id)).subscribe(res => {
       //return res;
      
    // });
     //});
    //console.log(this._ediruserdata);
    this._ediruserdata=[];
     for(var i = 0; i< this._user.length; i++)
     {
        if(this._user[i].id == id)
        this._ediruserdata[i] = this._user[i];
       
     }
      console.log(this._ediruserdata);
    
     return null;
     }

     deletetinfo(index:number){
    let retVal = confirm("Do you want to delete this user ?");
               if( retVal == true ){
                 this._user.splice(index,1); 
               }
               else{
                   return false;
               }
   

}
    
        


}