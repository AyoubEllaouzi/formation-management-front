import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {DatePipe, NgIf} from "@angular/common";
import {Formation} from "../../model/formation.model";
import {ActivatedRoute, Router} from "@angular/router";
import {FormationService} from "../../services/formation.service";
import {HttpResponse} from "@angular/common/http";
import {Adherent} from "../../model/adherent.model";
import {AdherentService} from "../../services/adherent.service";

@Component({
  selector: 'app-update-adherent',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './update-adherent.component.html',
  styleUrl: './update-adherent.component.css'
})
export class UpdateAdherentComponent implements OnInit{
  public adherentForm: FormGroup = new FormGroup({});
  private id!:number;
  public adherent!: Adherent;

  constructor(private route: ActivatedRoute,
              private formBuilder:FormBuilder,
              private adherentService:AdherentService,
              private router: Router) {

    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }
  ngOnInit(): void {
    this.adherentService.getAdherent(this.id).subscribe({
      next: (response: HttpResponse<any>) => {
        if (response && response.body) {
          this.adherent = response.body;
          console.log("adherent data:", this.adherent);
          this.initForm();
        } else {
          console.log("adherent not found or response body is null.");
        }
      },
      error: err => {
        console.log("Error occurred while fetching adherent:", err);
      }
    });
  }

  initForm(): void {
    this.adherentForm = this.formBuilder.group({
      firstName: this.formBuilder.control(this.adherent.firstName,Validators.required),
      lastName: this.formBuilder.control(this.adherent.lastName,Validators.required),
      phone: this.formBuilder.control(this.adherent.phone,Validators.required),
      email: this.formBuilder.control(this.adherent.email,Validators.required),
      address: this.formBuilder.control(this.adherent.address,Validators.required),
    });
  }

  updateAdherent() {
    this.adherent=this.adherentForm.value;
    this.adherentService.updateAdherent(this.id, this.adherent).subscribe({

      next: data=>{
        alert("Adherent Updated Successfully");
        this.router.navigate(['/adherents']);
      }, error: err => {
        console.log("error");
      }
    })
  }
}
