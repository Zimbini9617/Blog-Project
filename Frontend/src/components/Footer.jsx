import React from 'react';

const Footer = () => {
  return <footer className='bg-green-600 text-white font-semibold text-lg text-center py-4'>
    <p>&copy; {new Date().getFullYear()} MyBlog, Inc. All rights reserved</p>
  </footer>
}

export default Footer