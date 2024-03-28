import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Formation} from "../model/formation.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  constructor(private http: HttpClient) {}
  private URL_API = "http://localhost:8083/api/formations";

  public getAllFormation(){
    return this.http.get(this.URL_API,{observe:'response'});
  }
  public getFormation(id:number){
    return this.http.get(`${this.URL_API}/${id}`,{observe:'response'});
  }
  public saveFormation(formation: Formation) {
    return this.http.post<Formation>(this.URL_API, formation);
  }

  public deleteFormation(id: number){
    return this.http.delete(`${this.URL_API}/${id}`);
  }

  updateFormation(id: number, updatedFormationData: Formation): Observable<any> {
    return this.http.put<any>(`${this.URL_API}/${id}`, updatedFormationData);
  }

  findFormation(keyword: string) {
    return this.http.get(`${this.URL_API}/search/${keyword}`,{observe:'response'});
  }
}
