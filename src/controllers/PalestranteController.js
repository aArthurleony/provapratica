import conn from "../config/conn.js";
import { v4 as uuidv4 } from "uuid";
// import bcrypt from "bcrypt";

// import jwt from "jsonwebtoken";

export const buscarPalestrantes = (request, response) => {
  const sql = /*sql*/ `SELECT * FROM palestrantes`;
  conn.query(sql, (err, data) => {
    if (err) {
      response.status(500).json({ message: "Erro ao Buscar palestrante" });
      return;
    }
    const todosPalestrantes = data;
    response.status(200).json(todosPalestrantes);
  });
};

export const cadastrarPalestrante = (request, response) => {
  const { nome, expertise, cpf } = request.body;
  if (!nome) {
    response.status(400).json({ message: "O nome é um campo obrigatório" });
    return;
  }
  if (!expertise) {
    response
      .status(400)
      .json({ message: "A expertise é um campo obrigatório" });
    return;
  }
  if (!cpf) {
    response.status(400).json({ message: "cpf é um campo obrigatório" });
    return;
  }
  const checkSQL = /*sql*/ `SELECT * FROM palestrantes where ?? = ? `;

  const checkSQLData = ["cpf", cpf];
  conn.query(checkSQL, checkSQLData, (err, data) => {
    if (err) {
      response
        .status(500)
        .json({ message: "Erro ao verificar existencia de palestrante" });
      return console.error(err);
    }
    if (data.length > 0) {
      response.status(409).json({ message: "Palestrante já cadastrado" });
      return console.log(err);
    }
    const palestrante_id = uuidv4();

    const insertSQL = /*sql*/ `insert into palestrantes(??,??,??,??)values(?,?,?,?)`;
    const insertSQLdata = [
      "palestrante_id",
      "nome",
      "expertise",
      "cpf",
      palestrante_id,
      nome,
      expertise,
      cpf,
    ];
    conn.query(insertSQL, insertSQLdata, (err) => {
      if (err) {
        response.status(500).json({ message: "erro ao cadastrar palestrante" });
        return console.log(err);
      }
      response.status(201).json({message: "palestrante cadastrado"})
    });
  });
};
