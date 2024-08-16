import { Router } from "express";

import {
    CadastrarFeedback
} from "../controllers/FeedbackController.js";

const router = Router();

// router.get("/", buscarEventos);
router.post("/feedback", CadastrarFeedback);

export default router;
