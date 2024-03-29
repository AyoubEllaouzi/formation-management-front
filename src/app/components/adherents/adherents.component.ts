import { Component } from '@angular/core';
import {DatePipe, NgForOf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {Adherent} from "../../model/adherent.model";
import {AdherentService} from "../../services/adherent.service";
import {HttpResponse} from "@angular/common/http";
import {throwError} from "rxjs";

@Component({
  selector: 'app-adherents',
  standalone: true,
  imports: [
    DatePipe,
    FormsModule,
    NgForOf,
    RouterLink
  ],
  templateUrl: './adherents.component.html',
  styleUrl: './adherents.component.css'
})
export class AdherentsComponent {
  public adherents: Array<Adherent> = [];

  public keyword: string = '';
  constructor(private adherentService: AdherentService) {
  }
  ngOnInit(): void {
    this.getAdherents();
  }

  getAdherents(){
    this.adherentService.getAllAdherent()
      .subscribe({
        next: (resp)=> {
          this.adherents = resp.body as Adherent[];
        },
        error: err => {
          console.log("error");
        }
      });
  }


  deleteAdherent(adherent: Adherent) {
    this.adherentService.deleteAdherent(adherent.id).subscribe({
      next: value => {
        this.adherents = this.adherents.filter(f=>f.id!==adherent.id);
      },
      error: err => {
        console.log("error");
      }
    })
  }


  findAdherent() {
    this.adherentService.findAdherent(this.keyword).subscribe({
      next: (response: HttpResponse<any>) => {
        const responseData = response.body;
        console.log(responseData);
        console.log(this.keyword);
        this.adherents = responseData.filter((adherent: { lastName: string | string[]; }) => adherent.lastName.includes(this.keyword));
        return true;
      },
      error: err => {
        console.error('error:', err);
        return throwError(err);
      }
    });
  }
}
