import { Document } from 'mongoose';
import { IPost } from '../models/Post';
import { ICommonRepository } from './Common/ICommonRepository';
export interface IPostRepository extends ICommonRepository<IPost>{

}