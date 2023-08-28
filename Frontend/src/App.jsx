import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './components/Root';
import ErrorPage from './error-page';
import Home from './pages/Home';
import Auth from './components/Auth';
import Blogs from './components/Blogs';
import BlogDetail from './components/BlogDetail';
import UserBlogs from './components/UserBlogs';
import AddBlog from './components/AddBlog';
import UpdateBlog from './components/UpdateBlog'

const router = createBrowserRouter([{
element: <Root />,
errorElement: <ErrorPage />,
children: [
  {
   path: '/',
   element: <Home /> 
  },
  {
    path: '/auth',
    element: <Auth /> 
   },
   {
    path: '/blogs',
    element: <Blogs /> 
   },
   {
    path: '/blog-detail/:id',
    element: <BlogDetail /> 
   },
   {
    path: '/user-blogs',
    element: <UserBlogs /> 
   },
   {
    path: '/add-blog',
    element: <AddBlog /> 
   },
   {
    path: '/update-blog',
    element: <UpdateBlog /> 
   },
]
}]);
const App = () => {
  return <RouterProvider router={router} />;
}

export default App