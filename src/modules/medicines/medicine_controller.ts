import { Request, Response } from "express";
import { MedicineService } from "./medicine_service";

export class MedicineController {
  static list(req: Request, res: Response) {
    const medicines = MedicineService.list();
    res.status(200).json(medicines);
  }
  static findById(req: Request, res: Response) {
    const id = Number(req.params.id);
    const medicine = MedicineService.findById(id);
    if (!medicine) {
      res.status(404).json({ message: "Medicine not found" });
      return;
    }
    res.status(200).json(medicine);
  }
  static create(req: Request, res: Response) {
    const input = req.body;
    const medicine = MedicineService.create(input);

    res.status(201).json(medicine);
  }
  static deleteById(req: Request, res: Response) {
    const id = Number(req.params.id);
    const medicine = MedicineService.deleteById(id)
    res.status(200).json(medicine);
  }
}
