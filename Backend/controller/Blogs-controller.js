import Blog from "../model/Blog";
import User from "../model/User";

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