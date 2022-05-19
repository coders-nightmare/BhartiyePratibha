import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap,Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import {Serviceability} from '../product'
import {Product} from '../product'
import { HttpErrorResponse } from '@angular/common/http';

interface Services{
  pinCode:number;
  deliveryTime:string;
}
interface Services extends Array<Services>{};

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})




export class ProductDetailsComponent implements OnInit {

  productDeliverable:string='danger';
  productServiceMsg:String="Cannot Deliver";
  showAlert:boolean=false;
  
  code!:string;

  product!:Product;

  private services:Serviceability[]=[];

  productNotFound:boolean=false
  constructor(private route:ActivatedRoute,private resultData:ProductService,private router:Router) { 
    this.showAlert=false;
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id=params.get('id')
      if(id!=null)
      this.code=id;
      
    })

    this.resultData.getProductById(this.code).subscribe({
      next:(result)=>{
        if(result!=null){

          this.productNotFound=false
          this.product=result;
        }
        else{
          this.productNotFound=true;
        }
        
      },
      error:(err)=>{
        if(err instanceof HttpErrorResponse){
          if(err.status==401)
          this.router.navigate(['login']);
        }
        this.productNotFound=true
        
      }
    })
  }

  ngOnInit(): void {
  }

  isServicible(data:Services){
    console.log(data.pinCode);
    

    this.services=this.product.servicability;
    let s=this.services.filter((service)=>service.pinCode==data.pinCode);
    if(s.length!=0){
      this.productDeliverable='success';
      this.productServiceMsg="Delivery Time "+s[0].deliveryTime;
    }
    else{
      this.productDeliverable='danger';
      this.productServiceMsg="Not Deliverable";
      
    }
    this.showAlert=true;
    
  }

}
