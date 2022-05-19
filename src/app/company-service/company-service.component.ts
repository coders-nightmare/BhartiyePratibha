import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-service',
  templateUrl: './company-service.component.html',
  styleUrls: ['./company-service.component.css']
})
export class CompanyServiceComponent implements OnInit {

  companyServices:any;
  pageError:boolean=false;

  constructor(private userData:UserService,private _router:Router) { 

        this.userData.getAllServices().subscribe({
          next: (result) => {
            this.pageError = false
            this.companyServices = result;
            this.pageError=false;         
            console.log(result);
               
          },
          error: (err) => {
            console.log(err);
            this.pageError=true;
          }
        })
  }

  ngOnInit(): void {
  }

}
