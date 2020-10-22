export class Medications {
    name: string;
    dosage: string;
    type: MedicationType;
}

enum MedicationType {
  Prescription,
  OTC,
  Supplement
}
