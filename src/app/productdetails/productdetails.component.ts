import { Component,OnInit,ElementRef, ViewChild } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductsService } from '../services/products.service';
declare var imageZoom: any;

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss']
})
export class ProductdetailsComponent implements OnInit {
  public product : any ;
   id  :number;
   similerproducts:any

  constructor(private dataservice:ProductsService, private route: ActivatedRoute,   private router: Router,private cartService : CartService)  {
    
   }
   
  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    this.similar()
  }
    

   

category:any
  ngOnInit(): void {
    this.route.params.subscribe(routeParams => {
     
      this.dataservice.getProduct(routeParams.id).subscribe(res=>{

        this.product =res
    this.category=this.product.category
        Object.assign(this.product,{quantity:1,total:this.product.price});
        
       });
     


    });
    this.id=this.route.snapshot.params.id
  
   
  
   
  }

  similar(): void {
   
   
    this.dataservice.getProductsbycategory(this.product?.category).subscribe(res=>{
    
      this.similerproducts =res
      this.similerproducts.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.price});
      });
  
    
     })
  
   
    
  }
 ngOnDestroy(): void {
}
  
  addtocart(prod:any): void {
   
    this.cartService.addtoCart(prod);
   
    
  }

}
