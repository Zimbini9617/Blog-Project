import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { authAction } from '../store';
const Header = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);
  const dispatch = useDispatch();

  return (
    <header className="bg-green-600 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-4xl font-semibold">
          <Link to="/">MY BLOG</Link>
        </h1>
        {isLoggedIn && (
          <nav className="flex gap-6 items-center text-lg font-medium">
            <Link to="/">Home</Link>
            <Link to="/blogs">Blogs</Link>
            <Link to="/user-blog">User Blog</Link>
            <Link to="/add-blog">Add Blog</Link>
          </nav>
        )}

        <div className="flex gap-2">
          {!isLoggedIn && (
            <>
              <button
                to="/auth"
                className="bg-slate-800 px-4 py-2 rounded-full"
              >
                <Link to="/auth">Login</Link>
              </button>
              <button className="bg-slate-800 px-4 py-2 rounded-full">
                <Link to="/auth">Signup</Link>
              </button>
            </>
          )}
          {isLoggedIn && (
            <button
              onClick={() => dispatch(authAction.logout())}
              className="bg-slate-800 px-4 py-2 rounded-full"
            >
              <Link to="/blogs">Logout</Link>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;