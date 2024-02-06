import sql from "../db.js";
import bcrypt from 'bcryptjs'

const register = async (req, res) => {
    const {name, password} = req.body

    const userExist = await sql `select * from users where login = ${name} limit 1`[0]
    if(userExist){
        res.status(400).send('Пользователь уже существует')
        console.log('Пользователь существует')
    } 
    console.log('что то работает')

    const hashedPassword = bcrypt.hashSync(password,7)

    await sql`insert into users(name, password) values(${name},${hashedPassword})`
    return res.send({message:"нихуя себе"})
}
export default register