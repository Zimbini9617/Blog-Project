import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './components/Root';
import ErrorPage from './error-page';
import Home from './pages/Home';
import Auth from './components/Auth';


const router = createBrowserRouter([{
element: <Root />,
errorElement: <ErrorPage />,
children: [
  {
   path: '/',
   element: <Home /> 
  },
  {
    path: '/',
    element: <Home /> 
   },
   {
    path: '/',
    element: <Home /> 
   },
   {
    path: '/',
    element: <Home /> 
   },
   {
    path: '/',
    element: <Home /> 
   },
   {
    path: '/',
    element: <Home /> 
   },
]
}]);
const App = () => {
  return (
    <div className='bg-blue-600'>App</div>
  )
}

export default App