import { IPost, Post } from "../models/Post";
import CommonRepository from "./Common/CommonRepository";

class PostRepository extends CommonRepository<IPost> {
    constructor(){
        super(Post)
    }
}

export default PostRepository;