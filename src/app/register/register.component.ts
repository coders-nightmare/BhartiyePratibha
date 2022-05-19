import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userType:string='';

  constructor(private regestirationData:UserService,private router:Router) { 
    this.userType=''
  } 

  ngOnInit(): void {
  }

  res:any={'token':''};

  pageError:boolean=false

  signUp(data:any){
    this.regestirationData.registerUser(data).subscribe({
      next:(result)=>{
        this.pageError=false
        console.log(result);
        this.res=result;
        this.router.navigate(['login'])
      },
      error:(err)=>{
        console.log(err);
        this.pageError=true
      }
    })  
    
  }

  changeUser(name:string){
    console.log(name);
    this.userType=name;
    
  }


  

}

