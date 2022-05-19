import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../product';
import { Serviceability } from '../product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl='http://localhost:8082';
  constructor(private http:HttpClient) { }

  getAllProduct():Observable<Product[]>{
    const getUrl=this.baseUrl+'/products'
    return this.http.get<Product[]>(getUrl);
  }

  getProductById(id:string):Observable<Product>{
    const getUrl=`${this.baseUrl}/product/${id}`
    return this.http.get<Product>(getUrl);
  }

  isProductServicible(id:string,pincode:string){
    const getUrl=`${this.baseUrl}/product/${id}/${pincode}`;
    return this.http.get(getUrl);
  }

  getProducts(data:any):Observable<Product[]>{
    const postUrl=`${this.baseUrl}/products/search`;
    return this.http.post<Product[]>(postUrl,data);
  }



}
