import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { CartComponent } from './cart/cart.component';
import { SigninformComponent } from './signinform/signinform.component';
import { SearchComponent } from './search/search.component';
// Import the library zoomimage
import { NgxImageZoomModule } from 'ngx-image-zoom';
//ng matrial
import {MatListModule} from '@angular/material/list';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FlexLayoutModule } from "@angular/flex-layout";



import { LayoutModule } from '@angular/cdk/layout';
import { NavbarwithsidebarComponent } from './navbarwithsidebar/navbarwithsidebar.component';
import { ProductbycategoryComponent } from './productbycategory/productbycategory.component';
import { AdminsComponent } from './admins/admins.component';
import { AddadminComponent } from './addadmin/addadmin.component';


@NgModule({
  declarations: [
    AppComponent,
  
    BodyComponent,
    FooterComponent,
    PageNotFoundComponent,
    ProductdetailsComponent,
    CartComponent,
    SigninformComponent,
    SearchComponent,
 
    NavbarwithsidebarComponent,
    ProductbycategoryComponent,
    AdminsComponent,
    AddadminComponent,
 
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    //ng matrial
    MatAutocompleteModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatBadgeModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    MatSidenavModule,
    FlexLayoutModule,
    //
    NgxImageZoomModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
   
  ]
})
export class AppModule { }
