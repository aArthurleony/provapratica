import conn from "../config/conn.js";

const tableFeedback = /*sql*/ `
    CREATE TABLE IF NOT EXISTS feedbacks(
        feedback_id INT auto_increment PRIMARY KEY,
        nota decimal not null,
        comentario varchar(255) not null,
        evento_id varchar(255) not null,
        participante_id varchar(255) not null
    )`;
conn.query(tableFeedback, (err, result, field) => {
  if (err) {
    console.error("Erro ao criar a tabela" + err.stack);
    return;
  }
  console.log(result);
  //   console.log(field);
  console.log("Tabela [ Feedback ] criada com sucesso");
});
