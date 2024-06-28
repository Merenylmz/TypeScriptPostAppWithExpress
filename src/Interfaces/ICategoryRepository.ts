import mongoose from "mongoose";
import { ICommonRepository } from "./Common/ICommonRepository";
import { ICategory } from "../models/Category";

export interface ICategoryRepository extends ICommonRepository<ICategory>{
    
}