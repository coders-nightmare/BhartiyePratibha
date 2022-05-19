import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-company',
  templateUrl: './about-company.component.html',
  styleUrls: ['./about-company.component.css']
})
export class AboutCompanyComponent implements OnInit {

  data:any|null={userType:''}
  constructor(private _router:Router) { 

      try{
      this.data=JSON.parse(localStorage.getItem('data')||'{}');
      // console.log(this.data);
      
      
      if(this.data.userType!='company'){
        this._router.navigate(['login']);   
      }
    }
    catch(e){
      this._router.navigate(['login']);   
    }
  }

  ngOnInit(): void {
  }

}
