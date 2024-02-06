import jwt from 'jsonwebtoken'

const generateAccessToken = (id, role ) =>{
    const payload ={
        id,
        role
    }

    return jwt.sign(payload,"SECRET_KEY",{expiresIn:"1h"})
}

export default generateAccessToken