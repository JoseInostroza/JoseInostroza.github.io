import { Router } from "express";
import * as viewController from "../controllers/views.controllers.js";
const router = Router();

//Vista pricipal
router.get("/", viewController.registroPJ)

export default router
