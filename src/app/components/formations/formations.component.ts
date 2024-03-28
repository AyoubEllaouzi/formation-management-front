import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {FormationService} from "../../services/formation.service";
import {Formation} from "../../model/formation.model";
import {DatePipe, NgForOf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-formations',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf,
    DatePipe,
    FormsModule
  ],
  templateUrl: './formations.component.html',
  styleUrl: './formations.component.css'
})
export class FormationsComponent implements OnInit{
  public formations: Array<Formation> = [];
  public keyword: string = '';
  constructor(private formationService: FormationService) {
  }
  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(){
    this.formationService.getAllFormation()
      .subscribe({
        next: (resp)=> {
          this.formations = resp.body as Formation[];
        },
        error: err => {
          console.log("error");
        }
      });
  }
  deleteFormation(formation: Formation) {
    this.formationService.deleteFormation(formation.id).subscribe({
      next: value => {
        this.formations = this.formations.filter(f=>f.id!==formation.id);
        console.log(this.formations.filter(f=>f.id!==formation.id));
    },
      error: err => {
        console.log("error");
      }
    })
  }
findProduct() {
  this.formationService.findFormation(this.keyword).subscribe({
    next: (response: HttpResponse<any>) => {
      console.log('Response from backend:', response);
      if (response.status === 200) {
        const responseData = response.body;
        this.formations = responseData.filter((formation: { titre: string | string[]; }) => formation.titre.includes(this.keyword));
      } else {
        console.error('Error occurred: Unexpected response status');
      }
    },
    error: err => {
      console.error('Error occurred:', err);
    }
  });
}
}
