import { Routes } from '@angular/router';
import {FormationsComponent} from "./components/formations/formations.component";
import {NewFormationComponent} from "./components/new-formation/new-formation.component";
import {UpdateFormationComponent} from "./components/update-formation/update-formation.component";

export const routes: Routes = [
  {path:"", component: FormationsComponent},
  {path:"add-formation", component: NewFormationComponent},
  {path: "update-formation/:id", component: UpdateFormationComponent},
];
