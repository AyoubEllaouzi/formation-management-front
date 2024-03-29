import {Component, OnInit} from '@angular/core';
import {FormationService} from "../../services/formation.service";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Formation} from "../../model/formation.model";
import {RouterLink} from "@angular/router";
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-formation',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './new-formation.component.html',
  styleUrl: './new-formation.component.css'
})
export class NewFormationComponent implements OnInit{
  public formationForm!: FormGroup;
  ngOnInit(): void {

  }
  constructor(private router: Router, private formBuilder:FormBuilder, private formationService:FormationService) {
    this.formationForm = this.formBuilder.group({
      titre: this.formBuilder.control('',Validators.required),
      description: this.formBuilder.control('',Validators.required),
      dateDebut: this.formBuilder.control('',Validators.required),
      dateFin: this.formBuilder.control('',Validators.required),
    })
  }
  saveFormation() {
    let formation:Formation=this.formationForm.value;
    console.log(formation.dateFin)
    this.formationService.saveFormation(formation).subscribe({
      next: data=>{
        alert("formation saved successfully");
        this.router.navigate(['']);
      }, error: err => {
        console.log("error");
      }
    })
  }
}
