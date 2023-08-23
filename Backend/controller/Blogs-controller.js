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
}