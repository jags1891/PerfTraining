import { Coach } from "./coach";
import { Biometrics } from "./biometrics";
import { Medications } from "./medication";
import { Person } from "./person";
export class Client {
  clientID: number;
  person: Person;
  coach: Coach;
  medications: Array<Medications>;
  biometrics: Biometrics;
}
