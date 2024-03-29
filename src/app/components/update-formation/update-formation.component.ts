import {Component, OnInit} from '@angular/core';
import {FormationService} from "../../services/formation.service";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Formation} from "../../model/formation.model";
import {ActivatedRoute, Router} from "@angular/router";
import {DatePipe, NgIf} from "@angular/common";
import { HttpResponse } from '@angular/common/http';


@Component({
  selector: 'app-update-formation',
  standalone: true,
  providers: [DatePipe],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        DatePipe,
        NgIf
    ],
  templateUrl: './update-formation.component.html',
  styleUrl: './update-formation.component.css'
})
export class UpdateFormationComponent implements OnInit{
  public formationForm: FormGroup = new FormGroup({});
  private id!:number;
  public formation!: Formation;
  constructor(private route: ActivatedRoute,
              private formBuilder:FormBuilder,
              private datePipe: DatePipe,
              private formationService:FormationService,
              private router: Router) {

    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }
  ngOnInit(): void {
      this.formationService.getFormation(this.id).subscribe({
          next: (response: HttpResponse<any>) => {
              if (response && response.body) {
                  this.formation = response.body;
                  console.log("Formation data:", this.formation);
                  this.initForm();
              } else {
                  console.log("Formation not found or response body is null.");
              }
          },
          error: err => {
              console.log("Error occurred while fetching formation:", err);
          }
      });
  }

    initForm(): void {
        this.formationForm = this.formBuilder.group({
          titre: this.formBuilder.control(this.formation.titre,Validators.required),
          description: this.formBuilder.control(this.formation.description,Validators.required),
          dateDebut: this.formBuilder.control(this.formatDate(this.formation.dateDebut),Validators.required),
          dateFin: this.formBuilder.control(this.formatDate(this.formation.dateFin),Validators.required),
        });
    }

  updateFormation() {
    this.formation=this.formationForm.value;
    this.formationService.updateFormation(this.id, this.formation).subscribe({

      next: data=>{
        alert("Formation Updated Successfully");
        this.router.navigate(['']);
      }, error: err => {
        console.log("error");
      }
    })
  }
  formatDate(date: Date | string | null): string {
    if (!date) {
      return '';
    }

    if (typeof date === 'string') {
      date = new Date(date);
    }
    return this.datePipe.transform(date, 'yyyy-MM-ddTHH:mm') || '';
  }
}
