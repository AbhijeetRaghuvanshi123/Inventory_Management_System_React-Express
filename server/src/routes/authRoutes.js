import { Router } from "express";
import { registerUserPOST, loginUserPOST } from "../controllers/authController.js";

const authRouter = Router();

authRouter.post('/register', registerUserPOST);
authRouter.post('/login', loginUserPOST);

export default authRouter;