import conn from "../config/conn.js";

const tableNovoEvento = /*sql*/ `
    CREATE TABLE IF NOT EXISTS eventos(
        evento_id INT auto_increment PRIMARY KEY,
        titulo varchar(255) not null,
        data_Evento date not null,
        palestrante_id VARCHAR(60) NOT NULL,
        foreign key(palestrante_id) references palestrantes(palestrante_id)
    )`;
conn.query(tableNovoEvento, (err, result, field) => {
  if (err) {
    console.error("Erro ao criar a tabela" + err.stack);
    return;
  }
  console.log(result);
  //   console.log(field);
  console.log("Tabela [ Eventos ] criada com sucesso");
});
