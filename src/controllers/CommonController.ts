import jwt, { JwtPayload } from "jsonwebtoken";
import { User } from "../models/User";

interface IVerifyTokenResult {
    status?: string;
    msg?: string;
    user?: any;
    error?:string;
}
export const verifyToken = async(token:string) : Promise<IVerifyTokenResult>=>{
    try {
        const decodedToken = await jwt.verify(token, process.env.privateKey!) as JwtPayload;
        const user = await User.findOne({_id: decodedToken.userId});
        if (!user) {
            return {status: "IS NOT OK", msg: "Please try login"};
        }

        if (decodedToken.exp && decodedToken.exp < Math.floor(Date.now()/1000)) {
            return {status: "IS NOT OK", msg: "Token is expired"};
        }

        return {user: user, status: "OK"};
    } catch (error) {
        console.log(error);
        return {error: "error"};
    }
};