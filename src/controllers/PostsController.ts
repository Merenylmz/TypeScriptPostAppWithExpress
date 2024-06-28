import { Response, Request } from "express";
import PostRepository from "../Repository/PostRepository";
import { verifyToken } from "./CommonController";

const postRepository = new PostRepository();

export const getAllPosts = async(req: Request, res: Response) =>{
    try {
        const posts = await postRepository.getAll();

        res.send(posts);
    } catch (error) {
        console.log(error);
    }
};

export const getByIdPost = async(req: Request, res: Response) =>{
    try {
        const post = await postRepository.getById(req.params.id);
        res.send(post);
    } catch (error) {
        console.log(error);
    }
}

export const addPost = async(req: Request, res: Response) =>{
    try {
        await postRepository.create(req.body);

        res.send({status: "OK", msg: "Created"});
    } catch (error) {
        console.log(error);
        
    }
};

export const deletePost = async(req: Request, res: Response) =>{
    try {
        const status = await postRepository.delete(req.params.id);
        if (!status) {return res.send("Please try again");}


        res.send({status: "OK", msg: "deleted"});
    } catch (error) {
        console.log(error);
        
    }
};

export const updatePost = async(req: Request, res: Response) =>{
    try {
        await postRepository.update(req.body, req.params.id);

        res.send({status: "OK", msg: "updated"});
    } catch (error) {
        console.log(error);
    }
} 