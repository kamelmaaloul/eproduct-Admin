import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { CartService } from '../services/cart.service';
import { Router,ActivatedRoute } from '@angular/router';
import { Subscription } from "rxjs";
@Component({
  selector: 'app-productbycategory',
  templateUrl: './productbycategory.component.html',
  styleUrls: ['./productbycategory.component.scss']
})
export class ProductbycategoryComponent implements OnInit {
  items: any[] ;
  quantity:number=10
   itamIndex:any
   id: string
   private dataSubscription: Subscription | null;
  constructor(private api :ProductsService,private cartService : CartService , private route: ActivatedRoute, ) { }

  ngOnInit(): void {
    
    this.dataSubscription = this.route.data.subscribe(
			( data ) => {
        var params = this.route.snapshot.params
        this.api.getProductsbycategory(params.category).subscribe(res=>{
        
          this.items =res
    
          this.items.forEach((a:any) => {
            Object.assign(a,{quantity:1,total:a.price});
          });
        })
      }
      )
    
    
 
  }

 ngOnDestroy(): void {
  this.dataSubscription.unsubscribe();

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