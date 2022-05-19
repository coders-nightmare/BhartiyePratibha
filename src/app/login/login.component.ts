import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginData:UserService,private router:Router) {
    localStorage.clear();
   }

  ngOnInit(): void {
  }

  res:any={name:'',token:''}
  
  pageError:boolean=false
  errorMessage:String="Something went wrong"

  signIn(data:any){
  
    this.loginData.logInUser(data).subscribe({
      next:(result)=>{
        // console.log(result);
        
        this.pageError=false
        this.res=result;
        localStorage.setItem('name',this.res.name);
        localStorage.setItem('token',this.res.token);
        localStorage.setItem('data',JSON.stringify(result));
        this.router.navigate(['home']) 
      },
      error:(err)=>{
        let msg=err.error
        this.errorMessage=msg.message
        this.pageError=true
        console.log(this.errorMessage);
        
      }
    })  
    
  }

}
