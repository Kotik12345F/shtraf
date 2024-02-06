import sql from "../db.js";

const testget = async (req,res) => {
    const testinfo = await sql `select * from user`
    res.send(testinfo)
}
export default testget