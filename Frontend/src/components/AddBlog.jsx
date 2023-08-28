import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddBlog = () => {
  const navigate = useNavigate();

  const [blog, setBlog] = useState({
    title: '',
    description: '',
    image: '',
  });

  const handleChange = (e) => {
    setBlog((prev)=> ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const sendRequest = async ()=> {
    const res = await axios
    .post('http://localhost:5000/api/blog/add', {
      title: blog.title,
      description: blog.description,
      image: blog.image,
      user: localStorage.getItem('userId'),
    })
    .catch((err)=> {
      console.log(err);
    });
  }
  return (
    <div>AddBlog</div>
  )
}

export default AddBlog