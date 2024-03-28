import {Component, OnInit} from '@angular/core';
import {FormationService} from "../../services/formation.service";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Formation} from "../../model/formation.model";
import {ActivatedRoute} from "@angular/router";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-update-formation',
  standalone: true,
  providers: [DatePipe],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    DatePipe
  ],
  templateUrl: './update-formation.component.html',
  styleUrl: './update-formation.component.css'
})
export class UpdateFormationComponent implements OnInit{
  public formationForm!: FormGroup;
  private id!:number;
  public formation!: Formation;
  constructor(private route: ActivatedRoute, private formBuilder:FormBuilder, private formationService:FormationService) {
    this.formationForm = this.formBuilder.group({
      titre: this.formBuilder.control(''),
      description: this.formBuilder.control(''),
      dateDebut: this.formBuilder.control(''),
      dateFin: this.formBuilder.control('')
    })
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log('ID from URL:', this.id);

      this.formationService.getFormation(this.id).subscribe(response => {
        if (response && response.body) {
           this.formation = <Formation>response.body;
        } else {
          console.log('Formation is null');
        }
      });
    });
  }
  updateFormation() {
    this.formation=this.formationForm.value;
    console.log(this.formationForm.value)
    this.formationService.updateFormation(this.id, this.formation).subscribe({

      next: data=>{
        alert(JSON.stringify(data));
      }, error: err => {
        console.log("error");
      }
    })
  }
}
