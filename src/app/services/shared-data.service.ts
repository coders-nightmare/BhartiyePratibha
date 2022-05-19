import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {


  private companyData:any;
  constructor() { 
  }

  setData(data:any){  
    this.companyData=data;
    
  }

  getData(){
    return this.companyData;
  }
}
