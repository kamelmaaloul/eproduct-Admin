import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: any = [];
  constructor(private http : HttpClient) { }
  //all products
  getProducts(){
    return this.http.get<any>("https://fakestoreapi.com/products")
    .pipe(map((res:any)=>{
      return res;
    })
    )
  }
  //get it by id
  getProduct(id: number)  {
    return this.http.get<any>("https://fakestoreapi.com/products/"+id)
    .pipe(map((res:any)=>{
      return res;
    })
    )
  }
  //getby category
  getProductsbycategory(category:any)  {
    return this.http.get<any>("https://fakestoreapi.com/products/category/"+category)
    .pipe(map((res:any)=>{
      console.log("category")
      return res;
    })
    )
  }
  //get categories
  getCategories()  {  
    return this.http.get<any>("https://fakestoreapi.com/products/categories")
    .pipe(map((res:any)=>{
     
      return res;
    })
    )

  }
  

}
