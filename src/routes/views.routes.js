import { Router } from "express";
import * as viewController from "../controllers/views.controllers.js";
const router = Router();

//Vista pricipal
router.get("/", viewController.home)

router.get("/tienda", viewController.tienda)

router.get("/registro", viewController.registroPersonaje)

router.get("/main", viewController.main)

router.get("/taberna", viewController.taberna)

router.get("/ayuda", viewController.ayuda)
export default router
