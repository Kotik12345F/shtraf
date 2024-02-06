import sql from "../db.js";

const createReport = (req,res) => {
    const {date, place, comment} = req.body
    const sendReport = sql`insert into reportlist(date,place,comment) values(${date},${place},${comment})`
    if (!sendReport){
        res.status(400).send('Что то произошло')
    }
}
export default createReport