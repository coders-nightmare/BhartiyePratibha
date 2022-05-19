import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  data:any|null={userType:''}
  customer:boolean=true

  constructor(private _router:Router,private _authService:UserService) {
    try{

      this.data=JSON.parse(localStorage.getItem('data')||'{}');
      
      if(this.data.userType=='company'){
        this.customer=false
      }
      else{
        this.customer=true
      }
    }
    catch(e){
      console.log(e);
      

    }
      

    
   }

  ngOnInit(): void {
  }

  signOut(){
    localStorage.clear();
    this._router.navigate(['login']);
  }

  isAuthorized(){
    return this._authService.loggedIn();
  }
  getUser(){
    return this._authService.getUserName();
  }

}
