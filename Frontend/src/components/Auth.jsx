import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authAction } from '../store';
const Auth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(false);
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleToggle = () => {
    setIsSignup(!isSignup);
  };

  const sendRequest = async (type = 'login') => {
    const res = await axios
      .post(`http://localhost:5000/api/user/${type}`, {
        name: user.name,
        email: user.email,
        password: user.password,
      })
      .catch((err) => {
        console.log(err);
      });
    const data = await res.data;
    return data;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      sendRequest('signup')
        .then((data) => localStorage.setItem('userId', data.user._id))
        .then(() => dispatch(authAction.login()))
        .then(() => navigate('/blogs'));
    } else {
      sendRequest()
        .then((data) => localStorage.setItem('userId', data.user._id))
        .then(() => dispatch(authAction.login()))
        .then(() => navigate('/blogs'));
    }
  };
  return (
    <div className="w-94 h-full flex items-center rounded-lg justify-center bg-gray-200">
      <div className="max-w-md w-full mx-auto">
        <div>
          <h2 className="mt-6 text-center text-3xl font-semibold text-gray-900">
            {isSignup ? 'Sing up' : 'Log in'}
          </h2>
        </div>
        <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
          <div>
            {isSignup ? (
              <div>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="name"
                  required
                  value={user.name}
                  onChange={handleChange}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-lg"
                />
              </div>
            ) : (
              ''
            )}
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                id="email"
                name="email"
                autoComplete="email"
                required
                value={user.email}
                onChange={handleChange}
                className="appearance-none rounded-lg relative block w-full px-3 py-2 border text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-lg"
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                autoComplete="password"
                required
                value={user.password}
                onChange={handleChange}
                className="appearance-none rounded-lg relative block w-full px-3 py-2 border text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-lg"
              />
            </div>
            <div>
              <button
                type="submit"
                className="relative w-full flex justify-center py-4 px-4  border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 mt-6"
              >
                {isSignup ? 'Sign Up' : 'Log In'}
              </button>
            </div>
            <div className="mt-4">
              <button
                type="button"
                onClick={handleToggle}
                className="mt-4 px-4 py-2 text-lg text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline "
              >
                {isSignup
                  ? 'Already have an account? Login'
                  : "Don't have an account? Sign up"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;