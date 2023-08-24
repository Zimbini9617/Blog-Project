import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return <header className='bg-fuchsia-500 text-white'>
    <div className='container mx-auto flex justify-between items-center'>
    <h1 className='text-lg font-bold font-serif'>
      <Link to='/'>MYBLOG</Link>
    </h1>
    <nav className='flex gap-6 items-center font-medium font-serif'>
     <Link to='/'>Home</Link>
     <Link to='/blogs'>Blogs</Link>
     <Link to='/user-blogs'>UserBlogs</Link>
     <Link to='/add-blog'>AddBlog</Link>
     <button to='/auth' className='bg-neutral-400 px-4 py-2 rounded-full'>Login</button>
     <button to='/auth'>Signup</button>
     <button to='/auth'>Logout</button>
    </nav>
    </div>
  </header>
}

export default Header