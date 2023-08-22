import User from "../model/User";

export const getAlluser = async (req, res)=>{
  let users;
  try {
    users = await User.find()
  }
  catch(err){
    console.log(err)
    return res.status(400).json({message: err});
  }
  if(!users){
    return res.status(404).json({message: 'User not found'});
  }
  return res.status(200).json({users});
};