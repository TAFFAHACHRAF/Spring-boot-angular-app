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

  public oneOpenModal(employe: Employe,mode: string):void{
    const button = document.createElement('button');
    button.type='button';
    button.style.display='none';
    button.setAttribute('data-toggle','modal');
    if(mode === 'add'){
      alert('aded');
      button.setAttribute('data-target','#add');
    }
    if(mode === 'edit'){
      alert('edited');
      button.setAttribute('data-target','#edit');
    }
    if(mode === 'delete'){
      console.log(this.employeService.deleteEmploye(employe.id));
    }
    const container=document.getElementById('main-container')?.appendChild(button);
    button.click();
  }
}
