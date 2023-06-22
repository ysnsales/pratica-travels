import { Router } from "express";
import travelsController from "../controllers/travels.controller.js";

const travelRouter = Router();

travelRouter.get("/passengers/travels", travelsController.getPassengerTravels)

export default travelRouter;