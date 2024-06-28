import express, {Request, Response} from "express";
import { User } from "../models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async(req: Request, res:Response) =>{
    try {
        const user = await User.findOne({email: req.body.email});
        if (user) {return res.send("This user already exists, please give unsaved info");}

        const hashedPassword = await bcrypt.hash(req.body.password, 11);

        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        });

        await newUser.save();

        res.send({status: "OK", msg:"User is saved", name: req.body.name});
    } catch (error) {
        console.log(error);
        
    }
};

export const login = async(req: Request, res:Response) =>{
    try {
        const user = await User.findOne({email: req.body.email});
        if (!user) {return res.send("This user is not saved");}

        const status = await bcrypt.compare(req.body.password, user.password);
        if (!status) {
            return res.send("Wrong password");
        }

        const token = await jwt.sign({userId: user._id}, process.env.privateKey!, {expiresIn: "4h"});

        user.lastLoginToken = token;
        await user.save();

        res.send({token, status: "OK"});
    } catch (error) {
        console.log();
        
    }
};

