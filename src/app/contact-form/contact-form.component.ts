import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,ParamMap,Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  emailData:String='';
  companyName:String|null="";
  pageError:boolean=false;

  data:any={email:String};
  constructor(private _router:Router,private _route:ActivatedRoute,private contactService:UserService) {
    this.data=JSON.parse(localStorage.getItem('data')||'{}');
    console.log(this.data);
    this.emailData=this.data.email;
    this._route.paramMap.subscribe((params:ParamMap)=>{
      let id =params.get('id')
      this.companyName=id;
    })
    
   }

  ngOnInit(): void {
  }

  addContact(details:any){

    this.contactService.addContact(details).subscribe({
      next:(result)=>{
        // console.log(result);
        
        this.pageError=false
        this._router.navigate(['services']);
        
      },
      error:(err)=>{
        console.log(err);
        this.pageError=true;
        
        
      }
    })  
    
    
  }

}
