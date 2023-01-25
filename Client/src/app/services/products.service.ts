import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Product } from '../products/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public products!: Product[];


  constructor() { 
    this.products=[
      {id:1,name:"Computer",price:6800,promotion:true},
      {id:2,name:"Printer",price:1700,promotion:false},
      {id:3,name:"Smart phone",price:3500,promotion:true}
    ];
  }

  public getAll(): Observable<Product[]>{
    let rnd=Math.random();
    if(rnd<0.1) return throwError(()=> new Error("Internet connexion error"));
    else return of(this.products);
  }

  public getById(id : number) : Observable<Product | undefined>{
    let rnd=Math.random();
    if(rnd<0.1) return throwError(()=> new Error("Internet connexion error"));
    else {
      let p=this.products.find(p => p.id === id);
      return of(p);
    }
  }

  public save(p : Product) : Observable<Product>{
    this.products.push(p);
    return of(p);
  }

  public update(p : Product): Observable<Product>{
    return of(p);
  }

  public deleteProduct(p : Product) : Observable<boolean>{
    this.products=this.products.filter((pp)=> pp.id!=p.id );
    return of(true);
  }

  public setPromotion(p : Product,promotion : boolean) : Observable<boolean>{
    var result  = this.products.filter(function(pp){return pp.id===p.id;} )[0];
    if(result!=undefined){
      result.promotion=promotion;
    }
    return of(true);
  }
}
