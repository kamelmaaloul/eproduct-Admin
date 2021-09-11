import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})

export class BodyComponent implements OnInit {
  
 items: any[] ;
 quantity:number=10
  itamIndex:any
  constructor(private api :ProductsService, private router: Router, private cartService : CartService) { }

  ngOnInit(): void {
    this.getdata()
  }
  getdata(){
    this.api.getProducts()
    .subscribe(res=>{
      this.items = res;

      this.items.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.price});
      });
    })
       
      }
  
  //adding  to cart methode 
  addtocart(item:any): void {
    
    this.cartService.addtoCart(item);
   
    
  }
  
  //adding  to cart methode 
  more(): void {
    if(this.quantity<this.items.length){
      this.quantity=this.quantity+10
    }

  
   
    
  }

}
