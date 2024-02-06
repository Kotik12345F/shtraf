import sql from "../db.js";
import bcrypt from 'bcryptjs'
import generateAccessToken from '../utils/generateToken.js'

const login = async (req,res) => {
    const {name,password} = req.body 
    
    const user = await sql`select * from users where name  = ${name}`

    if(!user[0]){
        return res.status(400).json({message:`Пользователь ${name} не найден`})
    }

    const validPassword = bcrypt.compareSync(password, user[0].password)

    if(!validPassword){
        return res.status(400).json({message:`Неверный пароль`})
    }
    console.log('пользователь зашел')    
    
    const token = generateAccessToken(user[0].id, user[0].role)
    return res.json({
        token:token,
        user:user[0]
    })
}

export default login   