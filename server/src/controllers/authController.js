import { genToken } from "../../lib/jwtUtil.js";
import { genPassword, validPassword } from "../../lib/passwordUtil.js"
import { privateKey } from "../config/keys.js";
import userQuery from "../db/userQuery.js";

const registerUserPOST = async (req, res) => {
    const { email, password } = req.body;
    const hashedPassword = await genPassword(password);

    await userQuery.addUser(hashedPassword, email);

    res.status(201).json({
        success: true,
        message: "User Registered"
    })
};

const loginUserPOST = async (req, res) => {
    const { email, password } = req.body;

    const user = await userQuery.getUserByEmail(email);

    if (!user) {
        throw new Error('Invalid Credentials');
    }

    const valid = await validPassword(password, user.password);

    if (!valid) {
        throw new Error('Invalid Password!');
    }

    const token = genToken(user.id, user.email, privateKey);

    res.status(200).json({
        success: true,
        token,
        user: {
            id: user.id,
            email: user.email,
        },
    })
}

export { registerUserPOST, loginUserPOST };