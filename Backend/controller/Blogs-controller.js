import Blog from "../model/Blog";
import User from "../model/User";
import mongoose from "mongoose";


export const getAllBlogs = async (req, res)=>{
  let blogs;
  try{
    blogs = await Blog.find();
  }
  catch(err){
    console.log(err);
  }
  if(!blogs){
    return res.status(404).json({message: 'Blog not found'});
  }

  return res.status(200).json({blogs});
};

export const addBlog = async (req, res)=>{
  const {title, description, image, user} = req.body;

  let existingUser;
  try {
    existingUser = User.findById(user);
  }catch(err){
    console.log(err)
  }
  if(!existingUser){
    return res.status(404).json({message: 'User not found'})
  }

  const blog = new Blog({title, description, image, user});
  try{
    const session = await mongoose.startSession();
    session.startTransaction();
    await blog.save({session});
    existingUser.blogs.push(blog);
    await existingUser.save({session});
    await session.commitTransaction();
  }catch(err){
    console.log(err)
  }

  return re.satus(200).json({blog})
};

export const updateBlog = async (req, res)=>{
  const blogId = req.params.id;
  const {title, description} = req.body;
let blog;
try {
  blog = await Blog.findByIdAndUpdate({_id:blogId}, {title, description});
}catch(err){
  console.log(err)
}

if(!blog){
  return res.status(500).json({meassage: 'Unable to update'})
}
return res.status(200).json({ blog });
};

export const getById = ()=> async (req, res)=>{
  const blogId = req.params.id;
  let blog;
  try {
    blog = await Blog.findById({_id: blogId})
  }catch(err){
    console.log(err)
  }
  if (!blog){
    return res.status(200).json({message: 'Blog not found'});
  }
  return res.status(200).json({ blog });
};

export const deleteBlog = async (req, res)=>{
  const blogId = req.params.id;

  let blog;
  try{
    blog = await blog.findByIdAndRemove({_id: blogId}).populate('user');
    await blog.user.blogs.pull(blog);
    await blog.user.save(); 
  }catch(err){
    console.log(err)
  }
  if(!blog){
  return res.status(500).json({message: 'Blog not found'})
  }
  return res.status(200).json({message: 'Blog is deleted sucessfully'})
};

export const getByUserId = async (req, res)=>{
  const userId = req.params.id;
  let userBlogs;
  try{
  userBlogs = await User.findById({_id: userId}).populate('blogs');  
  }catch(err){
    console.log(err)
  }
  if(!userBlogs){
    return res.status(404).json({message: 'Blog not found for this user id'});
  }
  return res.status(200).json({userBlogs});
};