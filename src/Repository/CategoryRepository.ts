import CommonRepository from "./Common/CommonRepository";
import Category, { ICategory } from "../models/Category";

class CategoryRepository extends CommonRepository<ICategory>{
    constructor() {
        super(Category);
    }
}

export default CategoryRepository;