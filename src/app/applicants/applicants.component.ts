import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-applicants',
  templateUrl: './applicants.component.html',
  styleUrls: ['./applicants.component.css']
})
export class ApplicantsComponent implements OnInit {

  data:any|null={userType:'',companyName:''}
  contacts:any;

  constructor(private _router:Router,private contactServices:UserService) {
    try{
      this.data=JSON.parse(localStorage.getItem('data')||'{}');
      if(this.data.userType!='company'){
        this._router.navigate(['login']);   
      }
    }
    catch(e){
      this._router.navigate(['login']);   
    }

    this.contactServices.getContact({'companyName':this.data.companyName}).subscribe({
      next:(result)=>{
        // console.log(result);
        this.contacts=result;
        // console.log(this.contacts);
        
      },
      error:(err)=>{
        console.log(err);
      }
    })  
   }
  ngOnInit(): void {
  }

}
