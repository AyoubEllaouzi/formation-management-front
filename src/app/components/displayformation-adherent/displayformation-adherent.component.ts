import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {Adherent} from "../../model/adherent.model";
import {AdherentService} from "../../services/adherent.service";

@Component({
  selector: 'app-displayformation-adherent',
  standalone: true,
    imports: [
        NgForOf,
        ReactiveFormsModule,
        RouterLink
    ],
  templateUrl: './displayformation-adherent.component.html',
  styleUrl: './displayformation-adherent.component.css'
})
export class DisplayformationAdherentComponent implements OnInit{
  public adherents: Array<Adherent> = [];
  private id!:number;
  constructor(private adherentService: AdherentService,
              private router: Router,
              private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.getAdherentsInFormation();
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  getAdherentsInFormation(){
    this.adherentService.getAdherentsInFormation(this.id)
      .subscribe({
        next: (resp)=> {
          this.adherents = resp.body as Adherent[];
        },
        error: err => {
          console.log("error");
        }
      });
  }

}
