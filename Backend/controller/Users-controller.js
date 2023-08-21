import User from "../model/User";

const getAlluser = async (req, res)=>{
  let users;
  try {
    users = await User.find()
  }
  catch(err){
    console.log(err)
    return res.status(400).json({message: err});
  }
  if(!users)
};