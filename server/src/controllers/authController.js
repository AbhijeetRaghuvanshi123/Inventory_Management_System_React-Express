import { genToken } from "../../lib/jwtUtil.js";
import { genPassword, validPassword } from "../../lib/passwordUtil.js"
import { privateKey } from "../config/keys.js";
import userQuery from "../db/userQuery.js";

const registerUserPOST = async (req, res) => {
    try {
        const { email, password } = req.body;

        const hashedPassword = await genPassword(password);

        await userQuery.addUser(hashedPassword, email);

        return res.status(201).json({
            success: true,
            message: "User Registered",
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message || "Server error",
        });
    }
};

const loginUserPOST = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await userQuery.getUserByEmail(email);

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Invalid Credentials",
            });
        }

        const valid = await validPassword(password, user.password);

        if (!valid) {
            return res.status(401).json({
                success: false,
                message: "Invalid Password",
            });
        }

        const token = genToken(user.id, user.email, privateKey);

        return res.status(200).json({
            success: true,
            token,
            user: {
                id: user.id,
                email: user.email,
            },
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message || "Server error",
        });
    }
};

export { registerUserPOST, loginUserPOST };