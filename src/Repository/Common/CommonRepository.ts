import { Document, Model, Schema } from "mongoose";
import { ICommonRepository } from "../../Interfaces/Common/ICommonRepository";

class CommonRepository<T extends Document> implements ICommonRepository<T>{
    private model: Model<T>;

    constructor(model: Model<T>){
        this.model = model;
    }

    getAll(): Promise<T[]> {
        return this.model.find().exec();
    }
    getById(id: string): Promise<T | null> {
        return this.model.findOne({_id: id}).exec();
    }
    create(t: Promise<T>): void {
        this.model.create(t);
    }
    delete(id: string): boolean {
        this.model.deleteOne({_id: id}).exec();
        return true;
    }
    async update(t: Promise<T>, id: string): Promise<void> {
        await this.model.updateOne({_id: id}, t).exec();
    }
    
}

export default CommonRepository;