import { Injectable } from '@angular/core';
import {Formation} from "../model/formation.model";
import {Adherent} from "../model/adherent.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AdherentService {
  constructor(private http: HttpClient) {}
  private URL_API = "http://localhost:8083/api/adherents";

  saveAdherent(adherent: Adherent) {
    return this.http.post<Adherent>(this.URL_API, adherent);
  }

  getAllAdherent() {
    return this.http.get(this.URL_API,{observe:'response'});
  }

  updateAdherent(id: number, updatedAdherentData: Adherent): Observable<any> {
    return this.http.put<any>(`${this.URL_API}/${id}`, updatedAdherentData);
  }

  public getAdherent(id:number){
    return this.http.get(`${this.URL_API}/${id}`,{observe:'response'});
  }

  public deleteAdherent(id: number){
    return this.http.delete(`${this.URL_API}/${id}`);
  }

  public findAdherent(keyword: string) {
    return this.http.get(`${this.URL_API}/search/${keyword}`,{observe:'response'});
  }

  affectFormation(idAdherent: number, idFormation: number): Observable<any> {
    return this.http.put(`${this.URL_API}/affect/${idAdherent}/${idFormation}`, null);
  }

  getAdherentsInFormation(id: number) {
    return this.http.get(`${this.URL_API}/formation/${id}`,{observe:'response'});
  }
}
