import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

import { startWith, debounceTime, distinctUntilChanged, switchMap, map } from 'rxjs/operators';
import { ProductsService } from '../services/products.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  myControl = new FormControl();
  options:string  [];
  filteredOptions: Observable<any>;
  opt:any
  constructor(private service:ProductsService,private router: Router) { }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(val => {
            return this.filter(val || '')
       }) 
    )
   }
  
  filter(val: string): Observable<any> {

    return this.service.getCategories()
     .pipe(
      debounceTime(400),
       map(response => response.filter((option) => { 
         return option.toLowerCase().indexOf(val.toLowerCase()) === 0
       }))
     )
   }  
  

  
  
   navigateToProcucts(category) {
     
    this.router.navigate(['/product/'+this.opt]);
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  
  
 }

}
