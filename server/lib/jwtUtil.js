import jwt from "jsonwebtoken";

const genToken = (id, email, privateKey) => {
    return jwt.sign(
        {
            sub: id,
            email: email
        },
        privateKey,
        {
            algorithm: "RS256",
            expiresIn: process.env.JWT_EXPIRES_IN
        }
    )
}

export { genToken };