import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { authAction } from '../store';

const Header = () => {
const isLoggedIn = useSelector((state)=> state.isLoggedIn);
console.log(isLoggedIn);
const dispatch = useDispatch();

  return (
  <header className='bg-fuchsia-500 text-white'>
    <div className='container mx-auto flex justify-between items-center'>
    <h1 className='text-lg font-bold font-serif'>
      <Link to='/'>MYBLOG</Link>
    </h1>
    {isLoggedIn && (
      <nav className='flex gap-6 items-center font-medium font-serif'>
      <Link to='/'>Home</Link>
      <Link to='/blogs'>Blogs</Link>
      <Link to='/user-blogs'>UserBlogs</Link>
      <Link to='/add-blog'>AddBlog</Link>
     </nav>
    )}
    
    <div className='flex gap-2'>
      {!isLoggedIn && (
        <>
        <button className='bg-neutral-400 hover:bg-neutral-700 rounded-full px-4 py-2'>
        <Link to='/auth'>Login</Link>
        </button>
        <button className='bg-neutral-400 hover:bg-neutral-700 rounded-full px-4 py-2'>
        <Link to='/auth'>Signup</Link>
        </button>
        </>
      )}
    {isLoggedIn && (
      <button className='bg-neutral-400 hover:bg-neutral-700 rounded-full px-4 py-2'>
      <Link to='/auth'>Logout</Link>
    </button>
    )}
     
    </div>
    </div>
  </header>
  );
};

export default Header