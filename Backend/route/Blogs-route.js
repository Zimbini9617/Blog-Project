import express from 'express';
import { getAllBlogs, addBlog } from "../controller/Blogs-controller";

const blogRouter = express.Router();

blogRouter.get('/', getAllBlogs);
blogRouter.post('/', addBlog);

export default blogRouter;