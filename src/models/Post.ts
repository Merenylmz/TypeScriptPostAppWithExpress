import mongoose, { Document, Schema, model } from "mongoose";

export interface IPost extends Document{
    title: string;
    description: string | null;
    categoryId: mongoose.Schema.Types.ObjectId;
    userId: mongoose.Schema.Types.ObjectId;
};

const postSchema : Schema = new Schema<IPost>({
    title: String,
    description: {type: String, default: null},
    categoryId: {type: mongoose.Schema.Types.ObjectId, ref: "categories"},
    userId: {type: mongoose.Schema.Types.ObjectId, ref: "users"},
});

export const Post = model<IPost>("Posts", postSchema);