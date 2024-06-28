import { Request, Response } from "express";
import CategoryRepository from "../Repository/CategoryRepository";

const categoryRepository = new CategoryRepository();

export const getAllCategory = async(req :Request, res:Response)=>{
    try {
        const categories = await categoryRepository.getAll();
        res.send(categories);
    } catch (error) {
        console.log(error);
        
    }
}

export const getByIdCategory = async (req:Request, res:Response) => {
    try {
        const category = await categoryRepository.getById(req.params.id);

        res.send(category);
    } catch (error) {
        console.log(error);
        
    }
}

export const addCategory = async (req:Request, res:Response) => {
    try {
        const newCategory = await categoryRepository.create(req.body);      

        res.send({msg:"added", newCategory});
    } catch (error) {
        console.log(error);
    }
}

export const deleteCategory = async (req:Request, res: Response) => {
    try {
        const status = await categoryRepository.delete(req.params.id);
        if (!status) { return res.send("Please try again");}

        res.send(status);
    } catch (error) {
        console.log(error);
    }
}

export const updateCategory = async (req:Request, res:Response) => {
    try {
        await categoryRepository.update(req.body, req.params.id);        

        res.send({status: "OK", msg: "edited"});
    } catch (error) {
        console.log(error);
    }
}