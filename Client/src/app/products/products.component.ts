import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from './product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})


export class ProductsComponent implements OnInit{
  public products!: Product[];

  constructor(private productsService:ProductsService){}

  ngOnInit(): void{
    this.handelGetAllProducts();
  }

  handelGetAllProducts(){
    this.productsService.getAll().subscribe({
      next : (data)=>{
        this.products=data;
      },
      error : (err)=>{
        console.log(err);
      }
    });
  }

  public handelDeleteProduct(p : Product){
    const conf=confirm("Are you sure?");
    if(conf==false) return;
    this.productsService.deleteProduct(p).subscribe({
      next : (data)=>{
        let index=this.products.indexOf(p);
        this.products.splice(index,0);
      }
    })
  }

  public handleSetPromotion(p : Product,promotion : boolean){
    for(let i=0;i<this.products.length;i++){
      if(this.products[i].id==p.id){
        this.products[i].promotion=promotion;
      }
    }
  }
}
