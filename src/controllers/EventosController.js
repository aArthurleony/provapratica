import conn from "../config/conn.js";

export const buscarEventos = (request, response) => {
  const sql = /*sql*/ `SELECT * FROM Eventos`;
  conn.query(sql, (err, data) => {
    if (err) {
      response.status(500).json({ message: "Erro ao buscar Eventos" });
      return;
    }
    const TodosOsEventos = data;
    response.status(200).json(TodosOsEventos);
  });
};
export const cadastrarEvento = (request, response) => {
  const { titulo, data_Evento, palestrante_id } = request.body;

  if (!titulo) {
    response.status(400).json({ message: "o titulo é obrigatório" });
    return;
  }
  if (!data_Evento) {
    response.status(400).json({ message: "data é obrigatório" });
    return;
  }
  const checkSQLPalestrante = /*sql*/ `select * from palestrantes where ?? = ?`;

  const checkSQLpalestranteData = ["palestrante_id", palestrante_id];
  conn.query(checkSQLPalestrante, checkSQLpalestranteData, (err) => {
    if (err) {
      console.error(err);
      response.status(500).json({
        message: "erro ao verificar se já existe um palestrante cadastrado",
      });
      return;
    }
    const insertSQL = /*sql*/ `insert into Eventos(??,??,??)values(?,?,?)`;
    const insertSQLdata = [
      "titulo",
      "data_Evento",
      "palestrante_id",
      titulo,
      data_Evento,
      palestrante_id,
    ];
    conn.query(insertSQL, insertSQLdata, (err) => {
      if (err) {
        response.status(500).json({ message: "erro ao cadastrar evento" });
        return console.log(err);
      }
      response.status(200).json({ message: "evento cadastrado" });
    });
  });
};
export const deletarEvento = (request, response) => {
  const { evento_id } = request.body;
  const deleteSQL = /*sql*/`delete from eventos where ?? = ?`

  const checkId = ["evento_id", evento_id]
  conn.query(deleteSQL, checkId, (err, info)=>{
    if(err){
      response.status(500).json({message: "erro ao deletar evento"})
      return console.error(err)
    }
    if(info.affectedRows == 0){
      response.status(404).json({message: "erro ao deletar o evento"})
      return console.log(evento_id)
    }
    response.status(204).json({message: "evento deletado"})
  })
};
