import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Employe } from "./employe";


@Injectable({ providedIn: 'root' })
export class EmployeService {
    private apiServiceUrl = 'http://localhost:8081';
 
    constructor(private http: HttpClient){}


    /*getEmployes(){
        return this.http.get(`${this.apiServiceUrl}/employees/findall`);
    }*/

    public getEmployes() : Observable<Employe[]>{
        return this.http.get<Employe[]>(`${this.apiServiceUrl}/employees/findall`);
    }
/*
    public addEmploye(employe: Employe) : Observable<Employe>{
        return this.http.post<any>(`${this.apiServiceUrl}/employees/add/`,employe);
    }

    public updateEmploye(employe: Employe) : Observable<Employe>{
        return this.http.put<any>(`${this.apiServiceUrl}/employees/update/`,employe);
    }

    public deleteEmploye(employeId: number) : Observable<void>{
        return this.http.delete<void>(`${this.apiServiceUrl }/employees/delete/${employeId}`);
    }
    */
}