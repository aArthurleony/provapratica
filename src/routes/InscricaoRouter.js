import { Router } from "express";

import {
  CadastrarInscricoes
} from "../controllers/inscricaoController.js";

const router = Router();

// router.get("/", buscarEventos);
router.post("/mais-popular", CadastrarInscricoes);

export default router;
