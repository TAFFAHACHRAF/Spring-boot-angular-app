import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Employe } from './employe';
import { EmployeService } from './employe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'product_management_app';
  empls:any;
  public employees: Employe[]=[];

  constructor(private employeService: EmployeService){}

  ngOnInit(){
    this.getEmployes();
  }

  public getEmployes() : void{
    this.employeService.getEmployes().subscribe(res=>{
      console.log(res);
      this.empls=res;
    }); 
  }
}
