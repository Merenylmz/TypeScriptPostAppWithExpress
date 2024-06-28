import express, { Request, Response } from "express";
import { getAllCategory, getByIdCategory, addCategory, deleteCategory, updateCategory } from "../controllers/CategoryController";
export const categoryRouter = express.Router();


categoryRouter.get("/", getAllCategory);
categoryRouter.get("/:id", getByIdCategory);
categoryRouter.post("/", addCategory);
categoryRouter.delete("/:id", deleteCategory);
categoryRouter.post("/edit/:id", updateCategory);