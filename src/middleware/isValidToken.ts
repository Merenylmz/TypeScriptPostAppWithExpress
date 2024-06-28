import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../controllers/CommonController";

const isValidToken = async(req: Request, res: Response, next: NextFunction) =>{
    const status = await verifyToken((req.query.token) as string);
    if (!status.user) { return res.send("Please give valid token");}

    next();
};

export default isValidToken;