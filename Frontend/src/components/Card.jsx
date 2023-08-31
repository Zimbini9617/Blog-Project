import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function Card({ id, title, description, image, isUser }) {
  const navigate = useNavigate();
  console.log(isUser);

  const deleteRequest = async () => {
    const res = await axios
      .delete(`http://localhost:5000/api/blog/delete/${id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

  const handleDelete = async () => {
    deleteRequest()
      .then(() => navigate('/'))
      .then(() => navigate('/blogs'));
  };
  return (
    <div className="w-full rounded-lg shadow-md lg:max-w-sm">
      <img className="object-cover w-full h-48" src={image} alt="image" />
      <div className="p-4">
        <h4 className="text-xl font-semibold tracking-tight text-blue-600">
          {title}
        </h4>
        <p className="mb-2 leading-normal">{description}</p>
        <button
          onClick={() => navigate(`/blog-detail/${id}`)}
          className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow"
        >
          Read more
        </button>

        {isUser && (
          <div className="flex gap-2 mt-2">
            <button
              className="bg-purple-600 text-white px-4 py-2 text-lg cursor-pointer "
              onClick={() => navigate(`/update-blog/${id}`)}
            >
              Update
            </button>
            <button
              className="bg-red-600 text-white px-4 py-2 text-lg cursor-pointer"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
