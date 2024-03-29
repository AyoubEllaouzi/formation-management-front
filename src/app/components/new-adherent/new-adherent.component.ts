import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Formation} from "../../model/formation.model";
import {Router} from "@angular/router";
import {FormationService} from "../../services/formation.service";
import {AdherentService} from "../../services/adherent.service";
import {Adherent} from "../../model/adherent.model";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-new-adherent',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgForOf
  ],
  templateUrl: './new-adherent.component.html',
  styleUrl: './new-adherent.component.css'
})
export class NewAdherentComponent implements OnInit{
  public adherentForm!: FormGroup;

  ngOnInit(): void {
  }
  constructor(private router: Router, private formBuilder:FormBuilder, private adherentService:AdherentService) {
    this.adherentForm = this.formBuilder.group({
      firstName: this.formBuilder.control('',Validators.required),
      lastName: this.formBuilder.control('',Validators.required),
      email: this.formBuilder.control('',Validators.required),
      phone: this.formBuilder.control('',Validators.required),
      address: this.formBuilder.control('',Validators.required),
      myFormationId: [null, Validators.required],
    })
  }

  saveAdherent() {
    let adherent:Adherent=this.adherentForm.value;

    console.log(adherent);
    this.adherentService.saveAdherent(adherent).subscribe({
      next: data=>{
        alert("adherent saved successfully");
        this.router.navigate(['adherents']);
      }, error: err => {
        console.log("error");
      }
    })
  }



}
