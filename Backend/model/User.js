import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    requred: true, 
  },
  email: {
    type: String,
    required: true,
  }, 
  password: {
    type: String,
    requred: true,
    minlength: 6,
  },
  blogs: [{
    type:mongoose.Types.ObjectId, ref: 'Blog', required: true
  }],
});

export default mongoose.model('User', userSchema);