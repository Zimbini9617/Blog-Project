import express from 'express';
import { getAllBlogs, addBlog, updateBlog, getById, deleteBlog, getByUserId } from "../controller/Blogs-controller";

const blogRouter = express.Router();

blogRouter.get('/', getAllBlogs);
blogRouter.post('/', addBlog);
blogRouter.put('/update/:id', updateBlog);
blogRouter.get('/:id', getById);
blogRouter.delete('/delete/:id', deleteBlog);
blogRouter.get('/user/:id', getByUserId)

export default blogRouter;