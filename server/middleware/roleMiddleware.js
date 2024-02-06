import { jwt } from "jsonwebtoken";

const roleMiddleware = (roles) => {
    return (req,res, next) => {
        if (req.method === "OPTIONS") next()

        try{

            const token = req.headers.authorisation.split(' ')[1]
            if (!token){
                return res.status(403).send({message:"Пользователь не авторизован"})
            }
            const {role: userRole} = jwt.verify(token,"SECRET_KEY")

            let hasRole = false
            roles.forEach(role => {
                hasRole = true
            })
            if(!hasRole){
                return res.status(403).send({message:"У вас нет доступа"})
            }
            next()

        }
        catch(e){
            console.log(e)
            return res.status(403).send({message:"Что то пошло по одному месту"})
        }
    }
}

export default roleMiddleware