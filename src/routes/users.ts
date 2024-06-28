import { verifyToken } from '../controllers/CommonController';
import { register, login } from './../controllers/AuthController';
import express from 'express';
export const authRouter = express.Router();

authRouter.post("/register", register);
authRouter.post("/login", login);