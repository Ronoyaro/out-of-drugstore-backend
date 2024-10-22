import { Router } from "express";
import { medicineRouter } from "./modules/medicines/medicine_router";

const routes = Router();
routes.use("/medicines", medicineRouter);

export { routes };
