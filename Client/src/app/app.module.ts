import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { EmployeService } from './employe.service';
import { ProductsComponent } from './products/products.component';
import { CustomersComponent } from './customers/customers.component';

const appRoutes: Routes =[
  {path: 'products',component:ProductsComponent},
  {path: 'customers',component:CustomersComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CustomersComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    RouterModule,
    CommonModule
  ],
  providers: [EmployeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
