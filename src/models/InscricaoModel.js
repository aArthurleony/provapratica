import conn from "../config/conn.js";

const tableInscricoes = /*sql*/ `
    CREATE TABLE IF NOT EXISTS Inscricoes(
        inscricao_id int auto_increment not null,
        participante_id int,
        evento_id int,
        foreign key(participante_id) references participantes(participante_id),
        foreign key(evento_id) references eventos(evento_id)
)`;
conn.query(tableInscricoes, (err, result, field) => {
  if (err) {
    console.error("Erro ao criar a tabela" + err.stack);
    return;
  }
  console.log(result);
  //   console.log(field);
  console.log("Tabela [ inscricoes ] criada com sucesso");
});
