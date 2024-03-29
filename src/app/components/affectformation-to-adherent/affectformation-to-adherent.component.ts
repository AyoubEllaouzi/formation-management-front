import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Formation} from "../../model/formation.model";
import {FormationService} from "../../services/formation.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AdherentService} from "../../services/adherent.service";
import {Adherent} from "../../model/adherent.model";

@Component({
  selector: 'app-affectformation-to-adherent',
  standalone: true,
  imports: [
    NgForOf,
    ReactiveFormsModule
  ],
  templateUrl: './affectformation-to-adherent.component.html',
  styleUrl: './affectformation-to-adherent.component.css'
})
export class AffectformationToAdherentComponent implements OnInit{
  public formations: Array<Formation> = [];
  public adherentForm!: FormGroup;
  private id!:number;
  constructor(private router: Router,
              private route: ActivatedRoute,
              private formBuilder:FormBuilder,private adherentService:AdherentService, private formationService:FormationService) {
    this.adherentForm = this.formBuilder.group({
      myFormationId: [null, Validators.required],

    })
  }
  ngOnInit(): void {
    this.getFormations();
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }
  getFormations(){
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

  affectFormation() {
    const adherent: Adherent = this.adherentForm.value;
    this.adherentService.affectFormation(this.id, adherent.myFormationId)
      .subscribe({
        next: (resp) => {
          this.formations = resp.body as Formation[];
        },
        error: err => {
          console.error("Error:", err);
        }
      });
  }
}
