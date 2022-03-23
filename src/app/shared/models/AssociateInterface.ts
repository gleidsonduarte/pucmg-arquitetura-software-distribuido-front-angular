import { AnamneseInterface } from "./AnamneseInterface";
import { ExamInterface } from "./ExamInterface";
import { PersonInterface } from "./PersonInterface";

export interface AssociateInterface extends PersonInterface {
  anamnese: AnamneseInterface;
  exam?: ExamInterface;
}
