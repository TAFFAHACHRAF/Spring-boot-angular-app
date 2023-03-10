import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductsService } from '../services/products.service';
import { Product } from './product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})


export class ProductsComponent implements OnInit{
  public products!: Product[];
  searchFormGroup! : FormGroup;

  constructor(private productsService:ProductsService,private fb : FormBuilder){}


  ngOnInit(): void{
    this.searchFormGroup=this.fb.group({
      keyword : this.fb.control(null)
    })
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
        this.products=this.products.filter((pp)=> pp.id!=p.id );
      }
    })
  }

  public handleSetPromotion(product : Product,promotion : boolean) {
    this.productsService.setPromotion(product,promotion).subscribe({
      next: (data)=>{
        var result  = this.products.filter(function(p){return p.id===product.id;} )[0];
        if(result!=undefined){
          result.promotion=promotion;
        }
      }
    })
  }

  public handelSearchProducts(){
      const keyword=this.searchFormGroup.value.keyword;
      if(keyword!=''){
        this.productsService.setProducts(keyword).subscribe({
          next : (data)=>{
            this.products=data;
          }
        })
      }
      else{
        this.handelGetAllProducts();
      }
    }
}
