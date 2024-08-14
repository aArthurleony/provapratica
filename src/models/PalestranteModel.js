import conn from "../config/conn.js";

const tablePalestrante = /*sql*/ `
    CREATE TABLE IF NOT EXISTS palestrantes(
        palestrante_id INT auto_increment PRIMARY KEY,
        nome varchar(255) not null,
        expertise varchar(255)not null,
        cpf varchar(60) not null

    )`;
conn.query(tablePalestrante, (err, result, field) => {
  if (err) {
    console.error("Erro ao criar a tabela" + err.stack);
    return;
  }
  console.log(result);
  //   console.log(field);
  console.log("Tabela [Palestrantes] criada com sucesso");
});
