import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './route/Users-route.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/user', router);

mongoose.connect(process.env.MONGO_DB).then(()=> app.listen(process.env.PORT, ()=>{
  console.log('app is listening to localhost and the port number is', process.env.PORT)
})).catch((err)=>{
  console.log(err);
})

//bTMaG9TPypzVa3YK
