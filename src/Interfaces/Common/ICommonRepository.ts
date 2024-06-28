import mongoose, { Document, Model } from "mongoose";

export interface ICommonRepository<T extends Document>{
    getAll():Promise<Array<T>>;
    getById(id: string): Promise<T|null>;
    create(t: Promise<T>):void;
    delete(id: string):boolean;
    update(t: Promise<T>, id: string):void;
}