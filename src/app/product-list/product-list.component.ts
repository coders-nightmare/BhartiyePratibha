import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Product } from '../product';

import { UserService } from '../services/user.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public productList:Product[]=[];
  private filterList:Product[]=[];
  pageError = false
  code: number = 0;



  constructor(private productData: ProductService, private router: Router, private route: ActivatedRoute,private _authService:UserService) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let name = params.get('name');
      let brand = params.get('brand');
      let id = params.get('code');
      if (id && id!='null'){
        
        this.code = Number(id);

      }
      if ((!id||id=='null') && !brand && !name ) {
        this.productData.getAllProduct().subscribe({
          next: (result) => {
            this.pageError = false
            this.productList = result;
            this.filterList=result;
            if(result.length<1){
              this.pageError=true;
            }
            else{
              this.pageError=false;
            }
          },
          error: (err) => {
            console.log(err);
            this.pageError=true;
          }
        })
      }
      else {

        let data = { "code": this.code, "name": name, "brand": brand };
        this.productData.getProducts(data).subscribe({
          next: (result) => {
            this.pageError = false
            this.productList = result;
            this.filterList=result;
            if(result.length<1){
              this.pageError=true;
            }
            else{
              this.pageError=false;
            }
            
          },
          error: (err) => {
            console.log(err);
            this.pageError=true;
          }
        })
      }


    })

  }

  ngOnInit(): void {

  }

  filterProduct(data: any) {
    console.log(data);
    let minPrice = 0
    let maxPrice = 100000
    if(data.minPrice && data.minPrice!='null' ){
      minPrice=Number(data.minPrice);
    }
    if(data.maxPrice && data.maxPrice!='null'){
      maxPrice=Number(data.maxPrice);
    }
    if(data.brand){
      let brand=data.brand.toString();;
      this.productList=this.filterList.filter(product=>{
        console.log(product.price,maxPrice);
        
        if(product.price>=minPrice && product.price<=maxPrice && product.brand===brand.toLowerCase()){
          return 1;
        }
        else{
          return 0;
        }
      })

    }
    else{
      this.productList=this.filterList.filter(product=>product.price>=minPrice && product.price<=maxPrice)
    }

    if(this.productList.length<1){
      this.pageError=true;
    }
    else{
      this.pageError=false;
    }   
  }

  isAuthorized(){
    return this._authService.loggedIn();
  }
}
