import { SignJWT, jwtVerify } from "jose";
const bcrypt = require('bcryptjs')

const secretKey = process.env.SECRET_KEY
const key = new TextEncoder().encode(secretKey)

export const encrypt = async (payload: any) => {
    return await new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('2h')
        .sign(key)
}

export const decrypt = async (token: any) => {
    const payload = await jwtVerify(token, key, {
        algorithms: ["HS256"]
    })

    return payload
}

export const hashPassword = (password: any) => {
    return bcrypt.hashSync(password, 5)
}

export const comparePassword = (password: any, hash: any) => {
    return bcrypt.compareSync(password, hash)
}