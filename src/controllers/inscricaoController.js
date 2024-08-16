import conn from "../config/conn.js";

export const CadastrarInscricoes = (request, response) => {
  const { inscricao_id, participante_id, evento_id} = request.body;

  if (!inscricao_id) {
    response.status(400).json({ message: "a inscricao_id é um campo obrigatório" });
    return;
  }
  if (!participante_id) {
    response.status(400).json({ message: "o campo participante_id é obrigatório" });
    return;
  }
  if (!evento_id) {
    response.status(400).json({ message: "o campo participante_id é obrigatório" });
    return;
  }
  const checkSQL = /*sql*/`select * from inscricoes where ?? = ? and ?? = ? and ?? = ?`
  const checksqldata = ["inscricao_id", inscricao_id, "participante_id", participante_id, "evento_id", evento_id]
  conn.query(checkSQL, checksqldata, (err, data)=>{
    if(err){
        response.status(500).json({message: "erro ao buscar os inscricoes"})
        return console.error(err)
    }
    if(data.length > 0){
        response.status(409).json({message: "inscricao feita"})
        return
    }
    const insertSQL = /*sql*/`insert into feedbacks(??,??,??,??)values(?,?,?,?)`
    const insertSQLdata = [
        "inscricao_id",
        "participante_id",
        "evento_id" ,
        inscricao_id,
        participante_id,
        evento_id,
    ]
    conn.query(insertSQL, insertSQLdata, (err)=>{
        if(err){
            response.status(500).json({message: "erro ao cadastrar inscricoes"})
            return console.log(err)
        }
        response.status(200).json({message: "inscricao enviado"})
    })
  })
};
