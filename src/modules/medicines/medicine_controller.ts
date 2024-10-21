import { Request, Response } from "express";
import { IMedicine } from "./medicine_model";

const medicines: IMedicine[] = [];
let currentId: number = 1;

export function listMedicines(req: Request, res: Response) {
  res.status(200).json(medicines);
}

export function findMedicineById(req: Request, res: Response) {
  const id = Number(req.params.id);
  const medicine = medicines.find((medicine) => medicine.id === id);

  if (!medicine) {
    res.status(404).json({ message: "Medicine not found" });
    return;
  }
  res.status(200).json(medicine);
}

export function createMedicine(req: Request, res: Response) {
  const medicine: IMedicine = {
    id: currentId,
    ...req.body,
  };
  currentId++;

  medicines.push(medicine);

  res.status(201).json(medicine);
}

export function deleteMedicine(req: Request, res: Response) {
  const id = Number(req.params.id);
  const index = medicines.findIndex((medicine) => medicine.id === id);
  if (index === -1) {
    res.status(404).json({ message: "Medicine not found" });
    return;
  }
  const medicine = medicines[index]; //retornando o objeto que foi compativel com o id que ele encontrou;
  medicines.splice(index, 1); //Deleta o elemento da Array
  res.status(200).json(medicine)
}
