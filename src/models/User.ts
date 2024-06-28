import mongoose, { Document, Schema, model } from "mongoose";

const postSchema  = new Schema({
    postId: {type: mongoose.Schema.Types.ObjectId, ref: "posts"}
});

export interface IUser extends Document{
    name: string;
    email: string;
    password: string;
    rememberToken: string;
    rememberTokenExpiration: Date;
    lastLoginToken: string;
    isAdmin: boolean;
    posts: Array<String>
}

const userSchema : Schema = new Schema<IUser>({
    name: String,
    email: String,
    password: String,
    rememberToken: {type: String, default: null},
    rememberTokenExpiration: {type: Date, default: null},
    isAdmin: {type: Boolean, default: false},
    lastLoginToken: {type: String, default: null},
    posts: {type: [postSchema], default:[]}
});

export const User = model<IUser>("Users", userSchema);