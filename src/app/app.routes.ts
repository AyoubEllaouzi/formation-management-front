import { Routes } from '@angular/router';
import {FormationsComponent} from "./components/formations/formations.component";
import {NewFormationComponent} from "./components/new-formation/new-formation.component";
import {UpdateFormationComponent} from "./components/update-formation/update-formation.component";
import {AdherentsComponent} from "./components/adherents/adherents.component";
import {NewAdherentComponent} from "./components/new-adherent/new-adherent.component";
import {UpdateAdherentComponent} from "./components/update-adherent/update-adherent.component";
import {
  AffectformationToAdherentComponent
} from "./components/affectformation-to-adherent/affectformation-to-adherent.component";
import {
  DisplayformationAdherentComponent
} from "./components/displayformation-adherent/displayformation-adherent.component";

export const routes: Routes = [
  //Formation Routes
  {path: "", component: FormationsComponent},
  {path: "add-formation", component: NewFormationComponent},
  {path: "update-formation/:id", component: UpdateFormationComponent},
  //Adherent Routes
  {path: "adherents", component: AdherentsComponent},
  {path: "add-adherent", component: NewAdherentComponent},
  {path: "update-adherent/:id", component: UpdateAdherentComponent},
  {path: "add-formation/:id", component: AffectformationToAdherentComponent},
  {path: "formationAdherents/:id", component: DisplayformationAdherentComponent},

];
