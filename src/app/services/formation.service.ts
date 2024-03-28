import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Formation} from "../model/formation.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  constructor(private http: HttpClient) {}

  public getAllFormation(){
    return this.http.get(`http://localhost:8083/api/formations`,{observe:'response'});
  }
  public getFormation(id:number){
    return this.http.get(`http://localhost:8083/api/formations/${id}`,{observe:'response'});
  }
  public saveFormation(formation: Formation) {
    return this.http.post<Formation>(`http://localhost:8083/api/formations`, formation);
  }

  public deleteFormation(id: number){
    return this.http.delete(`http://localhost:8083/api/formations/${id}`,{observe:'response'});
  }

  updateFormation(id: number, updatedFormationData: Formation): Observable<any> {
    return this.http.put<any>(`http://localhost:8083/api/formations/${id}`, updatedFormationData);
  }

  findFormation(keyword: string) {
    return this.http.get(`http://localhost:8083/api/formations`,{observe:'response'});
  }
}
