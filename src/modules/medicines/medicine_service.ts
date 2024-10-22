import { ICreateMedicineDTO, IMedicine } from "./medicine_model";

const medicines: IMedicine[] = [];
let currentId: number = 1;

export class MedicineService {
  static list() {
    return medicines;
  }
  static findById(id: number) {
    return medicines.find((medicine) => medicine.id === id);
  }
  static create(input: ICreateMedicineDTO) {
    const medicine: IMedicine = { id: currentId, ...input };
    currentId++;
    medicines.push(medicine);
    return medicine;
  }
  static deleteById(id: number) {
    const index = medicines.findIndex((medicine) => medicine.id === id);
    if (index === -1) return null;
    const medicine = medicines[index];
    medicines.splice(index, 1);
    return medicine;
  }
}
