import { AddressInterface } from "./AddressInterface";
import { ContactInterface } from "./ContactInterface";

export interface PersonInterface {
  id?: string;
  _id?: string;
  firstName: string;
  lastName: string;
  cpf: number;
  birthDate: Date;
  gender: string;
  maritalStatus: string;
  education: string;
  address: AddressInterface;
  contact: ContactInterface;
}
