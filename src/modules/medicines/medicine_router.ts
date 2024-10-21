import { Router } from "express";
import { createMedicine, deleteMedicine, findMedicineById, listMedicines } from "./medicine_controller";

const medicineRouter = Router();

medicineRouter.get("/", listMedicines);

medicineRouter.get("/:id", findMedicineById);

medicineRouter.post("/", createMedicine);

medicineRouter.delete("/:id", deleteMedicine);

export { medicineRouter };