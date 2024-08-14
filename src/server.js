import "dotenv/config";
import express from "express";

import conn from "./config/conn.js";

import "./models/PalestranteModel.js";
import "./models/EventoModel.js";

import PalestrantesRoutes from "./routes/PalestranteRouter.js";
import EventoRoutes from "./routes/EventoRouter.js"

const PORT = process.env.PORT;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.use("/palestrantes", PalestrantesRoutes)
app.use("/eventos", EventoRoutes)

app.listen(PORT, ()=>{
    console.log("SERVIDOR RODANDO NA PORTA "+PORT)
})