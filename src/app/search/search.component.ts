import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
    
  pageError:boolean=false

  searchProduct(data:any){
    this.router.navigate(['search/products',{code:data.code,name:data.name,brand:data.brand}])
    
  }

}
