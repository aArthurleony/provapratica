import conn from "../config/conn.js";

export const CadastrarFeedback = (request, response) => {
  const { nota, comentario, participante_id, evento_id } = request.body;

  if (!nota) {
    response.status(400).json({ message: "a nota é um campo obrigatório" });
    return;
  }
  if (!comentario) {
    response.status(400).json({ message: "o campo comentário é obrigatório" });
    return;
  }
  const checkSQL = /*sql*/`select * from feedbacks where ?? = ? and ?? = ? and ?? = ? and ?? = ?`
  const checksqldata = ["nota", nota, "comentario", comentario, "participante_id", participante_id, "evento_id", evento_id]
  conn.query(checkSQL, checksqldata, (err, data)=>{
    if(err){
        response.status(500).json({message: "erro ao buscar os feedbacks"})
        return console.error(err)
    }
    if(data.length > 0){
        response.status(409).json({message: "feedback cadastrado"})
        return
    }
    const insertSQL = /*sql*/`insert into feedbacks(??,??,??,??)values(?,?,?,?)`
    const insertSQLdata = [
        "nota",
        "comentario",
        "participante_id",
        "evento_id" ,
        nota,
        comentario,
        participante_id,
        evento_id,
    ]
    conn.query(insertSQL, insertSQLdata, (err)=>{
        if(err){
            response.status(500).json({message: "erro ao cadastrar feedbacks"})
            return console.log(err)
        }
        response.status(200).json({message: "feedback enviado"})
    })
  })
};
