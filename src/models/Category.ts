import mongoose, { Schema, Document, model } from "mongoose";

const postsSchema = new Schema({
    postId: {type: mongoose.Schema.Types.ObjectId, ref: "posts"}
});

export interface ICategory extends Document{
    title: string,
    posts: Array<String>
}

const categorySchema : Schema = new Schema<ICategory>({
    title: String,
    posts: {type: [postsSchema], default: []}
});

const Category = model<ICategory>("Category", categorySchema);


export default Category;