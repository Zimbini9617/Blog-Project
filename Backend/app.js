import express from 'express';


const app = express();


app.listen(5000, ()=> {
  console.log('app is running on port 5000');
});