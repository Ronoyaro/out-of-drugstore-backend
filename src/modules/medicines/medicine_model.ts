export interface IMedicine {
  id: number;
  tradeName: string;
  activeIngredient: string;
  dosage: number;
  dosageUnit: "mg" | "ml" | "mcg";
  laboratory: string;
  price: number;
}

export interface ICreateMedicineDTO {
  tradeName: string;
  activeIngredient: string;
  dosage: number;
  dosageUnit: "mg" | "ml" | "mcg";
  laboratory: string;
  price: number;
}
