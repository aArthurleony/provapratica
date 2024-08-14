import { Router } from "express";

import {
  buscarEventos,
  cadastrarEvento
} from "../controllers/EventosController.js";

const router = Router();

router.get("/", buscarEventos);
router.post("/agenda", cadastrarEvento);

export default router;
