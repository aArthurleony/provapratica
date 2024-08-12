import { Router } from "express";

import {
  buscarPalestrantes,
  cadastrarPalestrante,
} from "../controllers/PalestranteController.js";

const router = Router();

router.get("/", buscarPalestrantes);
router.post("/cadastrarPalestrante", cadastrarPalestrante);

export default router;
