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
});

export default mongoose.model('User', userSchema);