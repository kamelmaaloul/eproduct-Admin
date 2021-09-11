import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-navbarwithsidebar',
  templateUrl: './navbarwithsidebar.component.html',
  styleUrls: ['./navbarwithsidebar.component.scss']
})
export class NavbarwithsidebarComponent implements OnInit {
//true if user logedin and SuperAdmin
isSuperAdmin : boolean = true;
//true if user logedin
isAuth : boolean = true;
//cart
public totalItem: number = 0;
public totalPrice: number ;
public products: any = [];
constructor(private cartService: CartService) { }

ngOnInit(): void {
  this.cartService.getProducts()
  .subscribe(res => {
    this.totalItem = res.length;
    this.totalPrice = this.cartService.getTotalPrice();
  })
}
}
