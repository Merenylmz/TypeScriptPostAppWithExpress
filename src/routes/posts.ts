import express from "express";
import { addPost, deletePost, getAllPosts, getByIdPost, updatePost } from "../controllers/PostsController";
import isValidToken from "../middleware/isValidToken";
export const postRouter = express.Router();

postRouter.get("/", getAllPosts);
postRouter.get("/:id", getByIdPost);
postRouter.post("/", isValidToken, addPost);
postRouter.delete("/:id", isValidToken, deletePost);
postRouter.post("/edit/:id", isValidToken, updatePost);