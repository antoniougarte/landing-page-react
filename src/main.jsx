import React from 'react';
import ReactDOM from 'react-dom/client';
import './normalize.css';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    errorElement: <h1>Error</h1>
  },
  {
    path: '/about',
    element: <About/>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
