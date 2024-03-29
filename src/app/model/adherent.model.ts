import {Formation} from "./formation.model";

export interface Adherent{
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  email: string;
  myFormationId: number;
}
