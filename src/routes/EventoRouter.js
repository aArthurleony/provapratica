import { Router } from "express";

import {
  buscarEventos,
  cadastrarEvento,
  deletarEvento,
} from "../controllers/EventosController.js";

const router = Router();

router.get("/", buscarEventos);
router.post("/agenda", cadastrarEvento);
router.delete("/cancelar", deletarEvento);

export default router;
