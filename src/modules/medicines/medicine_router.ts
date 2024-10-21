import { Router } from "express";
import { MedicineController } from "./medicine_controller";


const medicineRouter = Router();

medicineRouter.get("/", MedicineController.list);
medicineRouter.get("/:id", MedicineController.findById);
medicineRouter.post("/", MedicineController.create);
medicineRouter.delete("/:id", MedicineController.delete);

export { medicineRouter };