import { Component, OnInit,Input } from '@angular/core';
import { Product } from 'src/app/product';
import { UserService } from 'src/app/services/user.service'; 

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  constructor(private _authService:UserService) { }
  @Input() item!:Product;

  ngOnInit(): void {
  }

  isAuthorized(){
    return this._authService.loggedIn();
  }

} 
