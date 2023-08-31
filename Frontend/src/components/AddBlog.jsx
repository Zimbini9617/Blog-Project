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
    setBlog((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const sendRequest = async () => {
    const res = await axios
      .post('http://localhost:5000/api/blog/add', {
        title: blog.title,
        description: blog.description,
        image: blog.image,
        user: localStorage.getItem('userId'),
      })
      .catch((err) => {
        console.log(err);
      });
    const data = await res.data;
    return data;
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    sendRequest()
      .then((data) => console.log(data))
      .then(() => navigate('/blogs'));
  };
  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-50">
      <div className="max-w-2xl w-full mx-auto">
        <div>
          <h2 className="mt-6 text-center text-3xl font-semibold text-gray-900">
            Add Blog
          </h2>
        </div>
        <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
          <div>
            <div>
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                name="title"
                autoComplete="title"
                required
                value={blog.title}
                onChange={handleChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-lg"
              />
            </div>
            <div>
              <label htmlFor="desc">Desciption:</label>
              <input
                type="text"
                id="desc"
                name="description"
                autoComplete="desc"
                required
                value={blog.description}
                onChange={handleChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-lg"
              />
            </div>
            <div>
              <label htmlFor="image">Image</label>
              <input
                type="text"
                id="image"
                name="image"
                autoComplete="image"
                required
                value={blog.image}
                onChange={handleChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-lg"
              />
            </div>
            <div>
              <button
                type="submit"
                className="relative w-full flex justify-center py-4 px-4  border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 mt-6"
              >
                Add Blog
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
